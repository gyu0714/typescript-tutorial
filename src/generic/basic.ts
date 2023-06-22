interface IName {
  name: string;
}

class Profile implements IName {
  name = 'GYU';
  age = 29;
}

class Accessor {
  getKey1<T>(obj: T) {
    return obj['name'];
  }
  getKey2<T extends IName>(obj: T) {
    return obj['name'];
  }

  get(obj: IName) {
    let objName = obj instanceof Profile ? obj.name : obj;
    return objName;
  }
}

let ac = new Accessor();
console.log(ac.getKey1<IName>(new Profile()));
console.log(ac.getKey2(new Profile()));
console.log(ac.get(new Profile()));
