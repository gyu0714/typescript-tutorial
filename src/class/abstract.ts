abstract class AbstractBird {
  abstract birdName: string;
  abstract habitat: string;

  abstract flySound(sound: string): void;

  fly(): void {
    this.flySound('푸드득');
  }

  getHabitat(): void {
    console.log(`${this.birdName}의 서식지는 ${this.habitat}입니다.`);
  }
}

class WildGoose extends AbstractBird {
  constructor(public birdName: string, public habitat: string) {
    super();
  }

  flySound(sound: string) {
    console.log(`${this.birdName}이 ${sound} 날아간다.`);
  }
}

let wildGoose = new WildGoose('오리', '수영강');
wildGoose.fly();
wildGoose.getHabitat();
