import { deletePost, editPost, auth } from "../../firebase/firebaseConfig.js"
export const printComments = (docPost, id) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");

    const html =

        `<div id="containerPost">
        <h2 class="userName" id="userName">${docPost.name} </h2>
        <h4 class="date" id="date">${docPost.date}</h4>
        <h3 class="titlePost">${docPost.inputTitle}</h3>
        <textarea class="commentDone" id="commentDone" readonly>${docPost.textArea}</textarea>
        <div class="likeContainer">
            <input type="number" class="counter" id="counter"  value="0" name="" readonly />
            <button class="like" id="like"> Like
            <i class="fa-solid fa-heart"></i>
            </button>
        </div>
    </div>
    `
    let userEdit = "";
    //const userId = auth.currentUser.uid;
    //if (docPost.data.userId === auth.currentUser.uid) {
    userEdit = `
    <div id="btnsEdition" class="btnsEdition">
    <button class="btnDelete" id="btnDelete" data-id="${id}">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
</div>
        
    `;
    //}
    // }
    //console.log(html)
    containerPostvoid.innerHTML += html + userEdit


    //---------------- EVENTO PARA ELIMINAR POST -------------------------

    const btnDelete = containerPostvoid.querySelectorAll(".btnDelete");
    console.log(btnDelete)
    btnDelete.forEach((docPost) => {
        docPost.addEventListener("click", async(post) => {
            // eslint-disable-next-line no-restricted-globals
            const deleteConfirm = confirm('¿Estás seguro de eliminar este Post?');
            // === true se elimina porque ya es verdadera
            if (deleteConfirm) {
                await deletePost(docPost.dataset.id);
                //recarga la web después de borrar
                location.reload(post);
            }
        });
    });

    //------------------ EVENTO PARA EDITAR POST ---------------------

    /*const btnEdit = containerPostvoid.querySelectorAll(".btnEdit");
    //console.log(btnEdit)
    btnDelete.forEach((element) => {
        element.addEventListener("click", async() => {
            await editPost(element.dataset.id);
        })
    })*/

    return printComments;





};