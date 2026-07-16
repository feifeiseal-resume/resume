/*
 * @Author: Hazel
 * @Date: 2026-06-04 23:20:33
 * @LastEditors: Hazel
 * @LastEditTime: 2026-07-02 15:21:06
 * @Description: 
 */

//Q1: Write code to get an array of names from given array of users
const users = [
  {id: 1, name: 'Jack', isActive: true},
  {id: 2, name: 'John', isActive: true},
  {id: 3, name: 'Mike', isActive: false},
  ]

// const names = users.map((user) => user.name);
// console.log(names)

const names: string[] = []
for (const user of users) {
  names.push(user.name as string)
}
console.log(names)

//Q1: What will be logged in this example?
let var1;
console.log(var1); //undefined
console.log(typeof var1); //undefined

//Q2: What will be logged in this example?
let var2 = null;
console.log(var2); //null
console.log(typeof var2); //object

//Q3: What will be logged in this example?
let var3 = undefined;
console.log(var3); //undefined
console.log(typeof var3); //undefined

//Q1: Create a counter function which has increment and getValue
const privateCounter = () => {
  let count = 0;
  return {
    increment: () => count++,
    getValue: () => count,
  };
};

const counter = privateCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1

//Q2: Create a function which stores a secret string inside which is not accessible but is returned only when we call this function.

const privateSecret = () => {
  let secret = 'secret';
  return () => secret;
};

const getSecret = privateSecret();
console.log(getSecret()) // 'secret'

//Q1: Write a function which helps to achieve multiply(a)(b) and returns multiplication of a and b
const multiply = (a: number) => {
  return (b: number) => {
    return a * b;
  };
};
console.log(multiply(2)(3));

//Q2: Create a curry function //TODO
const curry = (fn: Function) => {
  const arity = fn.length;
  return (...args: any[]) => {
    if (args.length >= arity) {
      return fn(...args);
    }
    return (...args2: any[]) => {
      const newArgs = args.concat(args2)
      return fn(...newArgs);
    };
  };
}

const curriedSum = curry((a, b, c) => a + b + c);
const partiallyCurriedSum = curriedSum(1);
console.log(partiallyCurriedSum(2, 3)); // 6





//Q1: Write a function which removes all duplicates from the array.
const uniqueArr = (arr: number[]) => {
  // return arr.filter((item, index, self) => self.indexOf(item) === index);

  // const set = new Set(arr);
  // return Array.from(set);

  // const result = [];
  // for (const item of arr) {
  //   if (!result.includes(item)) {
  //     result.push(item);
  //   }
  // }
  // return result;

  return arr.reduce((acc, item) => {
    return acc.includes(item) ? acc : [...acc, item];
  }, []);
};
console.log(uniqueArr([1, 1, 2])); // [1,2]


//range(1, 50)
const range = (start: number, end: number) => {
  // return Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // const result = [];
  // for (let i = start; i <= end; i++) {
  //   result.push(i);
  // }
  // return result;

  return [...Array(end - start +1).keys()].map(i => start + i);
};
console.log(range(1, 50)); // [1, 2, 3, ..., 50]

// shuffle(arr)
const shuffleArr = [1, 2, 3, 4, 5];
const shuffle = (arr: number[]) => {
  const result = [...arr];

  return result
  .map(item => ({ sort: Math.random(), value: item }))
  .sort((a, b) => a.sort - b.sort)
  .map(item => item.value)
};
console.log(shuffle(shuffleArr)); // [1, 2, 3, 4, 5]


const countMin = (arr: number[]) => {
  const min = Math.min(...arr);
  return arr.filter(item => item === min).length;

  
  // const sortArr = arr.sort((a, b) => a - b);
  // const countArr = sortArr.filter(s => s === sortArr[0])
  // return countArr.length;
};

countMin([1, 2, 3, 1, 4])