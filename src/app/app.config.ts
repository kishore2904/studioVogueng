import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth } from 'firebase/auth';
import { routes } from './app.routes';
const firebaseConfig = {
  apiKey: "AIzaSyA3gKYNdj7fL7JGgDNX2kIkI8GEv2ghatI",
  authDomain: "studiovogueng.firebaseapp.com",
  projectId: "studiovogueng",
  storageBucket: "studiovogueng.appspot.com",
  messagingSenderId: "780642476620",
  appId: "1:780642476620:web:2783e8e82dcc3698d8cae9",
  measurementId: "G-SGBEK1295B"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Make sure 'routes' is defined
    provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ])
  ]
};