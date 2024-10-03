
let num = parseInt(prompt("Introduzca un numero entero positivo"));

if(mes == null || dia == null){
    alert("Operacion cancelada");
}
else if(num<=0){
    num = parseInt(prompt("Introduce un puñetero numero positivo no te lo repito mas veces"));
}
else{
    let suma=0;

    while(num>0){
        suma+=num%10;
        num/=10;
    }
    alert("La suma total es: "+ parseInt(suma));
}