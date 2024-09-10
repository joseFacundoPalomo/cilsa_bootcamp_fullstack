const btnTemaOscuro = document.querySelector("#tema-oscuro");
const btnTemaClaro = document.querySelector("#tema-claro");
const body = document.querySelector("body");
const formulario = document.querySelector(".formulario");

btnTemaOscuro.addEventListener("click", oscurecer);
btnTemaClaro.addEventListener("click", aclarar);


function oscurecer(){
    body.setAttribute("data-bs-theme","dark");
    formulario.style.background="#444349"; 
}

function aclarar(){
    body.setAttribute("data-bs-theme","light");
    formulario.style.background="#e1e1e1";    
}


// Función para validar formulario de boostrap

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()