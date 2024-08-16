const body = document.getElementById("body");
const formulario = document.getElementById("formulario");
const btnTemaOscuro = document.getElementById("btnTemaOscuro");
const btnTemaClaro = document.getElementById("btnTemaClaro");
const etiquetas = document.getElementsByTagName("label");
const titulo = document.querySelector(".titulo");

btnTemaOscuro.addEventListener("click",()=>{
    formulario.style.background="#2C3133";
    body.style.background="#444349"; 
    titulo.style.color="white";  

    for(i=0; i<etiquetas.length; i++ ){
        etiquetas[i].style.color="white";
    }
    
})

btnTemaClaro.addEventListener("click",()=>{
    formulario.style.background="white";
    body.style.background="#85FFBD";
    titulo.style.color="black";  
    for(i=0; i<etiquetas.length; i++ ){
        etiquetas[i].style.color="black";
    }
})