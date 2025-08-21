
// ----------------PARTES DEL HTML--------------------

    let estado = document.getElementById("estados");
    let inicio = document.getElementById("btn");
    let modalidad = document.getElementById("mod")
    let portadaop = document.getElementById("portop")
    let st3s = document.getElementById("st3")

    let comentario_final = document.getElementById("resultado")

function comentario(){
    
    // MODALIDAD DE COMPRA
    if (modalidad.value == "Compra Asistida"){
        var tipo = "OP Modalidad - Compra Asistida"
    } else if(modalidad.value == "Reembolso"){
        var tipo = "OP Modalidad - Reembolso"
    }
    // ESTADO DE LA OP
    if (estado.value == "Aprobada"){
        var est_op = " - OP Aprobada de manera técnica"
    } else if (estado.value == "Observada"){
        var est_op = " - OP Observada de manera técnica"
    } 

    // COMENTARIO PORTADA DE OP
    if (portadaop.value != ""){
        var est_portop= ", en cuanto a la Portada de Op " + portadaop.value 
    } else if (portadaop.value == ""){
        var est_portop= ""  
    } 

    // COMENTARIO PORTADA DE OP
    if (st3s.value != ""){
        var est_st3= ", considerar que la situación tributaria de terceros " + st3s.value
    } else if (portadaop.value == ""){
        var est_st3= ""  
    } 

console.log(tipo + est_op + est_portop + est_st3) 



comentario_final.value = (tipo + est_op + est_portop + est_st3) 
}

inicio.addEventListener('click',comentario)

 