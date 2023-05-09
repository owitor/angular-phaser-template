import Phaser from 'phaser';
import {ServiceInjector} from '@modules/platform/services/service-injector/service-injector.service';
import LoaderPlugin = Phaser.Loader.LoaderPlugin;

export class WorldScene extends Phaser.Scene {

  constructor(private injector: ServiceInjector) {
    super({ key: 'WorldScene' });
  }

  /**
   * Called when scene is initialized before the method create
   */
  init(): void {

  }

  /**
   * Called before phaser initiated for load all assets and images
   */
  preload(): void {
    try {
      console.log('world.scene.ts', 'Preloading Assets...');


      this.load.on('complete', (loader: LoaderPlugin): void => {
        if (loader.totalFailed > 0) throw new Error('Some asset was not loaded correctly');
      });
    } catch (e) {
      console.error('world.scene.ts', 'error preloading', e);
    }
  }

  /**
   * Called after all assets loaded in preload method
   */
  create(): void {
    console.log('world.scene.ts', 'Creating Assets...');
  }

  override update(): void {
  }
}
