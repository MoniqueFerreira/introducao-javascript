function trocaImagem() {
	document.getElementById("myImage").src="img/sh2.gif";
}	
function imagemTroca() {
	document.getElementById("myImage").src="img/rc2.gif";
}	
function trocaFonte() {
	document.getElementById("demo").style.fontSize="35px";
}
function fonteTroca() {
	document.getElementById("demo").style.fontSize="25px";
}
function ocultarElemento() {
	document.getElementById("demo").style.display="none";
}
function mostrarElemento() {
	document.getElementById("demo").style.display="block";
}
function calcular() {
	document.getElementById("demo").innerHTML= document.getElementById("num1").value * document.getElementById("num2").value;
}
function calcular() {
	document.getElementById("demo").innerHTML= parseFloat(document.getElementById("num3").value) + parseFloat(document.getElementById("num4").value);
}

