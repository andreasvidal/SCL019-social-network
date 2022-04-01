export const login = () => {
    const viewHome = document.createElement('div');
    viewHome.classList.add("container-login");
    const formHome = `<form id = "formularioAcceso" class = "formularioAcceso">
    <div class= "email"> Email </div>
    <input type = "email" id= "emailAcceso" class= "emailAcceso" placeholder="Email"/>
    <div class= "password"> Password </div>
    <input type="password" id="passwordAcceso" class="passwordAcceso" placeholder= "Enter password"/>
    button type="button" name="registrar" id="enviarRegistro" class="enviarRegistro" /button>
    </form>`;
    viewHome.innerHTML += formHome;
    console.log(viewHome);

    return viewHome
};