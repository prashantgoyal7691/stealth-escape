// Handcrafted level layouts for the game
const ASSASSIN_VISION_RANGE = 150;
const ASSASSIN_VISION_ANGLE = Math.PI / 4;

const levels = [
  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 120, y: 580, width: 50, height: 50 },
      { x: 230, y: 580, width: 50, height: 50 },

      { x: 90,  y: 480, width: 40, height: 40 },
      { x: 160, y: 480, width: 40, height: 40 },
      { x: 230, y: 480, width: 40, height: 40 },

      { x: 80,  y: 340, width: 20, height: 120 },
      { x: 300, y: 340, width: 20, height: 120 },

      { x: 120, y: 260, width: 50, height: 50 },
      { x: 200, y: 260, width: 50, height: 50 },

      { x: 90,  y: 140, width: 20, height: 100 },
      { x: 290, y: 140, width: 20, height: 100 },

      { x: 170, y: 120, width: 50, height: 50 }
    ],
    assassins: [
      {
        x: 200,
        y: 420,
        direction: -Math.PI / 2,
        visionRange: ASSASSIN_VISION_RANGE,
        visionAngle: ASSASSIN_VISION_ANGLE,
      },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 110, y: 590, width: 50, height: 50 },
      { x: 240, y: 590, width: 50, height: 50 },

      { x: 70,  y: 500, width: 40, height: 40 },
      { x: 150, y: 500, width: 40, height: 40 },
      { x: 230, y: 500, width: 40, height: 40 },
      { x: 310, y: 500, width: 40, height: 40 },

      { x: 90,  y: 340, width: 20, height: 180 },
      { x: 290, y: 340, width: 20, height: 180 },

      { x: 120, y: 260, width: 50, height: 50 },
      { x: 200, y: 260, width: 50, height: 50 },

      { x: 70,  y: 150, width: 20, height: 120 },
      { x: 310, y: 150, width: 20, height: 120 },

      { x: 140, y: 180, width: 50, height: 50 },
      { x: 210, y: 180, width: 50, height: 50 }
    ],
    assassins: [
      {
        x: 200,
        y: 420,
        direction: 0,
        visionRange: ASSASSIN_VISION_RANGE,
        visionAngle: ASSASSIN_VISION_ANGLE,
      },
      {
        x: 100,
        y: 300,
        direction: 0,
        visionRange: ASSASSIN_VISION_RANGE,
        visionAngle: ASSASSIN_VISION_ANGLE,
      },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 90,  y: 600, width: 40, height: 40 },
      { x: 150, y: 600, width: 40, height: 40 },
      { x: 210, y: 600, width: 40, height: 40 },
      { x: 270, y: 600, width: 40, height: 40 },

      { x: 70,  y: 360, width: 20, height: 200 },
      { x: 310, y: 360, width: 20, height: 200 },

      { x: 150, y: 420, width: 50, height: 50 },
      { x: 200, y: 420, width: 50, height: 50 },

      { x: 120, y: 260, width: 20, height: 120 },
      { x: 260, y: 260, width: 20, height: 120 },

      { x: 160, y: 140, width: 50, height: 50 }
    ],
    assassins: [
      {
        x: 200,
        y: 520,
        direction: -Math.PI / 2,
        visionRange: ASSASSIN_VISION_RANGE,
        visionAngle: ASSASSIN_VISION_ANGLE,
      },
      {
        x: 170,
        y: 360,
        direction: 0,
        visionRange: ASSASSIN_VISION_RANGE,
        visionAngle: ASSASSIN_VISION_ANGLE,
      },
      {
        x: 280,
        y: 220,
        direction: Math.PI,
        visionRange: ASSASSIN_VISION_RANGE,
        visionAngle: ASSASSIN_VISION_ANGLE,
      },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 80, y: 580, width: 60, height: 40 },
      { x: 260, y: 580, width: 60, height: 40 },

      { x: 120, y: 480, width: 40, height: 40 },
      { x: 200, y: 480, width: 40, height: 40 },

      { x: 80, y: 340, width: 20, height: 120 },
      { x: 300, y: 340, width: 20, height: 120 },

      { x: 160, y: 240, width: 80, height: 40 },

      { x: 100, y: 420, width: 40, height: 40 },
      { x: 260, y: 420, width: 40, height: 40 },

      { x: 140, y: 320, width: 40, height: 40 },
      { x: 220, y: 320, width: 40, height: 40 },

      { x: 170, y: 180, width: 60, height: 40 },
    ],
    assassins: [
      { x: 200, y: 460, direction: -Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 200, y: 160, direction: Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 100, y: 600, width: 200, height: 20 },

      { x: 80, y: 480, width: 20, height: 120 },
      { x: 300, y: 420, width: 20, height: 120 },

      { x: 120, y: 360, width: 160, height: 20 },

      { x: 80, y: 240, width: 20, height: 120 },
      { x: 300, y: 180, width: 20, height: 120 },

      { x: 160, y: 140, width: 80, height: 40 },

      { x: 140, y: 520, width: 40, height: 40 },
      { x: 220, y: 520, width: 40, height: 40 },

      { x: 100, y: 420, width: 40, height: 40 },
      { x: 260, y: 420, width: 40, height: 40 },

      { x: 180, y: 280, width: 40, height: 40 },
    ],
    assassins: [
      { x: 160, y: 460, direction: 0, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 280, y: 320, direction: Math.PI, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 60, y: 600, width: 120, height: 20 },
      { x: 220, y: 600, width: 120, height: 20 },

      { x: 180, y: 460, width: 40, height: 120 },

      { x: 80, y: 320, width: 240, height: 20 },

      { x: 120, y: 200, width: 60, height: 60 },
      { x: 220, y: 200, width: 60, height: 60 },

      { x: 100, y: 520, width: 40, height: 40 },
      { x: 260, y: 520, width: 40, height: 40 },

      { x: 140, y: 400, width: 40, height: 40 },
      { x: 220, y: 400, width: 40, height: 40 },

      { x: 170, y: 260, width: 60, height: 40 },
    ],
    assassins: [
      { x: 200, y: 440, direction: -Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 200, y: 220, direction: Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 120, y: 600, width: 160, height: 20 },

      { x: 100, y: 420, width: 20, height: 160 },
      { x: 280, y: 420, width: 20, height: 160 },

      { x: 160, y: 300, width: 80, height: 20 },

      { x: 100, y: 160, width: 20, height: 100 },
      { x: 280, y: 160, width: 20, height: 100 },

      { x: 140, y: 520, width: 40, height: 40 },
      { x: 220, y: 520, width: 40, height: 40 },

      { x: 140, y: 380, width: 40, height: 40 },
      { x: 220, y: 380, width: 40, height: 40 },

      { x: 170, y: 220, width: 60, height: 40 },
    ],
    assassins: [
      { x: 140, y: 480, direction: 0, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 260, y: 300, direction: Math.PI, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 80, y: 600, width: 60, height: 40 },
      { x: 160, y: 600, width: 60, height: 40 },
      { x: 240, y: 600, width: 60, height: 40 },

      { x: 80, y: 460, width: 40, height: 40 },
      { x: 160, y: 460, width: 40, height: 40 },
      { x: 240, y: 460, width: 40, height: 40 },

      { x: 100, y: 300, width: 200, height: 20 },

      { x: 160, y: 160, width: 80, height: 40 },

      { x: 120, y: 540, width: 40, height: 40 },
      { x: 200, y: 540, width: 40, height: 40 },

      { x: 120, y: 380, width: 40, height: 40 },
      { x: 200, y: 380, width: 40, height: 40 },

      { x: 160, y: 260, width: 60, height: 40 },
    ],
    assassins: [
      { x: 135, y: 500, direction: 0, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 280, y: 380, direction: Math.PI, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 200, y: 220, direction: Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 60, y: 600, width: 120, height: 20 },
      { x: 220, y: 600, width: 120, height: 20 },

      { x: 60, y: 440, width: 20, height: 120 },
      { x: 320, y: 440, width: 20, height: 120 },

      { x: 120, y: 320, width: 160, height: 20 },

      { x: 160, y: 180, width: 80, height: 40 },

      { x: 120, y: 520, width: 40, height: 40 },
      { x: 240, y: 520, width: 40, height: 40 },

      { x: 140, y: 400, width: 40, height: 40 },
      { x: 220, y: 400, width: 40, height: 40 },

      { x: 170, y: 260, width: 60, height: 40 },
    ],
    assassins: [
      { x: 100, y: 480, direction: 0, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 300, y: 360, direction: Math.PI, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 200, y: 240, direction: -Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },

  {
    start: { x: 200, y: 660 },
    exit: { x: 180, y: 40, width: 40, height: 40 },
    walls: [
      { x: 0, y: 0, width: 400, height: 20 },
      { x: 0, y: 680, width: 400, height: 20 },
      { x: 0, y: 0, width: 20, height: 700 },
      { x: 380, y: 0, width: 20, height: 700 },

      { x: 100, y: 600, width: 200, height: 20 },

      { x: 80, y: 460, width: 20, height: 140 },
      { x: 300, y: 460, width: 20, height: 140 },

      { x: 140, y: 360, width: 120, height: 20 },

      { x: 120, y: 240, width: 60, height: 60 },
      { x: 220, y: 240, width: 60, height: 60 },

      { x: 120, y: 540, width: 40, height: 40 },
      { x: 240, y: 540, width: 40, height: 40 },

      { x: 140, y: 420, width: 40, height: 40 },
      { x: 220, y: 420, width: 40, height: 40 },

      { x: 170, y: 300, width: 60, height: 40 },
    ],
    assassins: [
      { x: 120, y: 500, direction: 0, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 280, y: 380, direction: Math.PI, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
      { x: 200, y: 240, direction: Math.PI / 2, visionRange: ASSASSIN_VISION_RANGE, visionAngle: ASSASSIN_VISION_ANGLE },
    ],
  },
];
