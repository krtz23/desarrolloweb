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

	var est=formula.toFixed(1);

	if (formula < 18) {

		window.alert("Su IMC corresponde a: Peso bajo. Necesario valorar signos de desnutrición");
	} else {
		if (formula == 18 || formula <= 24.9) {
			window.alert("Su IMC corresponde a: Normal ");
		} else {
			if (formula == 25 || formula <= 26.9) {
				window.alert("Su IMC corresponde a: Sobrepeso");
			} else {
				if (formula == 27) {
					window.alert("Su IMC corresponde a: Obesidad");
				} else {
					if (formula == 27.1 || formula <= 29.9) {
						window.alert("Su IMC corresponde a: Obesidad grado I. Riesgo relativo alto para desarrollar enfermedades cardiovasculares");
					} else {
						if (formula == 30 || formula <= 39.9) {
							window.alert("Su IMC corresponde a:	Obesidad grado II. Riesgo relativo muy alto para el desarrollo de enfermedades cardiovasculares");
						} else {
							if (formula >= 40) {
								window.alert("Su IMC corresponde a: Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares");
							} else {
								window.alert("Su IMC corresponde a: Ingrese su 'PESO' y 'ESTATURA'.Por favor");
							}
						}
					}
				}
			}
		}
	}

    window.alert(" Su peso es: "+p1 + "Kg. , Su estatura es : "+ estatura +"M. , Su IMC cooresponde a : "+est+". Acontinuación su indice de grasa:");
    var sexo=document.getElementById("sexo").value;
    var edad=parseInt(document.getElementById("edad").value);
	var opt=parseInt(sexo);
switch (opt) {
    case 1:
    	var resulgH=(1.20*est)+(0.23*edad)-(10.8*1)-5.4;
        window.alert("Si eres 'Hombre' tu indice de grasa aproximado es: "+resulgH.toFixed(2)+"%");
        break;
    case 0:
       var resulgM=(1.20*est)+(0.23*edad)-(10.8*0)-5.4;
        window.alert("Si eres 'Mujer' tu indice de grasa aproximado es: "+resulgM.toFixed(2)+"%");
        break;
    default:
     window.alert("Sin tu edad y sexo no podemos calcular tu indice de grasa");
}


}