import { home } from '../lib/views/home.js';
import { login } from '../lib/views/login.js';
import { Post } from '../lib/views/wall.js'
import { register } from '../lib/views/register.js';
import { error404 } from '../lib/views/error404.js';


export const changeRouter = (hash) => {
    const containerRoot = document.getElementById("root");
    containerRoot.innerHTML = " "; // Reiniciando el Div a vacio;
    if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
        containerRoot.appendChild(home());
    } else if (hash === "#/home") {
        containerRoot.appendChild(home());
        login(); // llamo al login() para que en este punto home() lo pueda utilizar
    } else if (hash === "#/register") {
        containerRoot.appendChild(register());
    } else if (hash === "#/Post") {
        containerRoot.appendChild(Post());
    } else if (hash === "#/error404") {
        containerRoot.appendChild(error404());
    }
};

// Cambia página frente a cambio de #
/*window.addEventListener("hashchange", () => {
    changeRouter(window.location.hash);
});*/
//false estado por defecto