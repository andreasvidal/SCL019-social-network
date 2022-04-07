import { home } from '../lib/views/home.js';
import { login } from '../lib/views/login.js';
import { Post } from '../lib/views/wall.js'
import { register } from '../lib/views/register.js';
import { error404 } from '../lib/views/error404.js';


export const changeRouter = (hash) => {
        const containerRoot = document.getElementById("root");
        containerRoot.innerHTML = " "; // Reiniciando el Div a vacio;
        if (hash === "#/" || hash === "/" || hash === "#" || hash === "") {
            home();
        }