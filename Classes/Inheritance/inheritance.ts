class Animal {
    public name: string = 'NA';
    public legs: number = 4;    

    constructor(name: string, legs: number) {
        this.name = name;
        this.legs = legs;
    }

    public showInformation() {
        console.log(`I'm an animal with ${this.legs} legs, my name is ${this.name}.`);
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name, 4);
    }
}

class Bird extends Animal{
    constructor(name: string){
        super(name, 2);
    }
}
let dog: Dog;
dog = new Dog('toby');
dog.showInformation();

let bird: Bird;
bird = new Bird('bird');
bird.showInformation();
