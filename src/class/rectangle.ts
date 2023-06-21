/**
 * 클래스와 인터페이스 형태
 */
class Rectangle {
  x: number;
  y: number;

  // 생성자
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getArea(): number {
    return this.x * this.y;
  }
}

interface Rectnalge {
  x: number;
  y: number;
  getArea: () => number;
}

let rectangle: Rectnalge = new Rectangle(1, 5);
let area: number = rectangle.getArea();
console.log('⭐️Area : ', area);
