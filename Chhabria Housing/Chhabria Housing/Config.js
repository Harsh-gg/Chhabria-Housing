import { initializeApp } from "firebase/app";
import {getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAcpZaVURlV6z5uYeNjhwY_AftSXRHnmHs",
  authDomain: "chhabria-housing.firebaseapp.com",
  databaseURL: "https://chhabria-housing-default-rtdb.firebaseio.com",
  projectId: "chhabria-housing",
  storageBucket: "chhabria-housing.appspot.com",
  messagingSenderId: "470225876734",
  appId: "1:470225876734:web:b6a5d58de60e31bf7e97af"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);