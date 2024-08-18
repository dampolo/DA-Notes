import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'da-notes-895aa',
          appId: '1:857540623000:web:20b2b13b5b1bdec9266eed',
          storageBucket: 'da-notes-895aa.appspot.com',
          apiKey: 'AIzaSyCq_FgwZb6R4iieoC6uk1b8qa0T-18JFc4',
          authDomain: 'da-notes-895aa.firebaseapp.com',
          messagingSenderId: '857540623000',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
