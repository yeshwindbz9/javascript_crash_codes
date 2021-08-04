//Iterators and Generators bring the concept of iteration directly into the core language and provide a mechanism for customizing the behavior of for...of loops.
//Iterator is an object which defines a sequence and potentially a return value upon its termination.
function makeRangeIterator(start = 0, end, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
       next: function() {
           let result;
           if (nextIndex < end) {
               result = { value: nextIndex, done: false };
               nextIndex += step;
               iterationCount++;
               return result;
           }
           return { value: iterationCount, done: true }
       }
    };
    return rangeIterator;
}

//Using the iterator
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
 console.log(result.value); // 1 3 5 7 9
 result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
console.log("---------------------------------------");

//fruits iterator
const fruits = ["apple", "mango", "cherry", "banana"];
console.log("Array of fruits: "+ fruits);

function fruitsIterator(arr){
    let nextIndex = 0;
    return {
        next: function(){
            if (nextIndex < arr.length){
                return {
                    value: arr[nextIndex++],
                    done: false
                }
            } else{
                return {
                    done: true
                }
            }
        }
    }
}

//Using iterator
let fruit = fruitsIterator(fruits);
console.log(fruit.next());
console.log(fruit.next().value);
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next().done);