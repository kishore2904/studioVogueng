import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core.module';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
