interface IAnimal{
    name: string;
    color: string;
}

class Animal implements IAnimal {
    constructor(public name: string, public color:string){
    }

}

class Coelho extends Animal {
}

let coelho1: Coelho = new Coelho('asd', 'red');
