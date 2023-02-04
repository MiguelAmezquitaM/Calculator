var operacion;
var operandoA;
var operandoB;

function init(){
  //VARIABLES
  var resultado = document.getElementById("resultado");
  var DEL = document.getElementById("DEL");
  var AC = document.getElementById("AC");
  var producto = document.getElementById("producto");
  var division = document.getElementById("division");
  var suma = document.getElementById("suma");
  var resta = document.getElementById("resta");
  var punto = document.getElementById("punto");
  var notacionCientifica = document.getElementById("notacionCientifica");
  var Ans = document.getElementById("Ans");
  var igual = document.getElementById("igual");
  var cero = document.getElementById("cero");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
}

//EVENTOS
function limpiar(){
  resultado.textContent ="";
}
function resetear(){
  resultado.textContent ="";
  operacion ="";
  operandoA = 0;
  operandoB = 0;
}
function resolver(){
  var res = 0;

  switch(operacion){
    case "+":
      res = parseFloat(operandoA) + parseFloat(operandoB);
    break;

    case "-":
      res = parseFloat(operandoA) - parseFloat(operandoB);
    break;

    case "*":
      res = parseFloat(operandoA) * parseFloat(operandoB);
    break;

    case "/":
      res = parseFloat(operandoA) / parseFloat(operandoB);
    break;
  }
  resetear();
  resultado.textContent = res;
}


uno.onclick = function(e){
  resultado.textContent += "1";
}

dos.onclick = function(e){
  resultado.textContent += "2";
}

tres.onclick = function(e){
  resultado.textContent += "3";
}

cuatro.onclick = function(e){
  resultado.textContent += "4";
}

cinco.onclick = function(e){
  resultado.textContent += "5";
}

seis.onclick = function(e){
  resultado.textContent += "6";
}

siete.onclick = function(e){
  resultado.textContent += "7";
}

ocho.onclick = function(e){
  resultado.textContent += "8";
}

nueve.onclick = function(e){
  resultado.textContent += "9";
}

cero.onclick = function(e){
  resultado.textContent += "0";
}

suma.onclick = function(e){
  operandoA = resultado.textContent;
  resultado.textContent = "+";
  operacion = "+";
  //limpiar();
}

resta.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "-";
  limpiar();
}

producto.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "*";
  limpiar();
}

division.onclick = function(e){
  operandoA = resultado.textContent;
  operacion = "/";
  limpiar();
}

igual.onclick = function(e){
  operandoB = resultado.textContent;
  resolver();
}

AC.onclick = function(e){
  resetear();
}