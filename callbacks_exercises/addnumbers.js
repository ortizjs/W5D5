const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
  } 
  else if (numsLeft > 0) { 
    reader.question(('Present an input:'), function (num) {
      let partial_sum = sum + parseInt(num);
      console.log(`Partial sum: ${partial_sum}`);
      console.log(' ');
      addNumbers(partial_sum, numsLeft - 1, completionCallback);
    });
  }
};

addNumbers(0, 3, sum => {
  console.log(`Total Sum: ${sum}`);
  reader.close();
}
  );
