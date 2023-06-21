class Cube {
  public width: number;
  private length: number;
  protected height: number;

  constructor(pWidth: number, plength: number, pHeight: number) {
    this.width = pWidth;
    this.length = plength;
    this.height = pHeight;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }
}

let [cWidth, cLength, cHeight] = [1, 2, 3];
let cube = new Cube(cWidth, cLength, cHeight);

console.log('✅ 부피 : ', cube.getVolume());
