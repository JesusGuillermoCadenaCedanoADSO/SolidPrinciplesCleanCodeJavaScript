
type Size_2=''|'S'|'M'|'XL';
class Product_2{
    constructor(
        public name: string="",
        public price: number =0,
        public size: Size_2 = '',
    ){}
        //esta instruccion valida todos los atributos string y todos los atributos number
        //de esta manera no hay que crear una validacion por cada atributo creado
    isProductReady():boolean{
        for (const key in this){
            switch(typeof this[key]){
                case 'string':
                    if ((<string><unknown>this[key]).length<=0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if ((<number><unknown>this[key])<=0) throw Error(`${key} is zero`);
                break;
                default:
                    throw Error(`${typeof this[key]} is not valid`);
            }
        }
        return true;
    }
    //esta funcion deberia solo imprimir el nombre del producto y sus atributos
    toString(){
        if (!this.isProductReady) return;
        return `${ this.name}(${this.price}),${this.size}`
    }

}

(()=>{
    const bluePants = new Product_2('Blue Large Pants',10,'M');
    console.log(bluePants.toString());
})();