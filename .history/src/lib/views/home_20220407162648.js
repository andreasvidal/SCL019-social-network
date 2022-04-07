import { checkGoogle } from "../../firebase/firebaseConfig.js"
export const home = () => {
    window.location.hash = '#/home';
    const viewHome = document.createElement('div');
    viewHome.classList.add("container-login");
    const formHome = `<div class="containerLogin" id="containerLogin">
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    <h1 class="titleWelcome">¡Bienvenidos!</h1>
    <div class="containerBtns">
        <a href="#/login" class="links">Log In </a>
        <a href="#/home" class="links" id="googleLinks">Sign Up with <img src="./img/google.png" alt="google" class="google"></a>
        <a href="#/register" class="links">Register </a>
    </div>
    <div class="img-home">
    <img class="container-imgHome" src="./img/backgroundbb.jpeg" alt="imagen fondo libro para home" />
</div>
`;
    viewHome.innerHTML += formHome;

    //------------------BTN PARA INICIO SESION CON GOOGLE-------------------

    const singGoogle = viewHome.querySelector("#googleLinks")
    console.log(singGoogle)
    singGoogle.addEventListener("click", async() => {
        await checkGoogle();
        console.log(checkGoogle);
    });
    return viewHome
};