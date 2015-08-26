
var commonCharacters = function (string1) {

  var string1Chars = {}, strNoDups = "", regExp, i, j;

  string1.split("").forEach(function (element) { string1Chars[element] = true; });
  for (i in string1Chars) { if (i) {strNoDups += i; } }

  for (j = 1; j < arguments.length; j++) {
    regExp = new RegExp('[' + arguments[j] + ']', 'g');
    strNoDups = strNoDups.match(regExp).join("");
  }
  return strNoDups;
};




console.log(commonCharacters('aceexivoue', 'aegihobue'));
                  // --> 'aeiou'
console.log(commonCharacters('aecexivou', 'aegihobu', 'aeefilou'));
                  // --> 'aeiou'
console.log(commonCharacters('dcba', 'abcd'));
                  // --> 'dcba'

                    // return set.replace(/(\w+)\1+/gi,function(set){return set[0]});