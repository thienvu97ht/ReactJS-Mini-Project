function* helloGeneratorFuncion() {
  yield 2019;
  yield 2021;
  return "Tự học lập trình redux-saga";
}

const result = helloGeneratorFuncion(); // iterator

console.log("result 1: ", result.next());
console.log("result 2: ", result.next());
console.log("result 3: ", result.next());
