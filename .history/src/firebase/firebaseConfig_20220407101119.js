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
    doc,
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
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

import { printComments } from "../lib/views/post.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// -------------------Firebase configuration----------------------

const firebaseConfig = {
    apiKey: "AIzaSyCiGtmDy7pXtGBhp7DQ-P7kNTGPLcYCT1w",
    authDomain: "scl019-social-network.firebaseapp.com",
    projectId: "scl019-social-network",
    storageBucket: "scl019-social-network.appspot.com",
    messagingSenderId: "688901907009",
    appId: "1:688901907009:web:17e9dc19d24585836f9cc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// se rea una const db (data base) y se llama a getFirestore y dentro se pasa la app (aplication)
// dentro de db se accede a firestore
// para poder acceder a la variable se exporta
//dentro de const db se tiene acceso a firestore
const db = getFirestore(app);
//export const auth = getAuth(app); // Initialize Firebasegit
//export const user = auth.currentUser; // autentifica el usuario
//const auth = getAuth(app);


//------------------- GUARDAR DATOS POST ---------------------------

export const createPost = async(inputTitle, textArea) => { // Add a new document with a generated id.

    const date = Timestamp.fromDate(new Date("07-04-2022"));
    const userId = auth.currentUser.uid;
    let userName;
    if (auth.currentUser.displayName === null) {
        const newName = auth.currentUser.email.split("@");
        userName = newName[0];
    } else {
        userName = auth.currentUser.displayName;
    }
    /*const name = auth.currentUser.displayName;
      const likes = [];
      const likesCounter = 0;*/
    await addDoc(collection(db, "post"), {
        inputTitle,
        textArea,
        date,
        userId,
        name: userName

    }); //guardamos la coleccion post
};


// --------------------LEER DATOS POST----------------------

export const readDataPost = async() => {

    const q = query(collection(db, "post"), orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {

            const docPost = doc.data();
            printComments(docPost, doc.id);
            //console.log(docPost)
        });
        return printComments;
    });
};
//----------------------CREAR USUARIOS--------------------------

export const createUser = (inputUser, inputPassword) => {
    console.log("creando el usuario")
    createUserWithEmailAndPassword(auth, inputUser, inputPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            console.log('¡Creamos al usuario!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};



//---------------FUNCION PARA INICIAR SESIÓN---------------------
//usuario: 1234
//correo: 1234@gmail.com
//contraseña: 123456
const auth = getAuth();

export const singIn = async() => {

    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.hash = "#/post"
                // Signed in
                // ...
            console.log('sesión iniciada');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/invalid-email') {
                root.querySelector("#containerErrorLogin").innerHTML = "<p>Email Invalido</p>";

                //---si no esta ingresado el corro, arroja mensaje--
            } else if (errorCode === 'auth/missing-email') {
                root.querySelector("#containerErrorLogin").innerHTML = "<p>Ingresar Email</p>";

            } else if (errorCode === 'auth/internal-error') {
                root.querySelector("#containerErrorLogin").innerHTML = "<p>Rellene todos los campos</p>";

            } else if (errorCode === 'auth/wrong-password') {
                root.querySelector("#containerErrorLogin").innerHTML = "<p>Contraseña minimo 6 caracteres</p>";
            }
        });
}

//--------------------------------LOG OUT----------------------------------------


export const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.hash = "#/home"
    }).catch((error) => {
        // An error happened.
    })
}

//-----------------------------ELIMINAR POST-------------------------------------------

export const deletePost = async(id) => {
    await deleteDoc(doc(db, "post", id));
    console.log(deletePost);
};

// Editar datos
export const editPost = async(id) => {
    const refreshPost = doc(db, "post", id);
    await updateDoc(refreshPost, {
        textArea: textArea
    });
};

//------------- INICIAR SESIÓN CON GOOGLE -----------------

export const checkGoogle = async() => {
    console.log(checkGoogle)
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // This gives you a Google Access Token. You can use it to access the Google API.
    signInWithPopup(auth, provider)
        .then((result) => {
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("inicio sesion google")
            console.log(token);
            // INFO USUARIO REGISTRADO.
            const user = result.user;
            window.location.hash = "#/post"
            sessionStorage.setItem('userId', user.uid);
            console.log(user)
                // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}