//An array is an ordered list of values that you refer to with a name and an index.

//Creating and populating an array
let arr0 = [0, 1, 2, 3];
let arr1 = Array(0, 1, 2, 3);
let arr3 = Array(4);
let arr4 = [];
arr4.length = 4;
arr5 = ['zero', 'one', 'two', 'three'];
console.log(arr5[0]);
arr5[4] = 'four';
console.log(arr5[4]);
console.log(`The length of arr5 is ${arr5.length}`);
console.log("------------------------------------")

//Iterating over arrays
for(let i=0; i<arr5.length; i++){
    console.log(`${arr5[i]} is at arr5[${i}]`);
}
console.log("||");
let n = 0;
console.log("forEach(callback[, thisObject]) executes callback on every array item and returns undefined.");
arr5.forEach((element) => {
    console.log(`Element ${n}: ${element}`);
    n+= 1;
});
console.log("------------------------------------")

//Array methods
console.log("concat() joins two or more arrays and returns a new array.");
let ar0 = Array('1', '2', '3');
console.log(ar0.concat('a', 'b', 'c'));
console.log("join(delimiter = ',') joins all elements of an array into a string.");
console.log(ar0.join(" +-*-+ "));
console.log("push() adds one or more elements to the end of an array, and returns length");
console.log(ar0.push('4'));
console.log("shift() removes the first element from an array and returns that element.");
console.log("unshift() adds one or more elements to the front of an array, and returns length");
console.log("slice(start_index, upto_index) extracts a section of an array and returns a new array");
console.log(ar0.slice(0, 2));
console.log("splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.");
console.log("reverse() transposes the elements of an array, in place");
console.log(ar0.reverse());
console.log("sort() sorts the elements of an array in place");
console.log(ar0.sort());
console.log("indexOf(searchElement[, fromIndex]) searches the array for searchElement and returns the index of the first match");
console.log(ar0.indexOf('1'));
console.log("lastIndexOf(searchElement[, fromIndex]) works like indexOf, but starts at the end and searches backwards.");
console.log(ar0.lastIndexOf('1'));
console.log("map(callback[, thisObject]) returns a new array of the return value from executing callback on every array item");
console.log(['a', 'b', 'c'].map((item)=> {
    return item.toUpperCase();
}));
console.log("filter(callback[, thisObject]) returns a new array containing the items for which callback returned true.");
console.log(['a', 10, 'b', 20, 'c', 30].map((item)=> {
    return typeof item === 'number';
}));
console.log("every(callback[, thisObject]) returns true if callback returns true for every item in the array.");
console.log([10, 20, 30].every((item)=> {
    return typeof item === 'number';
}));
console.log("some(callback[, thisObject]) returns true if callback returns true for at least one item in the array.");
console.log(['a', 10, 'b', 20, 'c', 30].some((item)=> {
    return typeof item === 'number';
}));
console.log("------------------------------------")

//Arrays can be nested, meaning that an array can contain another array as an element. Using this characteristic of JavaScript arrays, multi-dimensional arrays can be created.
let multiArr = Array(4);
for (let i = 0; i < 4; i++) {
    multiArr[i] = Array(4);
  for (let j = 0; j < 4; j++) {
    multiArr[i][j] = '[' + i + ', ' + j + ']';
  }
}
console.log("A 2D Array: ");
console.log(multiArr);
console.log("------------------------------------")

//Map and Set objects contain elements which are iterable in the order of insertion.
console.log("A Map object is a simple key/value map and can iterate its elements in insertion order.");
let animalNoises = new Map();
animalNoises.set("dog", "woof");
animalNoises.set('cat', 'meow');
animalNoises.set('elephant', 'toot');
console.log(animalNoises.size);
console.log("The dog goes: "+animalNoises.get("dog"));
console.log(`The cat goes: ${animalNoises.get("cat")}`);
console.log(`Is there cow in animalNoises? -> ${animalNoises.has("cow")}`);
console.log(`Is there dog in animalNoises? -> ${animalNoises.has("dog")}`);
animalNoises.delete("dog");
console.log("Deleting dog says woof!");
console.log(`Is there dog in animalNoises? -> ${animalNoises.has("dog")}`);
for (let [key, value] of animalNoises) {
    console.log(key + ' goes ' + value);
  }
console.log("------------------------------------");

//Set objects are collections of values. You can iterate its elements in insertion order. A value in a Set may only occur once; it is unique in the Set's collection.
let aSet = new Set();
aSet.add(1);
aSet.add("foo");
aSet.add("bar");
aSet.add(1);
aSet.add("bar");
aSet.add("foo");
aSet.add(1);
for (let item of aSet){
    console.log(item);
}
console.log(`Size of a set: ${aSet.size}`);
aSet.delete('foo');
console.log(aSet);
console.log("------------------------------------")

//You can create an Array from a Set using Array.from or the spread syntax.

let bSet = new Set([1,2,3,4,5,6,7,8,9]);
let Array1 = Array.from(bSet);
let Array2 = [...bSet];
console.log(Array1);
console.log(Array2);
console.log("------------------------------------")