export const register = () => {
    window.location.hash = '#/register';
    const registerContainer = document.createElement("div");
    const register = `
    <div class="inputUser">
    <div class="imgLogo">
        <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    </div>
    <h2 class="txtSing">
    iniciar Sesión!
</h2>
    <div class="userCont">
        <label for="labelUser" class="inputUserLabel">UserName</label>
        <input type="text" class="inputEmail" id="inputEmail" placeholder="asdf123@email.com" required>

    </div>
    <div class="passCont">
        <label for="pasword" class="labelPassword">Password</label>
        <input type="password" class="password" id="inputPassword" placeholder="xxxxxx" required>
        <button class="btnConfirmation" id="btnConf">Sign In</button>
    </div>
</div>`

    registerContainer.innerHTML = register
        //BTN PARA INICIO SESION
    const btnSign = loginContainer.querySelector("#btnConf")
    console.log(btnSign)
    if (btnSign) {
        btnSign.addEventListener("click", () => {
            console.log("btnConf");
        });

    }
    console.log(loginContainer);
    return loginContainer
}