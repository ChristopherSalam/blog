var floss = function () { this.teeth = "clean"; };
alice = {};
alice.routineFlossing = function () {
  setInterval(function () { 
  var fn = floss;
  return function() {
      fn.call(this)
    } 
  }(),2000) 
}
}
alice.teeth = "dirty";