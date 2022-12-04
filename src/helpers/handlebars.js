const Handlebars=require('handlebars');
module.exports = {
    sum: (a, b) => a + b, //Create sum method to use in view

    sub: (a, b) => a - b, //Create sum method to use in view
    ifEqual:  function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    },
    plus: (a , b) => a * b,

    ifEq:(a,b)=>a==b,
    ifLH: (a,b) => a>b,

    for: function(from, to, incr, block) {
        var accum = '';
        for(var i = from; i < to; i += incr)
            accum += block.fn(i);
        return accum;
    },

    convertObjToStr: (a)=> JSON.stringify(a).replaceAll('.',''),
    convertStrToInt: (a)=> parseInt(a),



}
