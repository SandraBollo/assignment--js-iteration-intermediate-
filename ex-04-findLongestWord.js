/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("i like books full of dogs") should return "books"
 *
**/

// ++ YOUR CODE below


function findLongestWord (str){
  var maxstr = " ";
  var max = 0;
  var arr = str.split("'");

//console.log(arr);

  var ar1 = [];
  var narr = [];
  for (var i = 0; i< arr.length; i++){
    var ar2 = arr[i].split(" ")
    //console.log(ar2)
    ar1.push(ar2)
  }
  console.log(ar1)
  // for (var i = 0; i < ar1.length; ++i) {
  //   for (var j = 0; j < ar1[i].length; ++j)
  //     narr.push(ar1[i][j]);
  // }
  //console.log(narr);
  // for(var i = 0; i < narr.length; i++){
  //   if(narr[i].length > max){
  //     max =  narr[i].length;
  //     maxstr = narr[i];
  //   }
  // }
  //console.log(maxstr);
  return maxstr;
}


var ejemplo = ('i have baskets full of lemons');
const ex_04 = findLongestWord(ejemplo)
// console.log(ex_04);



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*


console.group('ex-04');
  console.log('ex-04\n%cFunction: findLongestWord', 'background-color: green; color: white')
console.groupEnd();

console.log('Should return "baskets" from "I have baskets full of lemons"');
console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')

console.log('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')

//  punctuation should NOT be included in the evaluation for the longest word
console.log('Should return "Texas" from "don’t mess with Texas"');
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

console.log('Should return "time" from "a time to act."');
console.assert(findLongestWord('a time to act.') === 'time')

console.log('\n')
