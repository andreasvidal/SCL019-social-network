//import { myFunction } from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
import { changeRouter } from './routers/router.js';
//import { login } from './lib/views/login.js';

// Con esta función le agregamos la nueva url: '#/' al comenzar la página.
const init = () => {
    changeRouter(window.location.hash);
};
// Al terminar de cargar la página(Event Load) se ejecuta la función INIT.
window.addEventListener("load", init);
//init(); se elimina init para evitar la redundancia