"use strict";
var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    // password: /^.{4,12}$/, // 4 a 12 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    celular: /^\d{9,9}$/,
    rut: /^[K0-9\s]{1,40}$/,
};
var campos = {
    nombre: false,
    celular: false,
    rut: false,
    mail: false,
    checkedLista: false,
};
var inputs = document.querySelectorAll('#formulario input');
var validarFormulario = function (e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                (_a = document.querySelector('#grupo__nombre p')) === null || _a === void 0 ? void 0 : _a.classList.add('formulario__input-error');
                campos['nombre'] = true;
            }
            else {
                (_b = document.querySelector('#grupo__nombre p')) === null || _b === void 0 ? void 0 : _b.classList.remove('formulario__input-error');
                campos['nombre'] = false;
            }
            break;
        case "rut":
            if (expresiones.rut.test(e.target.value)) {
                (_c = document.querySelector('#grupo__rut p')) === null || _c === void 0 ? void 0 : _c.classList.add('formulario__input-error');
                campos['rut'] = true;
            }
            else {
                (_d = document.querySelector('#grupo__rut p')) === null || _d === void 0 ? void 0 : _d.classList.remove('formulario__input-error');
                campos['rut'] = false;
            }
            break;
        case "mail":
            if (expresiones.mail.test(e.target.value)) {
                (_e = document.querySelector('#grupo__mail p')) === null || _e === void 0 ? void 0 : _e.classList.add('formulario__input-error');
                campos['mail'] = true;
            }
            else {
                (_f = document.querySelector('#grupo__mail p')) === null || _f === void 0 ? void 0 : _f.classList.remove('formulario__input-error');
                campos['mail'] = false;
            }
            break;
        case "celular":
            if (expresiones.celular.test(e.target.value)) {
                (_g = document.querySelector('#grupo__celular p')) === null || _g === void 0 ? void 0 : _g.classList.add('formulario__input-error');
                campos['celular'] = true;
            }
            else {
                (_h = document.querySelector('#grupo__celular p')) === null || _h === void 0 ? void 0 : _h.classList.remove('formulario__input-error');
                campos['celular'] = false;
            }
            break;
    }
};
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
    // input.addEventListener('blur', validarFormulario);
});
var formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", function(event:any){
//   let nombre:any = document.getElementById("nombre")
//   event.preventDefault();
// })
formulario.addEventListener('submit', function (e) {
    var _a;
    e.preventDefault();
    var checkList = document.getElementById("Segunda-section");
    var checked = checkList.querySelectorAll('input[type=checkbox]:checked'); // primer checkList, comprobamos que haya elegido al menos 1
    var checkList2 = document.getElementById('Quinta-section');
    var checked2 = checkList2.querySelectorAll('input[type=checkbox]:checked'); // segundo checkList, comprobamos que haya elegido 1.
    var checkRadio = document.getElementById('Tercera-section');
    var checkRadio2 = document.querySelectorAll('input[type=radio]:checked');
    var parrafo = document.getElementById('otroRamo');
    if (parrafo.value != null || checked2 >= 1) { // en caso de que checked2 este verificado y este uno marcado o el parrafo de agregar algun ramo en especifico sea distinto de null, entonces cumple con la restriccion
        campos.checkedLista = true;
    }
    if (campos.nombre && campos.rut && campos.mail && campos.celular && (checked.length >= 1) && campos.checkedLista && (checkRadio2.length == 1)) {
        formulario.reset();
        window.location.href = "index2.html";
    }
    else {
        (_a = document.getElementById('formulario__mensaje')) === null || _a === void 0 ? void 0 : _a.classList.add('formulario__mensaje-activo');
    }
});
function LimpiarDatos() {
    formulario.reset();
}
formulario.addEventListener('reset', function (e) {
    LimpiarDatos();
});
