const Big = require('big.js').default;

(function(){
  let numberPro = Number.prototype;
  let stringPro = String.prototype;
  
  let MATH  = {
    plus: function(b){ //+
      let a = Number(this);
      b = b || 0;
      return (new Big(a).plus(b)).toString(2)
    },
    minus: function(b){ // -
      let a = Number(this);
      return (new Big(a).minus(b)).toString(2)
    },
    times: function(b){ // *
      let a = Number(this);
      return (new Big(a).times(b)).toString(2)
    },
    div: function(b){ // /
      let a = Number(this);
      if(Number(b) === 0) throw new Error('Divisor cannot be 0');
      return (new Big(a).div(b)).toString(2)
    }
  }

  Object.keys(MATH).forEach((v) => {
    numberPro[`_${v}_`] = MATH[v];
    stringPro[`_${v}_`] = MATH[v];
  });

})(Number,String)
