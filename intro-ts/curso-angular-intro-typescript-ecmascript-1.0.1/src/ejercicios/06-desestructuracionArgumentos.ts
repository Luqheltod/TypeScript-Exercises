
interface Producto {
    desc: string;
    precio : number;
}


const telefono : Producto = {
    desc : "telefono mierder" ,
    precio :200
}

const tablet : Producto = {
    desc : "tablet mierder",
    precio : 300
}


function calculaImpuesto( productos : Producto[] ){

    let total = 0;

    productos.forEach(({precio}) => {

        total += precio;

})

    return total;
}

const articulos = [telefono, tablet];

const impuesto = calculaImpuesto( articulos);