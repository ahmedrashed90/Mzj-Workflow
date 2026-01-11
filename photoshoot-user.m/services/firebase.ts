
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FIREBASE_CONFIG } from '../constants';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
export const fieldValue = firebase.firestore.FieldValue;

export default firebase;
