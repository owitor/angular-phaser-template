import { inject, Injectable, Injector, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceInjector {
  private injector = inject(Injector);

  /**
   * Responsible for loading the services within the phaser context
   * @param serviceToken
   */
  use<T>(serviceToken: Type<T>): T {
    return this.injector.get<T>(serviceToken);
  }
}
