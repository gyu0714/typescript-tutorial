interface IFilter<T> {
  unique(array: Array<T>): Array<T>;
}

class Filter<T> implements IFilter<T> {
  unique(array: T[]): T[] {
    // return [...new Set(array)];
    return array.filter((v, i, array) => array.indexOf(v) === i);
  }
}

let myFilter = new Filter<string>();
let resultFilter = myFilter.unique(['b', 'c', 'd', 'a', 'a']);
console.log(resultFilter);
