// Contactar con el boton de idioma
const btnIdioma = document.getElementById('idioma');

// Averiguar el idioma del navegador
const idioma = navigator.language || navigator.userLanguage;

// conversion del idioma del nacvegador 
const idiomaNavegador = idioma.split('-')[0];

// Traducir el idioma
switch (idiomaNavegador) {
    case 'es':
        btnIdioma.textContent = 'Español';
        break;
    case 'en':
        btnIdioma.textContent = 'Inglés';
        break;
    case 'fr':
        btnIdioma.textContent = 'Francés';
        break;
    case 'de':
        btnIdioma.textContent = 'Alemán';
        break;
    case 'it':
        btnIdioma.textContent = 'Italiano';
        break;
    default:
        btnIdioma.textContent = 'Idioma';
        break;
}

// cuando se haga un click en el boton idioma, llamar a la funcion de popup


// funcion de popup
function crearPopup(titulo, mensaje) {
    const fondoPopup = document.createElement('div');
    fondoPopup.classList.add('fondoPopup');
    document.body.appendChild(fondoPopup);
    
    const contenedorPopup = document.createElement('div');
    contenedorPopup.classList.add('contenedorPopup');
    fondoPopup.appendChild(contenedorPopup);

    const tituloPopup = document.createElement('h2');
    tituloPopup.textContent = titulo;
    contenedorPopup.appendChild(tituloPopup);

    const mensajePopup = document.createElement('p');
    mensajePopup.textContent = mensaje;
    contenedorPopup.appendChild(mensajePopup);

    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar';
    btnCerrar.classList.add('btn-cerrar-popup');
    contenedorPopup.appendChild(btnCerrar);
    
    btnCerrar.addEventListener('click', () => {
        document.body.removeChild(fondoPopup);
    });
}



btnIdioma.addEventListener('click', () => {
    crearPopup('Idioma', 'Selecciona un idioma:')
})
