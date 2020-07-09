abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number){
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        return this.level;
    }

    set setLevel(level: number){
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old and has the char ${this.nickname} at level ${this.level}`)
    }
}

// const will = new UserAccount("João", 19);
const john = new CharAccount("John", 45, "Johnmaster", 80);
// will.logDetails();
john.logDetails();
john.logCharDetails();
john.setLevel = 156;
console.log(john.getLevel);

