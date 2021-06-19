var peso = document.getElementById("peso");
var estatura = document.getElementById("estatura")
var boton = document.getElementById("calcular_imc")
boton.addEventListener("click", imc)

function imc(a, b) {
    a = peso.value;
    b = estatura.value;
    var resultado = parseFloat(a / (b**2)).toFixed(2);
    resultado1.innerHTML = 'Tu indice de masa corporal es de: ' + '<strong>' + resultado + '</strong>'
    if(resultado < 18.50) {
        resultado2.innerHTML = '<strong>Estás por debajo del peso normal.</br>Debes añadir calorías extra a tu dieta</strong>'
    }
    if(resultado >= 18.50 && resultado <= 24.9) {
        resultado2.innerHTML = '<strong>Estás en el intervalo de peso normal.</br>¡Estás saludable!</strong>'
    }
    if(resultado > 24.9 && resultado <= 29.9) {
        resultado2.innerHTML = '<strong>Tienes lo que se denomina preobesidad.</br>¡Dieta y ejercicio!</strong>'
    }
    if(resultado > 29.9) {
        resultado2.innerHTML = '<strong>Debes tener cuidado porque puedes padecer obesidad.</br>Lo más recomendable sería acudir a un especialista.</strong>'
    }
}


