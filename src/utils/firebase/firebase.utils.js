import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA16hDop6fH-fZF3qPTOISrLLobT_CksjQ",
  authDomain: "newcrwn-clothing-db.firebaseapp.com",
  projectId: "newcrwn-clothing-db",
  storageBucket: "newcrwn-clothing-db.appspot.com",
  messagingSenderId: "301157441283",
  appId: "1:301157441283:web:127a6af1f6a0376584d336",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
