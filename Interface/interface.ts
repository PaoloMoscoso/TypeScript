enum Gender {
    Male = 'male',
    Female = 'female'
}

interface Human {
    name: string;
    age: number;
    gender: Gender;
    walk(): void;
    showInformation(): void
}

class CommonPerson implements Human {
    name: string;
    age: number;
    gender: Gender;
    constructor(name: string, age: number, gender: Gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    public walk() {
        console.log(`${name} walks around the world`)
    }
    /**
     * showInformation
     */
    public showInformation() {
        console.log('type: Common Person');
        console.log('name: ', this.name);
        console.log('age: ', this.age);
        console.log('gender: ', this.gender);
        this.walk();
    }
}

class SuperPerson implements Human {
    name: string;
    age: number;
    gender: Gender;
    power: string;
    constructor(name: string, age: number, gender: Gender, power?: string ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.power = power ?  power : 'common';
    }

    
    public set skill(power : string) {
        this.power = power;
    }

    
    public get skill() : string {
        return this.power;
    }
    
    
    public walk() {
        console.log(`${this.name} walks around the world`)
    }
    /**
     * showInformation
     */

    public showInformation() {
        console.log('type: Common Person');
        console.log('name: ', this.name);
        console.log('age: ', this.age);
        console.log('gender: ', this.gender);
        this.walk();
        console.log('power: ', this.skill)
    }
}

let commonPerson: CommonPerson;
commonPerson = new CommonPerson('Lois', 20, Gender.Male);
commonPerson.showInformation();
/////////////////////////////////
let superPerson: SuperPerson;
superPerson = new SuperPerson('Xavier', 30, Gender.Male);
superPerson.showInformation();
console.log('set skill ');
superPerson.skill = 'invisibility';
superPerson.showInformation();
