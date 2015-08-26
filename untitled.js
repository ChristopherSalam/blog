
var commonCharacters = function (string1, string2) {
  var set = string1,
    regExp, i;
  for (i = 0; i < arguments.length; i++) {
    regExp = new RegExp('[' + arguments[i] + ']', 'g'),
    set = set.match(regExp).join("");
  }
  return set.replace(/(\w+)\1+/gi,function(set){return set[0]});
};

console.log(commonCharacters('aceexivoue', 'aegihobue'));
                  // --> 'aeiou'
console.log(commonCharacters('aecexivou', 'aegihobu', 'aeefilou'));
                  // --> 'aeiou'
console.log(commonCharacters('dcba', 'abcd'));
                  // --> 'dcba'