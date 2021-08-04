// Proxy objects allow you to intercept certain operations and to implement custom behaviors.
let handler = {
    get: function(target, name) {
      return name in target ? target[name] : "no number found!"
    }
}

let p = new Proxy({}, handler);
p.a = 1;
console.log(p.a); // 1
console.log(p.b);
