import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "uploadingfile-6db19.firebaseapp.com",
    projectId: "uploadingfile-6db19",
    storageBucket: "uploadingfile-6db19.appspot.com",
    messagingSenderId: "573029816807",
    appId: "1:573029816807:web:26d404fac358605efec542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)