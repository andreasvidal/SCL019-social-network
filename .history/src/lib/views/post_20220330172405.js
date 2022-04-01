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
    }
    containerPostvoid.innerHTML += view
}