const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSort(madeAnySwaps) {
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, );
    };
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSort) {
  if (i === (arr.length - 1)) {
    outerBubbleSort(madeAnySwaps);
    return 
  }
  askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
    if (isGreaterThan) {
      const tmp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tmp;

      madeAnySwaps = true;
    }

    innerBubbleSortLoop(
      arr, i + 1, madeAnySwaps, outerBubbleSortLoop
    );
  });
};

const askIfGreaterThan = function(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? `, function (response) {
    if (isGreaterThan === true) {
      let temp = el1;
      el1 = el2;
      el2 = temp;
    }
    });
  };

const isGreaterThan = function (response) {
  if (response.toLowerCase() === 'yes') {
    return true;
  }
  else {
    return false;
  }
};