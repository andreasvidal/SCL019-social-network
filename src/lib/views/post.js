import { deletePost,editPost } from "../../firebase/firebaseConfig.js"
export const printComments = (docPost,id) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");

    const html = `<div id="containerPost">
        
        <h3 class="titlePost">${docPost.inputTitle}</h3>
        <textarea class="commentDone" readonly>${docPost.textArea}</textarea>
        <div class="btns">
        <input class="counter" id="counter" type="number" value="0" name="" readonly />
        <button class="like" id="like">
      <i class="fa-solid fa-heart"></i>
        </button>
        </div>
    </div>
    `

    let userEdit = " ";
    //if (docPost.data.userId === auth.currentUser.uid) {
    userEdit = `
    <div id="btnsEdit">
        <button class="btnDelete" id="btnDelete" data-id="${id}">
            <i class="fa-solid fa-trash"></i> Delete
        </button>
        <button class="btnEdit" id="btnEdit" data-id="${id}">
            <i class="fa-solid fa-pen-to-square"></i> Edit
        </button>
        <button class="saveBtn" id="saveBtn" data-id="${id}">
            <i class="fa-thin fa-floppy-disk"></i> Save</button>
    </div>
        
    `;
    
    containerPostvoid.innerHTML += html + userEdit


    //---------------- EVENTO PARA ELIMINAR POST -------------------------

    const btnDelete = containerPostvoid.querySelectorAll(".btnDelete");
    console.log(btnDelete)
    btnDelete.forEach((element) => {
        element.addEventListener("click", async() => {
            const deleteConfirm = confirm('¿Estás seguro de eliminar este Post?');
            if (deleteConfirm) {
               await deletePost(element.dataset.id);
                
            } 
        });
    });

    //------------------ EVENTO PARA EDITAR POST ---------------------

    const btnEdit = containerPostvoid.querySelectorAll(".btnEdit");
    console.log(btnEdit)
    btnDelete.forEach((element) => {
        element.addEventListener("click", async() => {
            await editPost(element.dataset.id);
        })
    })

    return printComments;

   



};