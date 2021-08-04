//String, Array, TypedArray, Map and Set are all built-in iterables, because their prototype objects all have a Symbol.iterator method.
for (let value of ['a', 'b', 'c']) {
    console.log(value);
}
// "a"
// "b"
// "c"
console.log("-----------------------------");
console.log([...'abc']);
// ["a", "b", "c"]

console.log("-----------------------------");
function* gen() {
  yield* ['a', 'b', 'c'];
}

console.log(gen().next());
console.log(gen().next());
console.log(gen().next());

// { value: "a", done: false }

console.log("-----------------------------");
