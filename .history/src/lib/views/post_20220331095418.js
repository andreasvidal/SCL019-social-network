export const printComments = (docPost) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");

    containerPostvoid.innerHTML = "";

    const html = `<div id="containerPost" class="containerPost">
    <div id="nameUser">
          <p></p>
        </div>
        <h3 class="titlePost">${docPost.inputTitle}</h3>
        <textarea class="commentDone" readonly>${docPost.textArea}</textarea>
        </div>
        <div class="btnLike">
          <button class="like" id="like">
            <i class="fa-solid fa-heart">Like</i>
          </button>
        </div>
      </div>
    </div>
  
    `
    console.log(html)
    containerPostvoid.innerHTML += html
}