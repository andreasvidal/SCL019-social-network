/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// funcion que inicaliza la aplicación
//import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// se importa función para obtener los servicios de firestore y conectar a la BdD
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    deleteDoc,
    Timestamp,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { printComments } from "../lib/views/post.js";

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

//------------------- GUARDAR DATOS POST ---------------------------

export const createPost = async(inputTitle, textArea) => {
    // Add a new document with a generated id.
    const date = Timestamp.fromDate(new Date());
    const userId = auth.currentUser.uid;
    /*const name = auth.currentUser.displayName;
      const likes = [];
      const likesCounter = 0;*/
    await addDoc(collection(db, "post"), {
        inputTitle,
        textArea,
        date,
    }); //guardamos la coleccion post
};
// --------------------LEER DATOS POST----------------------
const getTask = () => getDocs(collection(db, "post"));

export const readDataPost = async() => {
    const querySnapshot = await getTask();
    //console.log(querySnapshot)

    const q = query(collection(db, "post"), orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const docPost = doc.data();
            printComments(docPost);
            //console.log(docPost)
        });
        return printComments;
    });
};
//CREAR USUARIOS
const auth = getAuth(app);
export const dataUser = () => {
        let email = document.getElementById("inputEmail").value;
        console.log(email)
        let password = document.getElementById("inputPassword").value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Usuario registrado!');
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }
    //FUNCION PARA INICIAR SESIÓN
const singIn = () => {
    var email = document.getElementById('email2').value;
    var contrasena = document.getElementById('contrasena2').value;

    firebase.auth().signInWithEmailAndPassword(email, contrasena)
        .then((user) => {
            // Signed in
            // ...
            console.log('sesión iniciada');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}