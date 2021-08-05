class Student{
    fullName: string;
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ){
        this.fullName = firstName+' '+middleName+' '+lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greetEm(person: Person){
    return "Hi, " + person.firstName+' '+person.lastName;
}

let user = new Student("Billy", "Moby", "Brown");
document.body.textContent = greetEm(user);