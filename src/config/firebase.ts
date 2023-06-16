import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseAuthDomain,
  firebaseMessagingSenderId,
  firebaseProjectId,
  firebaseStorageBucket,
} from 'utils/env';

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: firebaseAuthDomain,
  projectId: firebaseProjectId,
  storageBucket: firebaseStorageBucket,
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
