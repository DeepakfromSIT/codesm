// let num = [1, 2, 3, 4, 5];

// const square = num.map((el) => el * el);
// console.log(square);

// const sum = square.reduce((res, el) => res + el);
// console.log(sum);

// const avg = sum / num.length;
// console.log(avg);

// SECOND

// let num = [1, 2, 3, 4, 5, -2, -4];
// const newArr = num.map((el) => el + 5);
// console.log(newArr);

//THIRD

// let str = ["apna", "school", "maths", "physics"];
// const newStr = str.map((el) => el.toUpperCase());
// console.log(newStr);

//FOURTH

// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v * 2),
// ];
// doubleAndReturnArgs([1, 2, 3], 4, 5);
// doubleAndReturnArgs([1, 2], 3, 6);

//FIFTH

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
