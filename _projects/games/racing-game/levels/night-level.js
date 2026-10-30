import GameEnvBackground from '@assets/js/GameEnginev1.1/essentials/GameEnvBackground.js';
import Player from './RacingPlayer.js';
import SplineBarrier from '@assets/js/GameEnginev1.1/essentials/SplineBarrier.js';
import TimeLapScreen from './TimeLapScreen.js';

class GameLevelNight {
  static friendlyName = "Night Course";

  constructor(gameEnv) {
    const path = gameEnv.path;
    const background_data = {
      name: "Night Course",
      greeting: "Welcome to the Night Level!",
      src: path + '/images/projects/racing-game/nightcitylevel.png',
      pixels: { height: 522, width: 815 }
    };
    const player_data = {
      name: "Red Car",
      greeting: "I'm the red car!",
      src: path + '/images/projects/racing-game/Directions_red_car.png',
      SCALE_FACTOR: 10,
      STEP_FACTOR: 1100,
      INIT_POSITION: { x: 0.43, y: 0.82 },
      pixels: { height: 1024, width: 1536 },
      orientation: { rows: 4, columns: 4 },
      up:        { row: 3, start: 0, columns: 1 },
      upRight:   { row: 0, start: 2, columns: 1, rotate: Math.PI },
      right:     { row: 1, start: 0, columns: 1 },
      downRight: { row: 2, start: 0, columns: 1 },
      down:      { row: 0, start: 0, columns: 1 },
      downLeft:  { row: 0, start: 2, columns: 1 },
      left:      { row: 3, start: 2, columns: 1 },
      upLeft:    { row: 2, start: 0, columns: 1, rotate: Math.PI },
      hitbox: { widthPercentage: 0.5, heightPercentage: 0.5 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };
    const other_data = {
      ...player_data,
      name: "Blue Car",
      greeting: "I'm the blue car!",
      src: path + '/images/projects/racing-game/Directions_blue_car.png',
      INIT_POSITION: { x: 0.43, y: 0.9 },
      keypress: { up: 38, left: 37, down: 40, right: 39 }
    };
    const barrierData1 = {
      id: "night-barrier-1",
      coordinateSpace: "normalized",
      splinePoints: [
        { x: 0.4, y: 0.91 }, { x: 0.4, y: 0.86 }, { x: 0.39, y: 0.8 },
        { x: 0.34, y: 0.77 }, { x: 0.22, y: 0.77 }, { x: 0.13, y: 0.74 },
        { x: 0.08, y: 0.69 }, { x: 0.08, y: 0.61 }, { x: 0.12, y: 0.56 },
        { x: 0.23, y: 0.55 }, { x: 0.35, y: 0.56 }, { x: 0.4, y: 0.54 },
        { x: 0.44, y: 0.5 }, { x: 0.44, y: 0.45 }, { x: 0.39, y: 0.41 },
        { x: 0.28, y: 0.4 }, { x: 0.19, y: 0.4 }, { x: 0.13, y: 0.37 },
        { x: 0.11, y: 0.32 }, { x: 0.12, y: 0.27 }, { x: 0.16, y: 0.22 },
        { x: 0.23, y: 0.2 }, { x: 0.31, y: 0.2 }, { x: 0.38, y: 0.23 },
        { x: 0.44, y: 0.29 }, { x: 0.5, y: 0.31 }, { x: 0.57, y: 0.29 },
        { x: 0.65, y: 0.25 }, { x: 0.73, y: 0.24 }, { x: 0.8, y: 0.27 },
        { x: 0.85, y: 0.32 }, { x: 0.88, y: 0.38 }, { x: 0.88, y: 0.43 },
        { x: 0.84, y: 0.48 }, { x: 0.78, y: 0.51 }, { x: 0.74, y: 0.55 },
        { x: 0.74, y: 0.59 }, { x: 0.78, y: 0.62 }, { x: 0.86, y: 0.64 },
        { x: 0.92, y: 0.68 }, { x: 0.94, y: 0.73 }, { x: 0.91, y: 0.78 },
        { x: 0.86, y: 0.81 }, { x: 0.75, y: 0.81 }, { x: 0.65, y: 0.8 },
        { x: 0.59, y: 0.81 }, { x: 0.58, y: 0.85 }, { x: 0.58, y: 0.91 }
      ],
      visible: false,
      hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
      fromOverlay: true
    };
    const barrierData2 = {
      id: "night-barrier-2",
      coordinateSpace: "normalized",
      splinePoints: [
        { x: 0.59, y: 0.91 }, { x: 0.59, y: 0.84 }, { x: 0.57, y: 0.79 },
        { x: 0.52, y: 0.75 }, { x: 0.45, y: 0.73 }, { x: 0.34, y: 0.72 },
        { x: 0.22, y: 0.72 }, { x: 0.17, y: 0.69 }, { x: 0.15, y: 0.65 },
        { x: 0.17, y: 0.61 }, { x: 0.23, y: 0.6 }, { x: 0.33, y: 0.61 },
        { x: 0.4, y: 0.61 }, { x: 0.47, y: 0.58 }, { x: 0.51, y: 0.53 },
        { x: 0.51, y: 0.47 }, { x: 0.48, y: 0.42 }, { x: 0.43, y: 0.38 },
        { x: 0.34, y: 0.37 }, { x: 0.24, y: 0.37 }, { x: 0.19, y: 0.34 },
        { x: 0.19, y: 0.3 }, { x: 0.22, y: 0.26 }, { x: 0.28, y: 0.25 },
        { x: 0.34, y: 0.26 }, { x: 0.4, y: 0.3 }, { x: 0.46, y: 0.35 },
        { x: 0.52, y: 0.36 }, { x: 0.6, y: 0.34 }, { x: 0.67, y: 0.31 },
        { x: 0.73, y: 0.3 }, { x: 0.77, y: 0.33 }, { x: 0.8, y: 0.37 },
        { x: 0.8, y: 0.4 }, { x: 0.77, y: 0.43 }, { x: 0.71, y: 0.46 },
        { x: 0.67, y: 0.5 }, { x: 0.66, y: 0.55 }, { x: 0.68, y: 0.6 },
        { x: 0.73, y: 0.65 }, { x: 0.81, y: 0.68 }, { x: 0.86, y: 0.7 },
        { x: 0.87, y: 0.73 }, { x: 0.85, y: 0.76 }, { x: 0.8, y: 0.77 },
        { x: 0.72, y: 0.77 }, { x: 0.64, y: 0.76 }, { x: 0.58, y: 0.76 },
        { x: 0.53, y: 0.79 }, { x: 0.52, y: 0.84 }, { x: 0.52, y: 0.91 }
      ],
      visible: false,
      hitbox: { widthPercentage: 0.0, heightPercentage: 0.0 },
      fromOverlay: true
    };
    const lap_data = {
      totalLaps: 3,
      finishLine: { x: 0.5, top: 0.78, bottom: 0.9 },
      hudPosition: { x: 0.01, y: 0.02 }
    };

    this.classes = [
      { class: GameEnvBackground, data: background_data },
      { class: Player, data: player_data },
      { class: Player, data: other_data },
      { class: SplineBarrier, data: barrierData1 },
      { class: SplineBarrier, data: barrierData2 },
      { class: TimeLapScreen, data: lap_data }
    ];
  }
}

export default GameLevelNight;