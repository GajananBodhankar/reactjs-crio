const car = {
  name: "BMW",
  power: "2000 BHP",
  color: "black",
};

let vehicle = {
  wheels: 4,
};

Object.setPrototypeOf(vehicle, car);

console.log(car.wheels);
