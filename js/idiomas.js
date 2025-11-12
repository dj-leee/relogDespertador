

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
export function crearPopup() {
    const fondoPopup = document.createElement('div');
    fondoPopup.classList.add('fondoPopup');
    document.body.appendChild(fondoPopup);
    
    const contenedorPopup = document.createElement('div');
    contenedorPopup.classList.add('contenedorPopup');
    fondoPopup.appendChild(contenedorPopup);

    const tituloPopup = document.createElement('h2');
    tituloPopup.textContent = 'Elija su idioma:';
    contenedorPopup.appendChild(tituloPopup);

    const listaPopup = document.createElement('ul');
    const idiomas =
    // idiomas con su simbolo
    [
        { idioma: 'Español', simbolo: 'es' },
        { idioma: 'Inglés', simbolo: 'en' },
        { idioma: 'Francés', simbolo: 'fr' },
        { idioma: 'Alemán', simbolo: 'de' },
        { idioma: 'Italiano', simbolo: 'it' }
    ];

    idiomas.forEach((idioma) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = idioma.idioma;
        button.value = idioma.simbolo;
        li.appendChild(button);
        listaPopup.appendChild(li);

        button.addEventListener('click', () => {
            btnIdioma.textContent = button.textContent;
            document.body.removeChild(fondoPopup);
        });
    });

    contenedorPopup.appendChild(listaPopup);

    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'Cerrar';
    btnCerrar.classList.add('btn-cerrar-popup');
    contenedorPopup.appendChild(btnCerrar);
    
    btnCerrar.addEventListener('click', () => {
        document.body.removeChild(fondoPopup);
    });

    // si cliicko fuera del fondoPopup tambien se elimina
    fondoPopup.addEventListener('click', (event) => {
        if (event.target === fondoPopup) {

            document.body.removeChild(fondoPopup);
        }
    });
}



btnIdioma.addEventListener('click', () => {
    crearPopup()
    
})
