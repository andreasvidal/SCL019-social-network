import { home } from '../lib/views/home.js';
import { login } from '../lib/views/login.js';
import { Post } from '../lib/views/wall.js'
import { register } from '../lib/views/register.js';
import { error404 } from '../lib/views/error404.js';


const templateviews = (hash) => {
    const containerRoot = document.getElementById("root");
    containerRoot.innerHTML = " "; // Reiniciando el Div a vacio;
    switch (hash) {
        case " ":
        case "#/home":
            containerRoot.appendChild(home());
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case "#/register":
            containerRoot.appendChild(register());
            break;
        case "#/post":
            containerRoot.appendChild(Post());
            break;
        default:
            containerRoot.appendChild(error404());
            break;
    }
};

export const changeRouter = (hash) => {
    if (hash === "#/home" || hash === "#/" || hash === "/" || hash === "#" || hash === "") {
        return templateviews(hash);
    }
    if (hash === "#/login") {
        return templateviews(hash);
    }
    if (hash === "#/register") {
        return templateviews(hash);
    }
    if (hash === "#/post") {
        return templateviews(hash);
    }
    return templateviews(hash);
};

// Cambia página frente a cambio de #
window.addEventListener("hashchange", () => {
    changeRouter(window.location.hash);
});
//false estado por defecto