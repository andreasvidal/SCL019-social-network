import { dataUser } from "../../firebase/firebaseConfig.js"
export const login = () => {
    //window.location.hash = '#/login';
    const viewHome = document.createElement('div');
    viewHome.classList.add("container-login");
    const formHome = `<div class="containerLogin" id="containerLogin">
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    <h1 class="titleWelcome">¡Bienvenidos!</h1>
    <div class="inputUser">
        <label for="labelUser" class="inputUser">UserName</label>
        <input type="text" id="inputEmail" placeholder="asdf123@email.com" required>
    </div>
    <div class="password">
        <label for="pasword" class="password">Password</label>
        <input type="text" id="inputPassword" placeholder="xxxxxx" required>
        <button class="btnConfirmation" id="btnConfirmation">Sign In</button>
    </div>
    <div class="containerBtns">
        <a href="#/" class="links">Log In</a>
        <a href="#/login" class="links">Sign Up with Google</a>
        <a href="#/register" class="links">Register</a>
    </div>
</div>
`;
    viewHome.innerHTML += formHome;
    console.log(viewHome);
    let btnSign = document.querySelector("#btnConfirmation")
    console.log(btnSign)
        /*btnSign.addEventListener("click", () => {
            dataUser()
            
        });*/
    return viewHome
};