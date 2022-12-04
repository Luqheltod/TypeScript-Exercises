interface Pasajero {
    nombre : string;
    hijos? : string[]

}



const pasajero1 : Pasajero ={
    nombre : 'lelolo'
}

const pasajero2 : Pasajero ={

    nombre : 'Melisa',
    hijos :['tolili' , 'tololo']

}


function imprimeHijos ( pasajero: Pasajero) : void {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}
