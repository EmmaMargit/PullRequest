export class Person {
    age!: number;
    name!: string;
    height!: number;
    constructor(age: number, name: string, height: number){
        this.age = age;
        this.name = name;
        this.height = height;
    };
        greeting(): string{
            return "Hej halloj!";

        }
    
}