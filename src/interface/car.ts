interface Car {
  speed: number;
}
interface SportsCar {
  acceleration: number;
}

interface MyOptimizedCar extends Car, SportsCar {
  waterproof: boolean;
}

let newCar = <MyOptimizedCar>{};
newCar.speed = 100;
newCar.acceleration = 100;
newCar.waterproof = true;
