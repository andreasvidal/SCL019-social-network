import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost } from "../../firebase/firebaseConfig.js";

export const Post = () => {
    //window.location.hash = '#/post';
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
                    <textarea name="textarea" id="textArea" class="textarea" cols="30" rows="10" required >"Write a comment..."</textarea>
                    <div class="btn-addPost">
                        <button type="submint" id="addPost" class="btn-add"><i class="fa-solid fa-circle-plus"></i>Add</button>
                    </div>
                </form>
            </div>
            <div class="containerPostAdd" id="containerPostAdd"></div>
            <div>
                <h3></h3>
                <p></p>
            </div>
        </main>`;
    headerPost.appendChild(header());
    headerPost.appendChild(nav());
    divPublication.appendChild(headerPost);
    divPublication.innerHTML += view;
    //BOTON AÑADIR POST
    const btnAddPost = divPublication.querySelector("#formPost");
    btnAddPost.addEventListener("submit", async(event) => {
        event.preventDefault();
        //almacena el comentario
        //const resetForm = formPost.querySelector("#addElement");
        const inputTitle = formPost.querySelector("#textTitle").value;
        const textArea = formPost.querySelector("#textArea").value;
        createPost(inputTitle, textArea);
        //readDataPost(inputTitle, textArea);
        //resetForm.reset();
    });

    //vaciar textarea
    const emptyText = divPublication.querySelector("textArea");
    emptyText.addEventListener("focus", () => {
        emptyText.value = "";
    })
    return divPublication
};