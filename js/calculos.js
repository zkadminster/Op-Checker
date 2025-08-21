
// ----------------PARTES DEL HTML--------------------

    let estado = document.getElementById("estados");
    let inicio = document.getElementById("btn");
    let modalidad = document.getElementById("mod")
    let portadaop = document.getElementById("portop")
    let st3s = document.getElementById("st3")
    let dt = document.getElementById("fact")
    let ivas =  document.getElementById("iva")
    let validez = document.getElementById("valycont")
    let respaldos = document.getElementById("respal")
    let ct = document.getElementById("ct")
    let cot = document.getElementById("coti")
    let dec = document.getElementById("dj")
    let rd = document.getElementById("rd")
    let a5 = document.getElementById("a5")

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

    // COMENTARIO SITUACIÓN TRIBUTARIA DE TERCEROS
    if (st3s.value != ""){
        var est_st3= ", considerar que la situación tributaria de terceros " + st3s.value
    } else if (portadaop.value == ""){
        var est_st3= ""  
    } 

    // DOCUMENTO TRIBUTARIO ( FACTURA - BOLETA DE HONORARIOS )
    if (dt.value != ""){
        var est_dt = ", en relación con el documento tributario " + dt.value 
    } else if (dt.value == ""){
        var est_dt = ""  
    } 

    // ESTADO PAGO IVA
    if (ivas.value != ""){
        var est_iva = ", en cuanto al pago de iva "  + ivas.value 
    } else if (ivas.value == ""){
        var est_iva = ""  
    }    

    // VALIDEZ Y CONTENIDO
    if (validez.value != ""){
        var est_valid =", acerca de la validez y contenido "   + validez.value 
    } else if (validez.value == ""){
        var est_valid = ""  
    }   


    // RESPALDOS
    if (respaldos.value != ""){
        var est_respald =", respecto de los respaldos " + respaldos.value 
    } else if (respaldos.value == ""){
        var est_respald = ""  
    }   

    // PORTADA CARPETA TRIBUTARIA
    if (ct.value != ""){
        var est_ct =", en la portada de carpeta tributaria " + ct.value 
    } else if (ct.value == ""){
        var est_ct = ""  
    }   

    // COTIZACIÓN
    if (cot.value != ""){
        var est_cot = ", en cuanto a la cotización "  + cot.value 
    } else if (cot.value == ""){
        var est_cot = ""  
    }   

    // DECLARACIÓN JURADA
    if (dec.value != ""){
        var est_dec = ", acerca de la declaración jurada "   + dec.value 
    } else if (dec.value == ""){
        var est_dec = ""  
    }   

    // RECEPCIÓN DE DOCUMENTOS
    if (rd.value != ""){
        var est_rd = ", respecto de la recepción de documentos "   + rd.value 
    } else if (rd.value == ""){
        var est_rd = ""  
    }   

    // ANEXO 5
    if (a5.value != ""){
        var est_a5 =  ", en relación al anexo 5 "   + a5.value 
    } else if (a5.value == ""){
        var est_a5 = ""  
    }   



comentario_final.value = (tipo + est_op + est_portop + est_st3 + est_dt + est_iva + est_valid + est_respald + est_ct + est_cot + est_dec + est_rd + est_a5) 
}

inicio.addEventListener('click',comentario)

 