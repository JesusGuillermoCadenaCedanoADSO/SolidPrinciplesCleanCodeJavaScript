interface Bird{
    // fly(): void;
    eat(): void;
    // run(): void;
    // swim():void;
}


interface FlyingBird{
    fly():number;
}

interface RunningBird{
    run():void;
}

interface SwimmingBird{
    swim():void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){
        return 100;
    }
    public eat(){

    }
}

class Hummingbird implements Bird, FlyingBird{
    public fly(){
        return 200;
    }
    public eat(){}
}

//aqui se viola el principio de segregacion de interfaz por que la clase ostrich
//depende de la implementacion de la clase Bird
class Ostrich implements Bird, RunningBird{
    public eat(){}
    public run(){}
}

class Penguin implements Bird, RunningBird, SwimmingBird{
    public eat(){}
    public run(){}
    public swim(){}
    //public swim(){} si se implementara el metodo swim en la clase Penguin
    //habria que modificar la clase Bird y añadir este metodo a las demás aves
}



