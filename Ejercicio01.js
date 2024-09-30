function actividad4(){

    var num1=Math.trunc((Math.random()*100)+1);
    var num2=Math.trunc((Math.random()*100)+1);

    if(num1>num2){
        console.log("El numero mayor es "+num1);
    }
    else if (num2>num1){
        console.log("EL mayor numero es "+num2);
    }
    else{
        console.log("Los numeros"+num1+" y "+num2+" son iguales");
    }
    
}