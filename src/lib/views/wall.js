import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost } from "../../firebase/firebaseConfig.js";
//import { collection, getDocs, orderBy } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

//import db from '../../firebase/firebaseConfig.js'

export const Post = () => {
    //window.location.hash = '#/post';
    //const user = getUser();
    const headerPost = document.createElement("header");
    const divPublication = document.createElement("div");
    divPublication.classList.add("post-container");
    const view = `
    <main>
        <div id='addElement'>
        <form id="formPost" class="formPost">
            <label for="textTitle" class="textTitle">Title of the book </label>
            <input type="text" class="textTitle" id="textTitle">
            <br>
            <label for="DescrpTitle" class="descrpTitle"> Descripción: </label>
            <textarea name="textarea" id="textarea" class="textarea" cols="30" rows="10">Write a comment...</textarea>
             <div class="btn-addPost">
               <button type="button" id="addPost" class="btn-add"><i class="fa-solid fa-circle-plus"></i>Add</button>
              </div>
            </div>
        <div class="containerPostAdd" id="containerPostAdd"></div>
        <div>
        <h3></h3>
        <p></p>
     </div>
    </main>`;
    headerPost.appendChild(header());
    headerPost.appendChild(nav());
    divPublication.appendChild(headerPost)
    divPublication.innerHTML += view; //concatenar header, nav con view

    //let id = '';
    //btn addPost
    const btnAddPost = divPublication.querySelector("#addPost");
    btnAddPost.addEventListener("click", async(event) => {
        event.preventDefault();
        //almacena el comentario
        //Generando vista de wallPage
        
        const divPublication = document.getElementById('root');
        divPublication.innerHTML = view;
      
        
        const newPublication = divPublication.querySelector("#formPost");
        newPublication.addEventListener("addPost",async (e) => {
            e.preventDefault();
        const publication = divPublication.querySelector("#textarea").value;
        setTimeout(() => {
            newPublication.reset();
            console.log(newPublication.reset());
        }, 1000);

        if (publication == "" ){
            alert("Debes escribir algo");
        }
        if(publication =! ""){
            await createPost(publication);
            console.log("publication", publication)
        }

        
        //console.log(publication);
        //llamar a createpost
        await createPost(publication);
    });

    
});
return divPublication;
}