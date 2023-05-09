export const phaserConfig: Phaser.Types.Core.GameConfig = {
  fps: {
    target: 60,
    forceSetTimeOut: false // Using requestAnimationFrame API render
  },
  render: {
    transparent: true, // Disable background transparency canvas,
    pixelArt: false,
    antialias: true,
    antialiasGL: true
  },
  transparent: true,
  type: Phaser.CANVAS,
  antialias: true,
  backgroundColor: '#d5d5d5',
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};
