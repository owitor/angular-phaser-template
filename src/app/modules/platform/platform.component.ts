import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  NgZone,
  OnDestroy,
  Optional,
  SkipSelf,
  ViewChild
} from '@angular/core';

import Phaser from 'phaser';
import {phaserConfig} from '@modules/platform/config/phaser.config';
import {WorldScene} from '@modules/platform/scenes/world.scene';
import {ServiceInjector} from '@modules/platform/services/service-injector/service-injector.service';

@Component({
  selector: 'app-platform',
  standalone: true,
  imports: [],
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlatformComponent implements AfterViewInit, OnDestroy {
  @ViewChild('platformCanvas', { static: true }) canvasElement: ElementRef<HTMLCanvasElement>;

  private ngZone: NgZone = inject(NgZone);

  /**
   * Service for loading others services in phaser context
   * @private
   */
  private serviceInjector = inject(ServiceInjector);

  /**
   * We need the Phaser.Game to live inside our own class because extending Phaser.Game would require a super call
   * @private
   */
  private activeGame: Phaser.Game;

  constructor(@Optional() @SkipSelf() parent: PlatformComponent) {
    if (parent) throw new Error('Platform singleton is already loaded. Import only once');
  }

  /**
   * Initializes the active Phaser.Game
   * The Phaser.Game instance owns Scene Manager, Texture Manager, Animations FrameHandler, and Device Class as GLOBALS
   */
  ngAfterViewInit(): void {
    console.warn('phaser-singleton initializing...');

    this.ngZone.runOutsideAngular((): void => {
      this.activeGame = new Phaser.Game({
        ...phaserConfig,
        parent: this.canvasElement.nativeElement,
        scene: [new WorldScene(this.serviceInjector)],
        scale: {
          ...phaserConfig.scale
        }
      });
    });
  }

  /**
   * When A user Logs out, destroy the active game.
   */
  public ngOnDestroy(): void {
    // Param 1: Set to true if you would like the parent canvas element removed from the DOM.
    // Param 2: Set to false  If you do need to create another game instance on the same page
    if (this.activeGame) {
      this.activeGame.destroy(true, false);
    }
  }
}
