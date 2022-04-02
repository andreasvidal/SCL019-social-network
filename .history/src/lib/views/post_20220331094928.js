export const printComments = (docPost) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");

    containerPostvoid.innerHTML = "";

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
    console.log(html)
    containerPostvoid.innerHTML += html;
    let userEdit = " ";
    if (element.data.userId === auth.currentUser.uid) {
        userEdit = ` <
div class = "btnsEdit"
id = "class="
btnsEdit "" >
    <
    button class = "btnDelete"
data - id = "${element.id}" >
    <
    i class = "fa-solid fa-trash" > < /i> Delete <
    /button> <
    button class = "btnEdit"
data - id = "${element.id}" >
    <
    i class = "fa-solid fa-pen-to-square" > < /i> Edit <
    /button> <
    button class = "saveBtn"
id = "saveBtn"
data - id = "${element.id}" > < i class = "fa-solid fa-bookmark" > < /i> Save</button >
    <
    /div>
`;
    }
}
containerPostvoid.innerHTML += view
}