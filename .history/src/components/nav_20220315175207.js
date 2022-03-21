export const nav = () => {
    const createNav = document.createElement('div')
    createNav.classList.add('containeNav')
    createNav.innerHTML = `<header class="header">
<div class="container">
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
</div>
<div class="container-btn">
    <button class="btn-logOut" type="button">
  <img src="./img/btn-logout.png" />
</button>
</div>
<div class="nav">
    <nav class="nav-container">
        <div class="icon-container">
            <div class="icon">
                <a href="./img/btn-home.png"></a>
            </div>
            <div class="icon">
                <a href="./img/btn-calendario.png"></a>
            </div>
            <div class="icon">
                <a href="./img/notificaciones.png"></a>
            </div>
        </div>
    </nav>
</div>
</header>`

    return createNav
}