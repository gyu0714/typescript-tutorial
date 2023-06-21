// 합성관계
class Engine {}
class Car {
  private engine;

  constructor() {
    this.engine = new Engine();
  }
}

let myCar = new Car();

// 집합관계
class Engine2 {}
class Car2 {
  private engine: Engine2;

  constructor(engine: Engine2) {
    this.engine = engine;
  }
}

let engine2 = new Engine2();
let car2 = new Car2(engine2);
