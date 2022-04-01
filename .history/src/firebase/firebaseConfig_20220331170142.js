//* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// funcion que inicaliza la aplicación
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiGtmDy7pXtGBhp7DQ-P7kNTGPLcYCT1w",
    authDomain: "scl019-social-network.firebaseapp.com",
    projectId: "scl019-social-network",
    storageBucket: "scl019-social-network.appspot.com",
    messagingSenderId: "688901907009",
    appId: "1:688901907009:web:17e9dc19d24585836f9cc0",
};
//guarda la info del proyecto
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// se rea una const db (data base) y se llama a getFirestore y dentro se pasa la app (aplication)
// dentro de db se accede a firestore
// para poder acceder a la variable se exporta
//dentro de const db se tiene acceso a firestore
const db = getFirestore(app);
//export const auth = getAuth(app); // Initialize Firebasegit
//export const user = auth.currentUser; // autentifica el usuario

// guardar datos post
export const createPost = async(inputTitle, textArea) => {
    // Add a new document with a generated id.
    const date = Timestamp.fromDate(new Date());
    await addDoc(collection(db, "post"), {
        inputTitle,
        textArea,
        date,
    }); //guardamos la coleccion post
};