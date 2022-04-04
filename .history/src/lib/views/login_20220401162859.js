export const login = () => {
    window.location.hash = '#/login';
    const loginContainer = document.createElement("div");
    const login = `
    <div class="inputUser">
    <div class="imgLogo">
        <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    </div>
    <label for="labelUser" class="inputUserLabel">UserName</label>
    <input type="text" class="inputEmail" id="inputEmail" placeholder="asdf123@email.com" required>
</div>
<div class="passCont">
    <label for="pasword" class="labelPassword">Password</label>
    <input type="password" class="password" id="inputPassword" placeholder="xxxxxx" required>
    <button class="btnConfirmation" id="btnConf">Sign In</button>
</div>`

    loginContainer.innerHTML = login
        //BTN PARA INICIO SESION
    const btnSign = viewHome.querySelector("#btnConf")
    console.log(btnSign)
    if (btnSign) {
        btnSign.addEventListener("click", () => {
            console.log("btnConf");
        });
    }
    console.log(viewHome);
    return loginContainer
}