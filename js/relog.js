const displayRelog = document.getElementById('relog')




export class Relog{
    constructor(){}
    mostrarHora(){
        setInterval(() => {
            const fecha = new Date();
            const hora = fecha.getHours();
            const minuto = fecha.getMinutes();
            const segundo = fecha.getSeconds();

            // añadir 0 cunado el numero es menor a 10
            const h = hora < 10 ? '0' + hora : hora;
            const m = minuto < 10 ? '0' + minuto : minuto;
            const s = segundo < 10 ? '0' + segundo : segundo;

            displayRelog.textContent = `${h} : ${m} : ${s}`
        }, 1000);
    }
}

const relog = new Relog()

relog.mostrarHora()




