export const printComments = (docPost) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");

    containerPostvoid.innerHTML = "";

    const html = `<div id="containerPost" class="containerPost">
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
</div>
    `
    console.log(html)
    containerPostvoid.innerHTML += html
}