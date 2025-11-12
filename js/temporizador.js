const displayTemp = document.getElementById('temporizador')
const btnTemp = document.getElementById('onoff_temp')
const btnResetTemp = document.getElementById('reset_temp')


displayTemp.textContent = '00:00:00'
btnTemp.textContent = 'Iniciar'
btnResetTemp.textContent = 'Reset'

export class Temporizador{
    constructor(hora, minuto, segundo,){
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
        this.activado = false;
        this.intervalid = null;
    }

    // Metodo para el despertador, lo que puede hacer 
    activar(){
        if(this.activado){
            return
        }
        this.activado = true;

        this.intervalid = setInterval(() => {
            
            this.segundo--; //🚀
            // Comprueba si los segundos llegan a 60
            if(this.segundo === -1){
                this.segundo = 59; // Se reinicia a 0   
                this.minuto--;    // ⬇️ RESTA un minuto
            }
            
            // Comprueba si los minutos llegan a 60
            if(this.minuto === -1){
                this.minuto = 59; // Se reinicia a 0
                this.hora--;     // ⬇️ RESTA una hora
            }

            if(this.hora === 0 && this.minuto === 0 && this.segundo === 0){
                this.pausar();
                this.mostrarHora();
                alert('¡Tiempo terminado!');
                return;
            }
            
            this.mostrarHora();
        
        }, 1000);
        
        
    }

    pausar(){
        this.activado = false;
        clearInterval(this.intervalid);
        this.intervalid = null;
        

    return 
    }
    reset(){
        this.hora = 0;
        this.minuto = 0;
        this.segundo = 0;
        this.pausar();
        this.mostrarHora();
    }

    mostrarHora(){
        // añadir 0 cunado el numero es menor a 10
        const h = this.hora < 10 ? '0' + this.hora : this.hora;
        const m = this.minuto < 10 ? '0' + this.minuto : this.minuto;
        const s = this.segundo < 10 ? '0' + this.segundo : this.segundo;
        

        displayTemp.textContent = `${h}:${m}:${s}`
        
    }
}

const temporizador = new Temporizador(0,0,0)
console.log(temporizador);





btnResetTemp.addEventListener('click', () => {
    temporizador.reset()
    btnTemp.textContent = 'Iniciar'
})

btnTemp.addEventListener('click', () => {
    if(temporizador.activado){
        temporizador.pausar()
        btnTemp.textContent = 'Iniciar'
        return
    }

    if(temporizador.hora === 0 && temporizador.minuto === 0 && temporizador.segundo === 0){
    // Establecer un tiempo inicial para el temporizador (ej. 5 minutos)
    temporizador.hora = 0;
    temporizador.minuto = 5;
    temporizador.segundo = 0;
    }
    // Iniciar el temporizador
    temporizador.activar()
    btnTemp.textContent = 'Desactivar'
})






