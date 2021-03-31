// ES5 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty';

function func() {
  var args = Array.prototype.slice.call(this, arguments);
  var first = args[0];
  var others = args.slice(1);
}

// ES6 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined = [...array1, ...array2];
// combined = ['one', 'two', 'three', 'four'];
var [first, second, three = 'empty', ...others] = array1;
// first = 'one', second = 'two', three = 'empty', others = []

function func(...args) {
  var [first, ...others] = args;
}

function func(first, ...others) {
  var firstInES6 = first;
  var othersInES6 = others;
}

// 올바르지 못한 예
// var wrongArr = ...array1;

// (전개연산자 - 객체) ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one,
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var others = Object.assign({}, combined);
delete others.other;

// ES6 예제
var combined = {
  ...objectOne,
  ...objectTwo,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}
var combined = {
  ...objectTwo,
  ...objectOne,
};
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}
var { other, ...others } = combined;
// others = { one: 1, two: 2, three: 3, four: 4}
