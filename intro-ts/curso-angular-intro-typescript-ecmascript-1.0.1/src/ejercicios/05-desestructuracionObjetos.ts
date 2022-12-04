

interface Reproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles
}

interface Detalles{
    autor : string;
    anio : number
}

const reproductor : Reproductor = {
    volumen : 90,
    segundo : 36,
    cancion : "Mess",
    detalles : {
        autor : "Ed Sheeran",
        anio: 2015
    }
}


const {volumen , segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

/* Tambien se puede desestructurar asi */
//const {volumen , segundo, cancion, detalles{ autor }} = reproductor;



/*ARRAYS */ 

const dbz : string[] = ['Goku', 'Vegeta','Trunks'];
const [, , p3] = dbz;

//p3 es Trunks, lo hemos desestructurado. Se pueden poner comas vacias. 

