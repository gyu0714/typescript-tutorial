interface Person {
  name: string;
  age: number;
  address: string;
}

// PersonKeys 타입은 "name" | "age" | "address" 가 선언된다
type PersonKeys = keyof Person;

let personName: PersonKeys = 'name';
