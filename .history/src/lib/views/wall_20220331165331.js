import { header } from "../../components/header.js";
import { nav } from "../../components/nav.js";

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
    headerPost.appendChild(header());
    headerPost.appendChild(nav());
    divPublication.appendChild(headerPost);
    divPublication.innerHTML += view;
    return divPublication
};