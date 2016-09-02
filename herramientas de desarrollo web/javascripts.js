function myFunction1() {
    document.getElementById('mostrar').src='img/1.gif'
}
function myFunction2() {
    document.getElementById('mostrar').src='img/2.gif'
}
function myFunction3() {
    document.getElementById('mostrar').src='img/3.gif'
}

function fsuma(){
 n1=document.f1.num1.value;
 n2=document.f1.num2.value;
res=document.f1.resul.value;
res=parseInt(n1)+parseInt(n2);
//document.f1.resul.value=res;
window.alert("El resultado de la operación es: " +res);
 
}

function fmultiplica(){
 n1=document.f1.num1.value;
 n2=document.f1.num2.value;
res=document.f1.resul.value;
res=parseInt(n1)*parseInt(n2);
//document.f1.resul.value=res;
window.alert("El resultado de la operación es: " + res);
 
}

function fdivide(){
 n1=document.f1.num1.value;
 n2=document.f1.num2.value;
res=document.f1.resul.value;
res=parseInt(n1)/parseInt(n2);
//document.f1.resul.value=res;
window.alert("El resultado de la operación es: " +res);
 
}

function fresta(){
 n1=document.f1.num1.value;
 n2=document.f1.num2.value;
res=document.f1.resul.value;
res=parseInt(n1)-parseInt(n2);
//document.f1.resul.value=res;
window.alert("El resultado de la operación es: " +res);
 
}

function valor()

{

                var n1= document.getElementById("n1").value;

                var n2= document.getElementById("n2").value;

                var resultado= parseInt(n1)+parseInt(n2);

               

                window.alert(resultado)        

}
function par_impar()
{
	var r1 = document.getElementById("r1").value;
	var resultado=r1.length;
	var l=resultado%2;

	if (l==0){
		window.alert("Su palabra es par "+r1);
	}
	else{
		window.alert("Su palabra es impar "+r1);
	}
}

function imcXestatura(){
	var peso=document.getElementById("peso").value;
	var estatura=document.getElementById("estatura").value;

	var p1= peso;
	var e1= estatura;

	var estaturaX2=estatura*estatura;
	var formula=p1/estaturaX2;

	window.alert(formula);

	if (formula < 18) {
		window.alert(" Peso bajo. Necesario valorar signos de desnutrición");
	} else {
		if (formula == 18 || formula <= 24.9) {
			window.alert(" Normal ");
		} else {
			if (formula == 25 || formula <= 26.9) {
				window.alert(" Sobrepeso");
			} else {
				if (formula == 27) {
					window.alert(" Obesidad");
				} else {
					if (formula == 27.1 || formula <= 29.9) {
						window.alert(" Obesidad grado I. Riesgo relativo alto para desarrollar enfermedades cardiovasculares");
					} else {
						if (formula == 30 || formula <= 39.9) {
							window.alert("	Obesidad grado II. Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares");
						} else {
							if (formula >= 40) {
								window.alert(" Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares");
							} else {
								window.alert(" Ingrese su 'PESO' y 'ESTATURA'.Por favor");
							}
						}
					}
				}
			}
		}
	}
}