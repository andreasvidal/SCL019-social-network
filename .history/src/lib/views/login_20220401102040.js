export const login = () => {
    //window.location.hash = '#/login';
    const viewHome = document.createElement('div');
    viewHome.classList.add("container-login");
    const formHome = `<div class="containerLogin" id="containerLogin">
    <h1 class="titleWelcome">¡Bienvenidos!</h1>
    <div class="containerBtns">
        <a href="#" class="links">Log In</a>
        <a href="#/login" class="links">Sign Up with Google</a>
        <a href="#/register" class="links">Register</a>
    </div>
</div>`;
    viewHome.innerHTML += formHome;
    console.log(viewHome);

    return viewHome
};