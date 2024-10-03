
let mes = parseInt(prompt("Introduzca el mes"));
let dia = parseInt(prompt("Introduzca el dia"));

let diasPasados=0;
if(mes == null || dia == null){
    alert("Operacion cancelada");
}
else if(mes > 0 && mes < 13){
    if(dia > 0 && dia < 32){

        switch(mes){
            case 1: diasPasados = 0 + dia; break;
            case 2: diasPasados = 31 + dia; break;
            case 3: diasPasados = 59 + dia; break;
            case 4: diasPasados = 90 + dia; break;
            case 5: diasPasados = 120 + dia; break;
            case 6: diasPasados = 151 + dia; break;
            case 7: diasPasados = 181 + dia; break;
            case 8: diasPasados = 212 + dia; break;
            case 9: diasPasados = 243 + dia; break;
            case 10: diasPasados = 273 + dia; break;
            case 11: diasPasados = 304 + dia; break;
            case 12: diasPasados = 334 + dia; break;
            }

        }
        alert("Dias pasados desde comienzo de año: "+diasPasados);
    }
    else{
    alert("Por favor introduzca una fecha valida");
    }
