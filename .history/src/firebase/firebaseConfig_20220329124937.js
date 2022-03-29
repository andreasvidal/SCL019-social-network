/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
// funcion que inicaliza la aplicación
//import { initializeApp } from 'firebase/app';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// se importa función para obtener los servicios de firestore y conectar a la BdD
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';
import { printComments } from "../lib/views/post.js"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiGtmDy7pXtGBhp7DQ-P7kNTGPLcYCT1w",
    authDomain: "scl019-social-network.firebaseapp.com",
    projectId: "scl019-social-network",
    storageBucket: "scl019-social-network.appspot.com",
    messagingSenderId: "688901907009",
    appId: "1:688901907009:web:17e9dc19d24585836f9cc0"
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
export const createPost = async(comment) => { // Add a new document with a generated id.

    /*const date = Timestamp.fromDate(new Date());
    const name = auth.currentUser.displayName;
    const userId = auth.currentUser.uid;
    const likes = [];
    const likesCounter = 0;*/
    await addDoc(collection(db, "post"), { comment }); //guardamos la coleccion post 
};
// Leer datos de post
export const readDataPost = () => {
    const q = query(collection(db, "post"), orderBy("date", "desc"));
    onSnapshot(q, (querySnapshot) => { //onSnapshot escucha los elementos del documento
        const CommentBox = [];
        querySnapshot.forEach((doc) => { //QuerySnapshot accede a los objetos que llama de doc por medio del array
            console.log("documentos", doc)
            CommentBox.push({
                id: doc.id,
                datepost: Date.now(),
                data: doc.data(),
                likesCounter: 0,
                likes: []
            })
        })
    }); <<
    << << < HEAD
    printComments(CommentBox);
    return CommentBox ===
        === = <<
        << << < HEAD
    return CommentBoxgit
};

export const postDelete = async(id) => {
    await deleteDoc(doc(db, 'posts', id));
    console.log(await deleteDoc);
};


===
=== =
//return CommentBoxgit
console.log(CommentBoxgit) >>>
    >>> > 65 cd0c9b4890f9f05a4e5510da8fd82b9f0b8c5a
} >>>
>>> > 033675 afe488c4d0100bacf544a7c6a072a0f1b4


// implementacion de firebase en archivo post

//CREAR PUBLICACION  "createPost" variable se crea para ejecutar en el muro
// no resulto XD!
//ahora si funciona
/*const createPost = async(newComent, title) => {
        const docRef = await addDoc(collection(db, "post"), {
            title: title,
            comment: newComent,
            date: date
        });
        console.log("Document written with ID: ", docRef.id);
    }*/
// Add a new document with a generated id.

/*const getAllPost = async() => {
    const allpost = await getDocs(collection(db, "post"));
    allpost.forEach((doc) => {
        const voidComment = [];
        // doc.data() is never undefined for query doc snapshots
        const q = query(collection(db, "post"), orderBy("date", "desc"))
        console.log(doc.id, " => ", doc.data());
        onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                const commentPost = doc.data();
                voidComment.push(commentPost)
                console.log(voidComment)
        });
    });
};*/