 var asyncMap = function (tasks, callback) {

var resultsA = [];
var resultsCount = 0;

for (var i = 0; i < tasks.length; i++) {
  (function (i){
    tasks[i](function (val) {
      resultsA[i] = val;
      resultsCount++;
      if (resultsCount === tasks.length){
        callback(resultsA);
      }
    });
  })(i);
}

};
