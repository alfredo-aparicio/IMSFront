import 'zone.js'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppComponent } from './app/app.component';
import { Login } from './app/components/login/login';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideRouter, Routes } from '@angular/router';
import { environment } from './app/environments/environment';



const routes: Routes = [
  // define tus rutas aquí
];

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule, MatSlideToggleModule),
    
    provideAuth(() => getAuth()),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));