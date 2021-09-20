//const contenedor = document.getElementById('container');
//console.log(contenedor.innerHTML);


//contenedor.innerHTML = '<div> <li>Elemento</li>  <li>Elemento2</li> <li>Elemento3</li></div>';

// const arreglo = [];

// window.onload = () =>  {

//     const form = document.getElementById('formulario');

//     form.onsubmit = (e) => {

//         e.preventDefault();
//         const primerinput = document.getElementById('nombre');
//         const valor = primerinput.value;
//         primerinput.value='';

//         arreglo.push(valor);

//         const lista = document.getElementById('todolist');
//         // lista.innerHTML = '';

//         const listaArreglo = arreglo.map(t  => '<li>' + t + '</li>' );
//         lista.innerHTML = listaArreglo.join('');

//         // for(let i = 0; i<arreglo.length; i++){

//         //     lista.innerHTML += '<li> '+ arreglo[i] + '</li>';

//         // }


//         // funcion para eventos al clickear
//         const elementos = document.querySelectorAll('#todolist li') // seleccionamos los elementos de la clase todolist en este caso tomara "li", ya que le especificamos eso

//         elementos.forEach((elemento, i ) => {
            
//             elemento.addEventListener('click', () => {

//                 console.log('guapo');
//             })
//         })
//     }




// }