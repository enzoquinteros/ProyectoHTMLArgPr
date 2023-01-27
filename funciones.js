function vermas(texto,boton){
    if(document.getElementById(texto).style.display=='block'){
        document.getElementById(texto).style.display='none';
        document.getElementById(boton).innerHTML='Leer más';
    } else {
        document.getElementById(texto).style.display='block';
        document.getElementById(boton).innerHTML='Ocultar';
    }
}