import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"apiKey": "",
      "authDomain": "prashiksha-12102.firebaseapp.com",
      "projectId": "prashiksha-12102",
      "storageBucket": "prashiksha-12102.firebasestorage.app",
      "messagingSenderId": "92972852980",
      "appId": "1:92972852980:web:0660d73067969a94cfa0a1",
      "measurementId": "G-J0XXTCGF3P"})),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideDatabase(() => getDatabase())
  ]
};
