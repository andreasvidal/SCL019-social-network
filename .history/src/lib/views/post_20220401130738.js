export const printComments = (docPost) => {
        const containerPostvoid = document.querySelector("#containerPostAdd");

        //containerPostvoid.innerHTML = "";

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
        <button class="btnDelete" data-id="${docPost.id}">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
        <button class="btnEdit" data-id="${docPost.id}">
        <i class="fa-solid fa-pen-to-square"></i> Edit
      </button>
        <button class="saveBtn" id="saveBtn" data-id="${docPost.id}"></button>
    </div>
    `; <<
        << << < HEAD
        // }
        //console.log(html)
        containerPostvoid.innerHTML += html
    } ===
    === =
}
containerPostvoid.innerHTML += view + userEdit;
array.forEach(html);
}; <<
<< << < HEAD
array.forEach(html);


//Evento para borrar post
const btnDelete = containerPostvoid.querySelectorAll(".btnDelete");
btnDelete.forEach((e) => {
    e.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm('¿Estás seguro de eliminar este Post?');
        if (deleteConfirm === true) {
            postDelete(e.value);
        }
    });
});

return printComments;
};