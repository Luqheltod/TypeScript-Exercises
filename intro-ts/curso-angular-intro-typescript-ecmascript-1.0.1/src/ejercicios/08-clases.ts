class PersonaNormal {
 
    constructor(
        public nombre : string,
        public direccion : string,
    )
    {}

}
class Heroe extends PersonaNormal {
//    public alterEgo : string;
//    public poder : number;
//    public edad : number;

   constructor( 
    public alterEgo : string, 
    public poder : number,
    public edad : number) {

   super("tontaco","newyork");
}

}

const idiotman = new Heroe("jijijajaman",100, 12);