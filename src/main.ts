import { bootstrapApplication } from '@angular/platform-browser';
import { rootConfig } from './app/root.config';
import { RootComponent } from './app/root.component';

bootstrapApplication(RootComponent, rootConfig).catch((err) => console.error(err));
