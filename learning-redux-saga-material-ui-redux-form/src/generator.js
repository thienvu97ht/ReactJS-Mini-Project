console.log("Generator function: generate trong generator");

// Xin chào ===> Redux-Saga ===> Kết thúc

function* printName() {
  yield "redux-saga";
}

function* hello() {
  yield "xin chào";
  yield* printName();
  yield "Kết thúc";
}

const interator = hello();

console.log("Result 1: ", interator.next());
console.log("Result 2: ", interator.next());
console.log("Result 3: ", interator.next());
