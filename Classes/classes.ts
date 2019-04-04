class Person {
    //variables
    public name: string = 'NA';
    public age: number = 0;
    private hobby: string;
    //constructors
    constructor(name: string, age: number, hobby: string) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
    }
    //methods
    public get pastime() : string {
        return this.hobby;
    }
    // or 
    public getHobby() : string {
        return this.hobby;
    }

    public static personData(): object {
        const person = {
            name: 'NA',
            age: 0,
        }
        return (person)
    }
    
    
}

let person = new Person('jose', 30, 'soccer');
console.log('name: ', person.name);
console.log('age: ', person.age);
// console.log('hobby: ', person.hobby);// you can not acces this variable because it is private;
console.log('hobby: ', person.getHobby());
const pastime = person.pastime; //you need to assign method get in some variable
console.log('pastime:', pastime);
console.log('pastime:', Person.personData());
