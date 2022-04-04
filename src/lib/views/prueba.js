export const printComments = (array) => {
    const containerPostvoid = document.querySelector("#containerPostAdd");
   
    containerPostvoid.innerHTML = " ";
    const view = (element) => {
    
     const html = `
    <div id="containerPost">
        <div id="nameUser">
            <p>${element.data.name}</p>
        </div>
        <h3 class="titlePost">${element.title}</h3>
        <textarea class="commentDone" readonly>${element.description}</textarea>
  
        <div class="btns">
            <input class="counter" id="counter" type="number" value="0" name="" readonly />
            <button class="like" id="like">
          <i class="fa-solid fa-heart"></i>
        </button>
        </div>
    </div>
    `;
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
        array.forEach(html);
        return containerPostvoid;
    };
  
  
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
  





//-----------------------POST QUE SI FUNCIONA--------------------------------



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
  
    }
    containerPostvoid.innerHTML += view
  }