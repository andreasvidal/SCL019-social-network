//import { dataUser } from "../../firebase/firebaseConfig.js"
export const login = () => {
    window.location.hash = '#/login';
    const viewHome = document.createElement('div');
    viewHome.classList.add("container-login");
    const formHome = `<div class="containerLogin" id="containerLogin">
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    <h1 class="titleWelcome">¡Bienvenidos!</h1>
    <div class="inputUser">
        <label for="labelUser" class="inputUserLabel">UserName</label>
        <input type="text" class="inputEmail" id="inputEmail" placeholder="asdf123@email.com" required>
    </div>
    <div class="passCont">
        <label for="pasword" class="labelPassword">Password</label>
        <input type="password" class="password" id="inputPassword" placeholder="xxxxxx" required>
        <button class="btnConfirmation" id="btnConf">Sign In</button>
    </div>
    <div class="containerBtns">
        <a href="#/login" class="links">Sign Up with <img src="./img/google.png" alt="google" class="google"></a>
        <a href="#/register" class="links">Register</a>
    </div>
</div>
`;
    viewHome.innerHTML += formHome;
    //BTN PARA INICIO SESION
    const btnSign = viewHome.querySelector("#btnConf")
    if (btnSign) {
        btnSign.addEventListener("click", () => {
            console.log("btnConf");
        });
    }
    console.log(viewHome);
    return viewHome
};