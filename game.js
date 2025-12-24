const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let currentLevel = 0;
let player;
let walls = [];
let assassins = [];
let exitZone;

const keys = {};

function resetKeys() {
  for (let k in keys) {
    keys[k] = false;
  }
}

const speed = 2.5;
const assassinSpeed = 1.2;
const ROTATION_SPEED = 0.08;

let isRunning = false;
let animationId = null;

function getRandomAxisDirection() {
  const dirs = [
    { vx: 1, vy: 0, angle: 0 },
    { vx: -1, vy: 0, angle: Math.PI },
    { vx: 0, vy: 1, angle: Math.PI / 2 },
    { vx: 0, vy: -1, angle: -Math.PI / 2 },
  ];
  return dirs[Math.floor(Math.random() * dirs.length)];
}

/* ================= INPUT ================= */
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

/* ================= LOAD LEVEL ================= */
function loadLevel(index) {
  resetKeys();
  const lvl = levels[index];

  player = {
    x: lvl.start.x,
    y: lvl.start.y,
    radius: 10,
  };

  walls = lvl.walls;
  exitZone = lvl.exit;

  assassins = lvl.assassins.map((a) => {
    const angle = a.direction;
    let dir;

    if (Math.abs(Math.cos(angle)) > Math.abs(Math.sin(angle))) {
      dir =
        angle >= 0
          ? { vx: 1, vy: 0, angle: 0 }
          : { vx: -1, vy: 0, angle: Math.PI };
    } else {
      dir =
        angle >= 0
          ? { vx: 0, vy: 1, angle: Math.PI / 2 }
          : { vx: 0, vy: -1, angle: -Math.PI / 2 };
    }

    return {
      ...a,
      vx: dir.vx * assassinSpeed,
      vy: dir.vy * assassinSpeed,
      direction: dir.angle,
      targetDirection: dir.angle,
      changeTimer: 0,
    };
  });

  currentLevel = index;

  // ✅ UPDATE UI TEXT
  document.getElementById("level").innerText = `Level ${index + 1}`;
}

/* ================= MAIN LOOP ================= */
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let prevX = player.x;
  let prevY = player.y;

  /* ---- Player movement ---- */
  if (keys["ArrowUp"] || keys["w"]) player.y -= speed;
  if (keys["ArrowDown"] || keys["s"]) player.y += speed;
  if (keys["ArrowLeft"] || keys["a"]) player.x -= speed;
  if (keys["ArrowRight"] || keys["d"]) player.x += speed;

  /* ---- Wall collision ---- */
  for (let wall of walls) {
    if (circleRectCollision(player, wall)) {
      player.x = prevX;
      player.y = prevY;
      break;
    }
  }

  /* ---- Canvas bounds ---- */
  player.x = Math.max(
    player.radius,
    Math.min(canvas.width - player.radius, player.x)
  );
  player.y = Math.max(
    player.radius,
    Math.min(canvas.height - player.radius, player.y)
  );

  /* ---- Assassin random movement ---- */
  for (let assassin of assassins) {
    assassin.changeTimer++; // (1) INCREMENT changeTimer
    const radius = 12;

    /* ---- X movement ---- */
    assassin.x += assassin.vx;
    for (let wall of walls) {
      if (circleRectCollision({ x: assassin.x, y: assassin.y, radius }, wall)) {
        assassin.x -= assassin.vx;
        const dir = getRandomAxisDirection();
        assassin.vx = dir.vx * assassinSpeed;
        assassin.vy = dir.vy * assassinSpeed;
        assassin.targetDirection = dir.angle;
        assassin.changeTimer = 0;
        break;
      }
    }

    /* ---- Y movement ---- */
    assassin.y += assassin.vy;
    for (let wall of walls) {
      if (circleRectCollision({ x: assassin.x, y: assassin.y, radius }, wall)) {
        assassin.y -= assassin.vy;
        const dir = getRandomAxisDirection();
        assassin.vx = dir.vx * assassinSpeed;
        assassin.vy = dir.vy * assassinSpeed;
        assassin.targetDirection = dir.angle;
        assassin.changeTimer = 0;
        break;
      }
    }

    if (
      assassin.x < 20 ||
      assassin.x > canvas.width - 20 ||
      assassin.y < 20 ||
      assassin.y > canvas.height - 20
    ) {
      const dir = getRandomAxisDirection();
      assassin.vx = dir.vx * assassinSpeed;
      assassin.vy = dir.vy * assassinSpeed;
      assassin.targetDirection = dir.angle;
      assassin.changeTimer = 0;
    }

    if (assassin.changeTimer > 120) {
      const dir = getRandomAxisDirection();
      assassin.vx = dir.vx * assassinSpeed;
      assassin.vy = dir.vy * assassinSpeed;
      assassin.targetDirection = dir.angle;
      assassin.changeTimer = 0;
    }

    // (6) FINAL SAFETY: never allow zero velocity
    if (assassin.vx === 0 && assassin.vy === 0) {
      const dir = getRandomAxisDirection();
      assassin.vx = dir.vx * assassinSpeed;
      assassin.vy = dir.vy * assassinSpeed;
      assassin.targetDirection = dir.angle;
    }

    // (7) SMOOTH ROTATION: ensure every frame
    let diff = assassin.targetDirection - assassin.direction;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));

    if (Math.abs(diff) < ROTATION_SPEED) {
      assassin.direction = assassin.targetDirection;
    } else {
      assassin.direction += Math.sign(diff) * ROTATION_SPEED;
    }
  }

  /* ---- Draw walls ---- */
  ctx.fillStyle = "#334155";
  for (let wall of walls) {
    ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
  }

  /* ---- Draw exit ---- */
  ctx.fillStyle = "#22c55e"; // green
  ctx.fillRect(exitZone.x, exitZone.y, exitZone.width, exitZone.height);

  /* ---- Draw assassins + vision cones ---- */
  for (let assassin of assassins) {
    const start = assassin.direction - assassin.visionAngle / 2;
    const end = assassin.direction + assassin.visionAngle / 2;

    ctx.fillStyle = "rgba(255,0,0,0.25)";
    ctx.beginPath();
    ctx.moveTo(assassin.x, assassin.y);

    const rayCount = 40;
    for (let i = 0; i <= rayCount; i++) {
      const angle = start + (i / rayCount) * (end - start);

      const targetX = assassin.x + Math.cos(angle) * assassin.visionRange;
      const targetY = assassin.y + Math.sin(angle) * assassin.visionRange;

      const hit = rayHitsWall(assassin.x, assassin.y, targetX, targetY, walls);

      if (hit) {
        ctx.lineTo(hit.x, hit.y);
      } else {
        ctx.lineTo(targetX, targetY);
      }
    }

    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(assassin.x, assassin.y, 12, 0, Math.PI * 2);
    ctx.fill();

    /* ---- Player detection ---- */
    if (isPlayerInVisionCone(player, assassin)) {
      let blocked = false;

      for (let wall of walls) {
        if (
          lineIntersectsRect(assassin.x, assassin.y, player.x, player.y, wall)
        ) {
          blocked = true;
          break;
        }
      }

      if (!blocked) {
        alert("You were spotted!");
        loadLevel(currentLevel);
      }
    }
  }

  /* ---- Draw player ---- */
  ctx.fillStyle = "lime";
  ctx.beginPath();
  ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
  ctx.fill();

  /* ---- Win condition ---- */
  if (
    player.x > exitZone.x &&
    player.x < exitZone.x + exitZone.width &&
    player.y > exitZone.y &&
    player.y < exitZone.y + exitZone.height
  ) {
    alert("Level Complete!");
    loadLevel((currentLevel + 1) % levels.length);
  }

  if (isRunning) {
    animationId = requestAnimationFrame(update);
  }
}

/* ================= COLLISION ================= */
function circleRectCollision(circle, rect) {
  const cx = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
  const cy = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));
  const dx = circle.x - cx;
  const dy = circle.y - cy;
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

function isPlayerInVisionCone(player, assassin) {
  const dx = player.x - assassin.x;
  const dy = player.y - assassin.y;

  const distanceToPlayer = Math.hypot(dx, dy);
  if (distanceToPlayer > assassin.visionRange) return false;

  const angleToPlayer = Math.atan2(dy, dx);
  let angleDiff = angleToPlayer - assassin.direction;

  // Normalize angle between -PI and PI
  angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));

  return Math.abs(angleDiff) <= assassin.visionAngle / 2;
}

function lineIntersectsRect(x1, y1, x2, y2, rect) {
  function lineIntersectsLine(a, b, c, d, e, f, g, h) {
    const det = (c - a) * (h - f) - (d - b) * (g - e);
    if (det === 0) return false;

    const t = ((e - a) * (h - f) - (f - b) * (g - e)) / det;
    const u = ((e - a) * (d - b) - (f - b) * (c - a)) / det;

    return t >= 0 && t <= 1 && u >= 0 && u <= 1;
  }

  return (
    lineIntersectsLine(
      x1,
      y1,
      x2,
      y2,
      rect.x,
      rect.y,
      rect.x + rect.width,
      rect.y
    ) ||
    lineIntersectsLine(
      x1,
      y1,
      x2,
      y2,
      rect.x,
      rect.y,
      rect.x,
      rect.y + rect.height
    ) ||
    lineIntersectsLine(
      x1,
      y1,
      x2,
      y2,
      rect.x + rect.width,
      rect.y,
      rect.x + rect.width,
      rect.y + rect.height
    ) ||
    lineIntersectsLine(
      x1,
      y1,
      x2,
      y2,
      rect.x,
      rect.y + rect.height,
      rect.x + rect.width,
      rect.y + rect.height
    )
  );
}

function rayHitsWall(x1, y1, x2, y2, walls) {
  let closestDist = Infinity;
  let hitPoint = null;

  for (let wall of walls) {
    const edges = [
      [wall.x, wall.y, wall.x + wall.width, wall.y],
      [wall.x, wall.y, wall.x, wall.y + wall.height],
      [wall.x + wall.width, wall.y, wall.x + wall.width, wall.y + wall.height],
      [wall.x, wall.y + wall.height, wall.x + wall.width, wall.y + wall.height],
    ];

    for (let [x3, y3, x4, y4] of edges) {
      const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
      if (denom === 0) continue;

      const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denom;
      const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denom;

      if (t > 0 && t < 1 && u > 0 && u < 1) {
        const ix = x1 + t * (x2 - x1);
        const iy = y1 + t * (y2 - y1);
        const dist = Math.hypot(ix - x1, iy - y1);

        if (dist < closestDist) {
          closestDist = dist;
          hitPoint = { x: ix, y: iy };
        }
      }
    }
  }

  return hitPoint;
}

window.restartLevel = function () {
  loadLevel(currentLevel);
};

/* ================= START ================= */

window.prevLevel = function () {
  let idx = (currentLevel - 1 + levels.length) % levels.length;
  loadLevel(idx);
};

window.nextLevel = function () {
  let idx = (currentLevel + 1) % levels.length;
  loadLevel(idx);
};

window.togglePlay = function () {
  isRunning = !isRunning;

  const btn = document.getElementById("playBtn");

  if (isRunning) {
    btn.innerText = "Stop";
    animationId = requestAnimationFrame(update);
  } else {
    btn.innerText = "Start";
    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }
};

loadLevel(0);
