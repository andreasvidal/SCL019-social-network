export const error404 = () => {
    const viewError = document.createElement('div');
    const showError = `  
<div class="error-img">
<img src="./img/404PageNotFound.png" alt="imagen de fondo que representa un error">
<div class=error-txt>
    <h1>Página no encontrada</h1>
</div>`
    viewError.innerHTML = showError;
    console.log(viewError)
    return viewError;
}