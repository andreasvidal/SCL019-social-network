export const error404 = () => {
    const viewError = document.createElement('div');
    const showError = `  
<div class="error-img">
<img src="404PageNotFound.png">
</div>
<div class=error-txt>
    <h1>Página no encontrada</h1>
</div>`
    viewError.innerHTML = showError;
    console.log(viewError)
    return viewError;
}