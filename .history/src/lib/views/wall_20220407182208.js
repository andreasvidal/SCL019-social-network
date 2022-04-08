import { header } from "../../components/header.js";
//import { nav } from "../../components/nav.js";
import { createPost, readDataPost, logOut } from "../../firebase/firebaseConfig.js";


export const Post = () => {
    window.location.hash = '#/post';
    const headerPost = document.createElement("header");
    const divPublication = document.createElement("div");
    divPublication.classList.add("post-container");
    const view = `
    <main>
        <div id='addElement'>
            <form id="formPost" class="formPost">
                <label for="textTitle" class="textTitle">Title of the book </label>
                <input type="text" class="textTitle" id="textTitle" required>
                <br>
                <label for="DescrpTitle" class="descrpTitle"> Descripción: </label>
                <textarea name="textarea" id="textArea" required class="textarea" cols="30" rows="10">"Write a comment..."</textarea>
                <div class="btn-addPost">
                    <button type="submit" id="addPost" class="btn-add"><i class="fa-solid fa-circle-plus"></i>Add</button>
                </div>
            </form>
        </div>
        <div class="containerPostAdd" id="containerPostAdd">
        
        </div>
       
    </main>`;
    readDataPost()

    headerPost.appendChild(header());
    //headerPost.appendChild(nav());
    divPublication.appendChild(headerPost);
    divPublication.innerHTML += view; //concatenar header, nav con view
    //let id = '';
    //btn addPost
    const btnAddPost = divPublication.querySelector("#formPost");
    btnAddPost.addEventListener("submit", async(event, post) => {
        event.preventDefault();
        //almacena el comentario
        //Generando vista de wallPage
        const inputTitle = formPost.querySelector("#textTitle").value;
        const textArea = formPost.querySelector("#textArea").value;
        //readDataPost(inputTitle, textArea);
        await createPost(inputTitle, textArea);
        //recarga la web al añadir post
        location.reload(post);

    });

    //vaciar textarea
    const emptyText = divPublication.querySelector("textArea");
    emptyText.addEventListener("focus", () => {
            emptyText.value = "";
        })
        //limpiar input titulo
    divPublication.querySelector("#textTitle").value = " ";
    //.............BTN LOG OUT       
    divPublication.querySelector(".btn-logOut").addEventListener("click", () => {

        logOut()
    });
    return divPublication;
};