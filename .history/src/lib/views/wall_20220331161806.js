import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";
import { createPost, readDataPost } from "../../firebase/firebaseConfig.js";

//import db from '../../firebase/firebaseConfig.js'

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
                <textarea name="textarea" id="textArea" required class="textarea" cols="30" rows="10">"Write a comment..."</textarea>
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
    readDataPost()
    headerPost.appendChild(header());
    headerPost.appendChild(nav());
    divPublication.appendChild(headerPost);
    divPublication.innerHTML += view; //concatenar header, nav con view
    let editStatus = false;
    let id = '';
    //CONTENEDOR POST CREADO
    const printComments = async() => {
            const wallPost = await printComments()
            const containerPost = divPublication.querySelector("#containerPostAdd")
            console.log(containerPost)
            containerPost.innerHTML = "";
            wallPost.forEach((info) => {
                containerPost.innerHTML += `<div id="containerPost" class="containerPost">
                <div id="nameUser">
                    <p></p>
                </div>
                <h3 class="titlePost">${docPost.inputTitle}</h3>
                <textarea class="commentDone" readonly>${docPost.textArea}</textarea>
                <div class="likeContainer">
                <div class="inputLike">
                  <input
                    class="counter"
                    id="counter"
                    type="number"
                    value="0"
                    name=""
                    readonly
                  />
                </div>
                <div class="btnLike">
                    <button class="like" id="like">
                        <i class="fa-solid fa-heart">Like</i>
                      </button>
                </div>
            </div>
            </div>
            </div>`
            })
        }
        //btn addPost
    const btnAddPost = divPublication.querySelector("#formPost");
    btnAddPost.addEventListener("submit", async(event) => {
        event.preventDefault();
        //almacena el comentario
        const inputTitle = formPost.querySelector("#textTitle").value;
        const textArea = formPost.querySelector("#textArea").value;
        createPost(inputTitle, textArea);
        readDataPost(inputTitle, textArea);
    });

    //vaciar textarea
    const emptyText = divPublication.querySelector("textArea");
    emptyText.addEventListener("focus", () => {
        emptyText.value = "";
    })
    return divPublication;
};