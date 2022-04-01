import { home } from '../lib/views/home.js';
//import { login } from '../lib/views/login.js';
import { Post } from '../lib/views/wall.js'
//import { register } from './views/registerView.js';/


const templateviews = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = ''; // Reiniciando el Div a vacio;
    switch (hash) {
        case '':
            containerRoot.appendChild(home());
        case '#/home':
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/register':
            containerRoot.appendChild(register());
            break;
        case '#/post':
            containerRoot.appendChild(Post());
            break;
        default:
            containerRoot.innerHTML = 'ERROR 404';
            break;
    }
};

export const changeRouter = (hash) => {
    if (hash === '#/') {
        return templateviews(hash);
    }
    if (hash === '#/login') {
        return templateviews(hash);
    }
    if (hash === '#/register') {
        return templateviews(hash);
    }
    if (hash === '#/post') {
        return templateviews(hash);
    }
    return templateviews(hash);
};

// Cambia página frente a cambio de #
window.addEventListener('hashchange', () => {
    changeRouter(window.location.hash);
});
//false estado por defecto