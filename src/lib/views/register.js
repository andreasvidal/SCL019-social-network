import { createUser } from "../../firebase/firebaseConfig.js"
export const register = () => {
    window.location.hash = '#/register';
    const registerContainer = document.createElement("div");

    const register = `
    <div class="inputRegister">
        <div class="imgLogo">
            <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
        </div>
        <h2 class="txtSing">
        Registrate Acá!
        </h2>
        
        <div class="userNameCont">
            <label for="labelUser" class="inputUserLabel">UserName:</label>
            <input type="text" class="inputUserName" id="inputUserName" placeholder="user" required>

        </div>
        <div class="mailCont">
            <label for="labelUser" class="inputUserLabel">Email:</label>
            <input type="text" class="inputEmail" id="inputEmail" placeholder="asdf123@email.com" required>

        </div>
        
        <div class="passCont">
            <label for="pasword" class="labelPassword">Password:</label>
            <input type="password" class="password" id="inputPassword" placeholder="xxxxxx" required>
        </div>

        <button type= "button" class="btnConfirmation" id="btnConf">Register</button>
       
        <p class="containerErrorRegister" id="containerErrorRegister"></p>

    </div>`


    registerContainer.innerHTML = register
        //console.log(registerContainer);

    //------------ EVENTO BTN REGISTRO -----------------

    const btnRegister = registerContainer.querySelector("#btnConf");
    console.log(btnRegister)
    btnRegister.addEventListener("click", (event) => {
        event.preventDefault();

        const inputUser = registerContainer.querySelector("#inputEmail").value;
        const inputPassword = registerContainer.querySelector("#inputPassword").value;
        createUser(inputUser, inputPassword)
    });
    return registerContainer

}