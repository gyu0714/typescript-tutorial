// IS-A관계와 HAS-A관계
class FlashLight {
  constructor(public lightIntensity: number) {}
}

class Bicycle {
  constructor(public numberOfWheel: number, public price?: number) {}

  getNumberOfWheel(): number {
    return this.numberOfWheel;
  }

  getPrice(): number | undefined {
    return this.price;
  }
}

// Bicycle 클래스를 상속한 IS-A관계
class MountainBike extends Bicycle {
  flashlight: FlashLight;

  constructor(public numberOfWheel: number, public hasBackSaddle: boolean) {
    super(numberOfWheel);

    // 자전거가 후레쉬 라이트를 포한한 HAS-A관계
    this.flashlight = new FlashLight(90);
  }

  getHasBackSaddle(): boolean {
    return this.hasBackSaddle;
  }

  getNumberOfWheel(): number {
    return this.numberOfWheel;
  }
}

let hasBackSaddle = true;
let numberOfWheel = 2;
let mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log('자전거 안장 유무 : ', mountainBike.getHasBackSaddle());
console.log('자전거 바퀴 갯수 : ', mountainBike.getNumberOfWheel());
