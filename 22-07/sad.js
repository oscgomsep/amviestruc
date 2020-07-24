var numero = 0; 

while (numero < 2 || numero > 10) {
  numero = Number(prompt("Elige un numero entre 2 y 10"));
}

var i = 1; 
while (i <= 10) {
  console.log(numero + " * " + i + " = " + numero * i);
  i++;
}

console.log("numeros pares e impares")

var numero = prompt("Introduce Limite de Numeros a Imprimir");
        var cont=0;
 		for(cont=1;cont<=numero;cont++){
		var resultado = parImpar(numero);
		console.log("El número "+cont+" es "+resultado);
	}
		function parImpar(numero) {

			
			if(cont % 2 == 0) {

				return "par";
			}
			else {
				return "impar";
			}
		}