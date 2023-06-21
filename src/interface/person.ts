interface IPerson {
  height: number;
  getAlias: () => string;
  getAge(): number;
}

class Police implements IPerson {
  height = 180;
  getAlias = () => '무서운';
  getAge = () => 30;

  hasKindness = () => true;
}

let police = new Police();
console.log(police.getAge());
console.log(police.getAlias());
console.log(police.hasKindness());
