

/*
    ===== Código de TypeScript =====
*/



function sumar(a : number,b : number) : number{
    return a+b;
}

const sumarFlecha= (a : number,b : number) : number => {
    return a+ b;
}

//Primero van los obligatorios, luego los opcionales y por ultimo los que tienen un valor por defecto.

function multiplicar(numero: number,  otroNumero?: number, base:number = 2){
    return numero * base;
}


interface PersonajeLOR {
    nombre : string ;
    pv: number;
    mostrarHp: () => void;

}


function curar(personaje : PersonajeLOR, curarX : number) : void {

    personaje.pv += curarX;
}


const nuevoPersonaje : PersonajeLOR = {
    nombre : 'Stringer' ,
    pv : 400,
    mostrarHp(){

    }
}


curar (nuevoPersonaje,20);

nuevoPersonaje.mostrarHp();