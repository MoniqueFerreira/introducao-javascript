function trocaImagem() {
	document.getElementById("myImage").src="img/sh2.gif";
}	
function imagemTroca() {
	document.getElementById("myImage").src="img/rc2.gif";
}	
function fonteTroca() {
	document.getElementById("demo").style.fontSize="16px";
}
function trocaFonte() {
	document.getElementById("demo").style.fontSize="22px";
}
function ocultarElemento() {
	document.getElementById("demo").style.display="none";
}
function mostrarElemento() {
	document.getElementById("demo").style.display="block";
}
function calcular1() {
	var total1 = document.getElementById("num1").value * document.getElementById("num2").value;
	window.alert(total1);
}
function calcular2() {
	var total2 = parseFloat(document.getElementById("num3").value) + parseFloat(document.getElementById("num4").value);
	window.alert(total2);
}
function calcular3() {
	var total3 = document.getElementById("num5").value - document.getElementById("num6").value;
	window.alert(total3);
}
function calcular4() {
	var total4 = document.getElementById("num7").value / document.getElementById("num8").value;
	window.alert(total4);
}