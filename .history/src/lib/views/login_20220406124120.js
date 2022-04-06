import { singIn } from "../../firebase/firebaseConfig.js"
export const login = () => {
    window.location.hash = '#/login';
    const loginContainer = document.createElement("div");
    const login = `
    <form class="inputUser">
    <div class="imgLogo">
        <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    </div>
    <h2 class="txtSing">
    Iniciar Sesión!
</h2>
    <p class="containerErrorLogin" id="containerErrorLogin"></p>
    <div class="userCont">
        <label for="labelUser" class="inputUserLabel">UserName</label>
        <input type="text" class="inputEmail" id="inputEmail" autocomplete="off" placeholder="asdf123@email.com" required>

    </div>
    <div class="passCont">
        <label for="pasword" class="labelPassword">Password</label>
        <input type="password" class="password" id="inputPassword" autocomplete="off" placeholder="xxxxxx" required>
        
        <button class="btnConfirmation" id="btnConf">Sign In</button>   
    </div>

    
</form>`

    loginContainer.innerHTML = login

    //------------------BTN PARA INICIO SESION-------------------

    const btnSign = loginContainer.querySelector("#btnConf")
        //console.log(btnSign)
    if (btnSign) {
        btnSign.addEventListener("click", () => {
            console.log(btnSign);
            singIn()
        });
    }
    return loginContainer
}