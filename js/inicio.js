"use strict";
var expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                (_a = document.querySelector('#grupo__nombre .formulario__input-error')) === null || _a === void 0 ? void 0 : _a.classList.remove('formulario__input-error-activo');
                (_b = document.querySelector('#grupo__nombre ')) === null || _b === void 0 ? void 0 : _b.classList.remove('formulario__grupo-incorrecto');
                (_c = document.querySelector('#grupo__nombre ')) === null || _c === void 0 ? void 0 : _c.classList.add('formulario__grupo-correcto');
                campos['nombre'] = true;
            }
            else {
                (_d = document.querySelector('#grupo__nombre .formulario__input-error')) === null || _d === void 0 ? void 0 : _d.classList.add('formulario__input-error-activo');
                (_e = document.querySelector('#grupo__nombre ')) === null || _e === void 0 ? void 0 : _e.classList.add('formulario__grupo-incorrecto');
                (_f = document.querySelector('#grupo__nombre ')) === null || _f === void 0 ? void 0 : _f.classList.remove('formulario__grupo-correcto');
                campos['nombre'] = false;
            }
            break;
        case "rut":
            if (expresiones.rut.test(e.target.value)) {
                (_g = document.querySelector('#grupo__rut .formulario__input-error')) === null || _g === void 0 ? void 0 : _g.classList.remove('formulario__input-error-activo');
                (_h = document.querySelector('#grupo__rut ')) === null || _h === void 0 ? void 0 : _h.classList.remove('formulario__grupo-incorrecto');
                (_j = document.querySelector('#grupo__rut ')) === null || _j === void 0 ? void 0 : _j.classList.add('formulario__grupo-correcto');
                campos['rut'] = true;
            }
            else {
                (_k = document.querySelector('#grupo__rut .formulario__input-error')) === null || _k === void 0 ? void 0 : _k.classList.add('formulario__input-error-activo');
                (_l = document.querySelector('#grupo__rut ')) === null || _l === void 0 ? void 0 : _l.classList.add('formulario__grupo-incorrecto');
                (_m = document.querySelector('#grupo__rut ')) === null || _m === void 0 ? void 0 : _m.classList.remove('formulario__grupo-correcto');
                campos['rut'] = false;
            }
            break;
        case "mail":
            if (expresiones.mail.test(e.target.value)) {
                (_o = document.querySelector('#grupo__mail .formulario__input-error')) === null || _o === void 0 ? void 0 : _o.classList.remove('formulario__input-error-activo');
                (_p = document.querySelector('#grupo__mail ')) === null || _p === void 0 ? void 0 : _p.classList.remove('formulario__grupo-incorrecto');
                (_q = document.querySelector('#grupo__mail ')) === null || _q === void 0 ? void 0 : _q.classList.add('formulario__grupo-correcto');
                campos['mail'] = true;
            }
            else {
                (_r = document.querySelector('#grupo__mail .formulario__input-error')) === null || _r === void 0 ? void 0 : _r.classList.add('formulario__input-error-activo');
                (_s = document.querySelector('#grupo__mail ')) === null || _s === void 0 ? void 0 : _s.classList.add('formulario__grupo-incorrecto');
                (_t = document.querySelector('#grupo__mail ')) === null || _t === void 0 ? void 0 : _t.classList.remove('formulario__grupo-correcto');
                campos['mail'] = false;
            }
            break;
        case "celular":
            if (expresiones.celular.test(e.target.value)) {
                (_u = document.querySelector('#grupo__celular .formulario__input-error')) === null || _u === void 0 ? void 0 : _u.classList.remove('formulario__input-error-activo');
                (_v = document.querySelector('#grupo__celular ')) === null || _v === void 0 ? void 0 : _v.classList.remove('formulario__grupo-incorrecto');
                (_w = document.querySelector('#grupo__celular ')) === null || _w === void 0 ? void 0 : _w.classList.add('formulario__grupo-correcto');
                campos['celular'] = true;
            }
            else {
                (_x = document.querySelector('#grupo__celular .formulario__input-error')) === null || _x === void 0 ? void 0 : _x.classList.add('formulario__input-error-activo');
                (_y = document.querySelector('#grupo__celular ')) === null || _y === void 0 ? void 0 : _y.classList.add('formulario__grupo-incorrecto');
                (_z = document.querySelector('#grupo__celular ')) === null || _z === void 0 ? void 0 : _z.classList.remove('formulario__grupo-correcto');
                campos['celular'] = false;
            }
            break;
    }
};
inputs.forEach(function (input) {
    input.addEventListener('keyup', validarFormulario);
});
var formulario = document.getElementById("formulario");
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
