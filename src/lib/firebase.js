// aqui exportaras las funciones que necesites

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// Enlazamos visual con firebase

const firebaseConfig = {
  apiKey: 'AIzaSyC_d9mt29SbKwKTzxAqIJlGr7q-H3i7PiA',
  authDomain: 'likeplants-c4327.firebaseapp.com',
  projectId: 'likeplants-c4327',
  storageBucket: 'likeplants-c4327.appspot.com',
  messagingSenderId: '456213824098',
  appId: '1:456213824098:web:fe3fb0aab88bf19d69073b',
  measurementId: 'G-49HPL6KVN9',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Crear nueva cuenta pasando la dirección de correo electrónico y la contraseña del nuevo usuario
const auth = getAuth(app);
export const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const login= (email, password) => signInWithEmailAndPassword(auth, email, password);


// Inicia sesión como usuario con una dirección de correo electrónico y una contraseña

//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

// import { getFirestore } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
