'use strict';

const myFunc = function() {
  console.log("You have reached myFunc");
  console.log(privateFunc());
};

const privateFunc = function(){
  console.log("You have reached privateFunc");
};

module.exports = {
  'myFunc': myFunc,
  PHI: 1.618,
  explain: function() {
    console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
  }
};