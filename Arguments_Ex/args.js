function sum() {
  let result = 0;
  let args = Array.prototype.slice.apply(arguments);
  args.forEach ((arg) => {
    result += arg;
  });
  return result;
}

function sum2(arg1, ...args) {
  let result = arg1;
  args.forEach ((arg) => {
    result += arg;
  });
  return result;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);
// console.log(sum2(1, 2, 3, 4) === 10);
// console.log(sum2(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function (context) {
  //function notmarkov (anon func) nvm not quite
  // seperate bind into ...input 
  // debugger;
  let args = Array.from(arguments).slice(1);
  let that = this;
  return function (){
    let callTime = Array.from(arguments);
    // debugger;
    args = args.concat(callTime);
    return that.apply(context, args);
  };
};

Function.prototype.myBind2 = function (context, ...bindArgs) {
  let that = this;
  // debugger;
  return function (...callTime) {
    let allArgs = bindArgs.concat(callTime);
    return that.apply(context, allArgs);
  };
};

function getSum(total, num) {
  return total + num;
}

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(singleNum) {
    numbers.push(singleNum);
    if (numbers.length === numArgs) {
      return numbers.reduce(getSum);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

  
Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;
  function _curry(singleArg) {
    args.push(singleArg);
    if (args.length === numArgs) {
        return that.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};
