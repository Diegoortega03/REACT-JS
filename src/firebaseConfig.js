

import {getFirestore} from "firebase/firestore"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA9HKM3jYEmrPK3BvP9NeoWVsej0NkCvaw",
  authDomain: "choupo-b619c.firebaseapp.com",
  projectId: "choupo-b619c",
  storageBucket: "choupo-b619c.appspot.com",
  messagingSenderId: "206142510207",
  appId: "1:206142510207:web:0a91266f30e210bc075b4a"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore (app)