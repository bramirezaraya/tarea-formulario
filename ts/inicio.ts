
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	celular: /^\d{9,9}$/,// 9 numeros.
  rut: /^[K0-9\s]{1,40}$/,
}

const campos = {
    nombre:false,
    celular:false,
    rut:false,
    mail:false,
    checkedLista: false,
}

const inputs = document.querySelectorAll('#formulario input');

const validarFormulario = (e:any) => {
	switch (e.target.name) {
		case "nombre":
		
      if(expresiones.nombre.test(e.target.value)){
        document.querySelector('#grupo__nombre .formulario__input-error')?.classList.remove('formulario__input-error-activo');
        document.querySelector('#grupo__nombre ')?.classList.remove('formulario__grupo-incorrecto');
        document.querySelector('#grupo__nombre ')?.classList.add('formulario__grupo-correcto');
        campos['nombre'] = true;
        
      }else{
        document.querySelector('#grupo__nombre .formulario__input-error')?.classList.add('formulario__input-error-activo');
        document.querySelector('#grupo__nombre ')?.classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__nombre ')?.classList.remove('formulario__grupo-correcto');
        campos['nombre'] = false;
      }
    break;
    case "rut":
       
      if(expresiones.rut.test(e.target.value)){
        document.querySelector('#grupo__rut .formulario__input-error')?.classList.remove('formulario__input-error-activo');
        document.querySelector('#grupo__rut ')?.classList.remove('formulario__grupo-incorrecto');
        document.querySelector('#grupo__rut ')?.classList.add('formulario__grupo-correcto');
        campos['rut'] = true;
      }else{
        document.querySelector('#grupo__rut .formulario__input-error')?.classList.add('formulario__input-error-activo');
        document.querySelector('#grupo__rut ')?.classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__rut ')?.classList.remove('formulario__grupo-correcto');
        campos['rut'] = false;
      }
  
    break;
		case "mail":
      if(expresiones.mail.test(e.target.value)){
        document.querySelector('#grupo__mail .formulario__input-error')?.classList.remove('formulario__input-error-activo');
        document.querySelector('#grupo__mail ')?.classList.remove('formulario__grupo-incorrecto');
        document.querySelector('#grupo__mail ')?.classList.add('formulario__grupo-correcto');
        campos['mail'] = true;
      }else{
        document.querySelector('#grupo__mail .formulario__input-error')?.classList.add('formulario__input-error-activo');
        document.querySelector('#grupo__mail ')?.classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__mail ')?.classList.remove('formulario__grupo-correcto');
        campos['mail'] = false;
      }

		break;
		case "celular":
		
      if(expresiones.celular.test(e.target.value)){
        document.querySelector('#grupo__celular .formulario__input-error')?.classList.remove('formulario__input-error-activo');
        document.querySelector('#grupo__celular ')?.classList.remove('formulario__grupo-incorrecto');
        document.querySelector('#grupo__celular ')?.classList.add('formulario__grupo-correcto');
        campos['celular'] = true;
      }else{
        document.querySelector('#grupo__celular .formulario__input-error')?.classList.add('formulario__input-error-activo');
        document.querySelector('#grupo__celular ')?.classList.add('formulario__grupo-incorrecto');
        document.querySelector('#grupo__celular ')?.classList.remove('formulario__grupo-correcto');
        campos['celular'] = false;
      }

		break;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
});

 const formulario:any = document.getElementById("formulario");


formulario.addEventListener('submit', (e:any) => {

  e.preventDefault();

  let checkList:any = document.getElementById("Segunda-section");
  let checked:any = checkList.querySelectorAll('input[type=checkbox]:checked'); // primer checkList, comprobamos que haya elegido al menos 1
  
  let checkList2:any = document.getElementById('Quinta-section');
  let checked2:any = checkList2.querySelectorAll('input[type=checkbox]:checked'); // segundo checkList, comprobamos que haya elegido 1.

  let checkRadio:any = document.getElementById('Tercera-section');
  let checkRadio2:any = document.querySelectorAll('input[type=radio]:checked');

  let parrafo:any = document.getElementById('otroRamo'); 

  if( parrafo.value !=null || checked2 >=1){ // en caso de que checked2 este verificado y este uno marcado o el parrafo de agregar algun ramo en especifico sea distinto de null, entonces cumple con la restriccion
    campos.checkedLista = true;
  }

  if(campos.nombre && campos.rut && campos.mail && campos.celular && (checked.length >= 1) && campos.checkedLista && (checkRadio2.length == 1)){
		formulario.reset();
    window.location.href = "index2.html";
  }
  else{
    document.getElementById('formulario__mensaje')?.classList.add('formulario__mensaje-activo');
  }


})


function LimpiarDatos(){
  formulario.reset();
}


formulario.addEventListener('reset', (e:any) =>{

  LimpiarDatos();
})