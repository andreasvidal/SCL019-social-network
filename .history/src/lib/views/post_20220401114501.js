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
        //console.log(html)
    containerPostvoid.innerHTML += html
}