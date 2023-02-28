const arr = [3, 6, 9, 12];

/***********Overidding map function**********/
/***************************************** */

Array.prototype.map = (callback) => {
  console.log("this is from prototype map");
  let mappedArray = [];
  for (let item of arr) {
    mappedArray.push(callback(item));
  }
  return mappedArray;
};

arr.map((item) => {
  return console.log(item * item);
});
arr.map((item) => {
  return console.log(item + item);
});

/***********Overidding reduce function**********/
/***************************************** */

Array.prototype.reduce = (callback) => {
  console.log("This is from reduce prototype ");
  let mappedArray = [];
  for (let item of arr) {
    mappedArray.push(callback(item));
  }
  return mappedArray;
};

let total = arr.reduce((acc, item) => acc + item, 0);

console.log(total);
