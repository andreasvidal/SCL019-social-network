export const header = () => {
    const createHeader = document.createElement('div')
    createHeader.classList.add('containerHeader')
    createHeader.innerHTML = `<header class="header">
<div class="container">
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
</div>
<div class="container-btn">
    <button type="submit" class="btn-logOut">Log out</button>
</div>
</header>`

    return createHeader
}