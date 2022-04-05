import { deletePost } from "../../firebase/firebaseConfig.js"
export const printComments = (docPost) => {
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
    <button class="btnDelete" id="btnDelete" data-id="${docPost.id}">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
    <button class="btnEdit" data-id="${docPost.id}">
        <i class="fa-solid fa-pen-to-square"></i> Edit
      </button>
    <button class="saveBtn" id="saveBtn" data-id="${docPost.id}">
        <i class="fa-thin fa-floppy-disk"></i> Save</button>
</div>
        
    `;
    // }
    // }
    //console.log(html)
    containerPostvoid.innerHTML += html + userEdit


    //Evento para borrar post
    const btnDelete = containerPostvoid.querySelectorAll(".btnDelete");
    btnDelete.forEach((e) => {
        e.addEventListener("click", () => {
            // eslint-disable-next-line no-restricted-globals
            const deleteConfirm = confirm('¿Estás seguro de eliminar este Post?');
            if (deleteConfirm === true) {
                deletePost(e.value);
            }
        });
    });

    return printComments;
};