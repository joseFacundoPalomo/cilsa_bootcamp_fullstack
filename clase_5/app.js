// CAMBIAR TEMA

const btnTemaOscuro = document.querySelector("#tema-oscuro");
const btnTemaClaro = document.querySelector("#tema-claro");
const body = document.querySelector("body");
const formulario = document.querySelector("#formulario");


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



// VALIDACION FORMULARIO

formulario.addEventListener('submit', (e) => {
e.preventDefault();
const nombre = document.querySelector("#nombre").value;
const apellido = document.querySelector("#apellido").value;
const email = document.querySelector("#email").value;
const fNacimiento = document.querySelector("#f-nacimiento").value;
const pais = document.querySelector("#pais").value;

expRegText= /^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+(?:\s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+)*$/;

expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

expRegAnio= /^\d{4}-\d{2}-\d{2}$/;

  // Validar nombre

  if(nombre == null || nombre.length == 0 || !(expRegText.test(nombre))){  
    document.querySelector("#nombre").style.boxShadow = "0 0 5px red";    
  }
  else{
    document.querySelector("#nombre").style.boxShadow = "0 0 5px green";
  }

  // Validar apellido

  if(apellido == null || apellido.length == 0 || !(expRegText.test(apellido))){  
    document.querySelector("#apellido").style.boxShadow = "0 0 5px red";   
  }
  else{
    document.querySelector("#apellido").style.boxShadow = "0 0 5px green";
  }

  // Validar email

  if(!(expRegEmail.test(email))){
    document.querySelector("#email").style.boxShadow = "0 0 5px red";    
  }
  else{
    document.querySelector("#email").style.boxShadow = "0 0 5px green";
  }

  // Validar fecha nacimiento

  if(!(expRegAnio.test(fNacimiento))){
    document.querySelector("#f-nacimiento").style.boxShadow = "0 0 5px red";        
  }
  else{
    document.querySelector("#f-nacimiento").style.boxShadow = "0 0 5px green";
  }

  // Validar pais

  if(pais == null || pais.length == 0 || !(expRegText.test(pais))){  
    document.querySelector("#pais").style.boxShadow = "0 0 5px red";    
  }
  else{
    document.querySelector("#pais").style.boxShadow = "0 0 5px green";
    
  }  
})

