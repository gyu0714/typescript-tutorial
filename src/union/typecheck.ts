const check = (type: number | string | boolean): number | string | boolean => {
  switch (type) {
    case 'string':
      return type;
    case 'number':
      return type;
    default:
      return type;
  }
};

console.log(typeof check(1234), check(1234));
