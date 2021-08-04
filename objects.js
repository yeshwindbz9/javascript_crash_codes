//In JavaScript, an object is a standalone entity, with properties and type.
//Creating an object
var myCar = Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);

myCar['make'] = 'Ferrari';
myCar['model'] = 'Enzo';
myCar['year'] = 2002;
console.log(myCar);

var myCar = {
    make: 'Dodge',
    model: 'Charger',
    year: 1966
};
console.log(myCar);

console.log("properties of latest myCar");
for(let prop in myCar){
    console.log(`myCar.${prop} is ${myCar[prop]}`);
}
console.log("-------------------------------------");

//Constructor & Objects in object
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}
  
var ken = new Person('Ken Jones', 39, 'Male');
var kensCar = new Car('Nissan', '300ZX', 1992, ken);
console.log(`${ken.name} is a ${ken.sex} who is ${ken.age} years old.`);
console.log(`${kensCar.owner.name} has a ${kensCar.make}, ${kensCar.model} which released in ${kensCar.year}.`);
console.log("-------------------------------------");

//Unassigned properties of an object are undefined (and not null).
//Objects can also be created using the Object.create() method. 
// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
      console.log(this.type);
    }
};
  
// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes
//You can add a property to a previously defined object type by using the prototype property
Animal["planet"] = "Earth";
console.log(`Fish is found on ${fish.planet}`);
var picolo = Object.create(Animal);
picolo.planet = "Namek";
console.log(`Picolo is on ${picolo.planet}`);
console.log("-------------------------------------");

//A method is a function associated with an object, or, put differently, a method is a property of an object that is a function.
function displayCar() {
    var result = `${this.owner.name} owns a beautiful ${this.year} ${this.make} ${this.model}`;
    console.log(result);
}

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.displayCar = displayCar;
}
var ken = new Person('Ken Jones', 39, 'Male');
var kensCar = new Car('Nissan', '300ZX', 1992, ken);
kensCar.displayCar();

//A getter is a method that gets the value of a specific property. A setter is a method that sets the value of a specific property.
var number = {
    value: 0,

    get getValue(){
        return this.value;
    },

    set setValue(newValue){
        this.value = newValue;
    }
};

console.log(number.value);
console.log("Setting number value as 99!");

number.setValue = 99;
console.log("Getting number value...");
console.log(number.getValue);

//You can remove a non-inherited property by using the delete operator.
delete number.setValue;
console.log(`Is setValue a property in number? ${!'setValue' in number}`);