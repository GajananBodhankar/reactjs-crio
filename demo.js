function check() {
  this.age = 22;
  return function () {
    console.log("object");
  };
}
let val = new check();
console.log(val);
