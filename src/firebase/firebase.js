// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products th
//  const storage =  getStorageat you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRErb5piqFHR2JY4u7H49M5YGUycSo4XQ",
    authDomain: "projectmd6-be31e.firebaseapp.com",
    projectId: "projectmd6-be31e",
    storageBucket: "projectmd6-be31e.appspot.com",
    messagingSenderId: "814267660944",
    appId: "1:814267660944:web:75d641098e893339fa3615",
    measurementId: "G-76ZW90HWMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage =  getStorage()