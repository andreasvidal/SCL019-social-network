import { deletePost, editPost } from "../../firebase/firebaseConfig.js"
export const printComments = (docPost, id) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");

    const html = `<div id="containerPost">
        
        <h3 class="titlePost">${docPost.inputTitle}</h3>
        <textarea class="commentDone" id="commentDone-${textArea.value}" readonly>${docPost.textArea}</textarea>
        <div class="likeContainer">
        <input type="number" class="counter" id="counter"  value="0" name="" readonly />
        <button class="like" id="like"> Like
      <i class="fa-solid fa-heart"></i>
        </button>
        </div>
    </div>
    `

    let userEdit = "";
    //if (docPost.data.userId === auth.currentUser.uid) {
    userEdit = `
    <div id="btnsEdition">
    <button class="btnDelete" id="btnDelete${textArea.value}" data-id="${id}">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
    <button class="btnEdit" data-id="${id}">
        <i class="fa-solid fa-pen-to-square"></i> Edit
      </button>
    <button class="saveBtn" id="saveBtn" data-id="${id}">
        <i class="fa-thin fa-floppy-disk"></i> Save</button>
</div>
        
    `;
    //}
    // }
    //console.log(html)
    containerPostvoid.innerHTML += html + userEdit


    //Evento para borrar post
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
    //---------EVENTO PARA EDITAR COMENTARIO
    const btnEdit = containerPostvoid.querySelectorAll(".btnEdit");
    btnEdit.forEach((docPost) => {
        docPost.addEventListener("click", async() => {
            userEdit = true;
            id = btnEditPost.id;
            const btnEditPost = await editPost(docPost.dataset.target.id)
            console.log(btnEditPost)

        })
    })

    return printComments;
};