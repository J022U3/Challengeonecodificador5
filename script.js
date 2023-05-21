
document.getElementById("cop").style.display= "none";
document.getElementById("nme").style.display= "none";
document.getElementById("frs").style.display= "none";




function noEncontrado(){
    document.getElementById("alien").style.display= "initial";
    document.getElementById("nme").style.display= "initial";
    document.getElementById("ingresa").style.display= "initial"; 
    document.getElementById("frs").style.display= "none";
    document.getElementById("cop").style.display= "none";
}


function convertir(){
    document.getElementById("cop").style.display= "initial";
    document.getElementById("alien").style.display= "none";
    document.getElementById("nme").style.display= "none";  
    document.getElementById("ingresa").style.display= "none"; 
    document.getElementById("frs").style.display= "initial"; 
}


function encriptar (){

    let mensaje = document.getElementById("txt").value;    
    
    let cambio = mensaje
        .replace(/e/gi, `enter`)
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    if(mensaje.length !=0) {
        document.getElementById("txt").value = cambio;
        document.getElementById("frs").innerHTML = cambio; 
        convertir()
        document.getElementById("txt").value = "";                   
        }else{
            noEncontrado()
            Swal.fire({
                position: 'bottom-end',
                html:'<p class="alerta" >Ningún mensaje captado</p> ',
                icon: 'error',
                confirmButtonText: 'Entendido',
                toast: true,
                background: '#101c',
              })
            
    }
        
}


function desencriptar (){

    let mensaje = document.getElementById("txt").value;
        
    let cambio = mensaje
        .replace(/enter/gi, `e`)
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');
    
    if(mensaje.length !=0){
        document.getElementById("txt").value = cambio;
        document.getElementById("frs").innerHTML = cambio;
        convertir()
        document.getElementById("txt").value = "";
        }else{
            noEncontrado()
            Swal.fire({
                position: 'bottom-end',
                html:'<p class="alerta" >Ningún mensaje captado</p> ',
                icon: 'error',
                confirmButtonText: 'Entendido',
                toast: true,
                background: '#101c',
              })
        }
        
    }



  function copiar(){

   let copy = document.getElementById("frs");
    copy.select();
    copy.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy.value)
    document.getElementById("frs").innerHTML = "";
    document.getElementById("cop").style.display= "none";
    document.getElementById("alien").style.display= "initial";
    document.getElementById("ingresa").style.display= "initial";
    document.getElementById("frs").style.display= "none";

    Swal.fire({
        position: 'center center',
        icon: 'info',
        title: '<p class="alerta">Mensaje copiado</p>',
        showConfirmButton: false,
        toast: true,
        background: '#101c',
        timer: 1500,
        timerProgessBar:true
      })
 }


//auto-ajustar textarea

const principal = document.getElementById("txt");
 principal.style.cssText = ` heigth: ${principal.scrollHeight}px; overflow-y: hidden`;
 principal.addEventListener("input", function(){
    this.style.height = "auto";
    this.style.height = `${this.scrollHeight}px`;
 });



     
    




