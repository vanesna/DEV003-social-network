// aqui exportaras las funciones que necesites

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import

{
  getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
// Enlazamos visual con firebase

const firebaseConfig = {
  apiKey: 'AIzaSyAXa8j4Ybc510kv68WeHddFaKFWOXkqhsM',
  authDomain: 'likeplants-bc662.firebaseapp.com',
  projectId: 'likeplants-bc662',
  storageBucket: 'likeplants-bc662.appspot.com',
  messagingSenderId: '1094663123741',
  appId: '1:1094663123741:web:439a81d9b80773221527f4',
  measurementId: 'G-LX9KPQYCP0',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Crear nueva cuenta pasando la dirección de correo electrónico y la contraseña del nuevo usuario
const auth = getAuth(app); // constante para poder autenticar usuarios
export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);

// login con boton google
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
