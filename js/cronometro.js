const displayCrono = document.getElementById('cronometro')
const btnCrono = document.getElementById('onoff_crono')
const btnReset = document.getElementById('reset_crono')


displayCrono.textContent = '00:00:00'
btnCrono.textContent = 'Iniciar'
btnReset.textContent = 'Reset'

class Cronometro{
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
            
            this.segundo++; // 🚀 SUMA un segundo

            // Comprueba si los segundos llegan a 60
            if(this.segundo === 60){
                this.segundo = 0; // Se reinicia a 0
                this.minuto++;    // ⬆️ SUMA un minuto
            }
            
            // Comprueba si los minutos llegan a 60
            if(this.minuto === 60){
                this.minuto = 0; // Se reinicia a 0
                this.hora++;     // ⬆️ SUMA una hora
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
        this.mostrarHora();
    }

    mostrarHora(){
        // añadir 0 cunado el numero es menor a 10
        const h = this.hora < 10 ? '0' + this.hora : this.hora;
        const m = this.minuto < 10 ? '0' + this.minuto : this.minuto;
        const s = this.segundo < 10 ? '0' + this.segundo : this.segundo;
        

        displayCrono.textContent = `${h}:${m}:${s}`
        
    }
}

const cronometro = new Cronometro(0,0,0)
console.log(cronometro);



btnReset.addEventListener('click', () => {
    cronometro.reset()
})

btnCrono.addEventListener('click', () => {
    if(cronometro.activado){
        cronometro.pausar()
        btnCrono.textContent = 'Activar'
        return
    }
    cronometro.activar()
    btnCrono.textContent = 'Desactivar'
})




