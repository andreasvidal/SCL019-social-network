export const printComments = () => {
    const containerPostvoid = document.querySelector("#containerPostAdd");
    containerPostvoid.innerHTML = "";
    const view = (comment) => {
        const html = `<div id="containerPost">
        <div id="nameUser">
            <p>${comment.data.name}</p>
        </div>
        <h3 class="titlePost">${comment.title}</h3>
        <textarea class="commentDone" readonly>${comment.comment}</textarea>
        <div class="btns">
            <input class="counter" id="counter" type="number" value="0" name="" readonly />
            <button class="like" id="like">
          <i class="fa-solid fa-heart"></i>
        </button>
        </div>
    </div>
    `
        let userEdit = " ";
        if (element.data.userId === auth.currentUser.uid) {
            userEdit = `
    <div id="btnsEdit">
        <button class="btnDelete" data-id="${element.id}">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
        <button class="btnEdit" data-id="${element.id}">
        <i class="fa-solid fa-pen-to-square"></i> Edit
      </button>
        <button class="saveBtn" id="saveBtn" data-id="${element.id}"></button>
    </div>
    `;
        }
        containerPostvoid.innerHTML += view + userEdit;
    }
    forEach(html)
    return containerPostvoid;
}