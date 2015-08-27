// var commonCharacters = function (string1) {
//   var string1Chars = {}, strNoDups = "", i, j;

//   string1.split("").forEach(function (element) { string1Chars[element] = true; });
//   for (i in string1Chars) { if (i) {strNoDups += i; } }

//   for (j = 1; j < arguments.length; j++) {
//     strNoDups = strNoDups.match(new RegExp('[' + arguments[j] + ']', 'g')).join("");
//   }
//   return strNoDups;
// };

// console.log(commonCharacters('aceexivoue', 'aegihobue'));
//                   // --> 'aeiou'
// console.log(commonCharacters('aecexivou', 'aegihobu', 'aeefilou'));
//                   // --> 'aeiou'
// console.log(commonCharacters('dcba', 'abcd'));
                  // --> 'dcba'

var longestRun = function (string) {
  var max = 0, longRun;
  string.replace(/(\w+)\1+/g, function (set) {
    if (set.length > max) {
      max = set.length;
      longRun = set;
    } return set;
  });
  return (max === 0) ? [0, 0] :
  [ string.match('[' + longRun + ']').index,
    string.match('[' + longRun + ']').index + max - 1 ];
}

//Test Suite

console.log(longestRun("abbbc"));
                  // --> 'aeiou'
console.log(longestRun("abc"));
                  // --> 'aeiou'
console.log(longestRun("abbcc"));
                  // --> 'aeiou'

classic personality studies.... use methods

/\w+(?=\.jpg)/g images

                  "dirtyimage.jpg cleanimage.jpg image.png".match(/\w+(?=\.jpg)/g)

                    // return set.replace(/(\w+)\1+/gi,function(set){return set[0]});