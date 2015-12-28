'use strict';
import assign from 'object-assign';

let SpringMotion = function(options){
  assign(this, options);
};

module.exports = SpringMotion;

SpringMotion.prototype.move = function(){
  let {a, v, s, center, k} = this;
  v = v || 0;
  let distanceFromCenter = center - s ;
  a = k * distanceFromCenter;
  v += a;
  s += v;
  assign(this,{a, v, s});
};

SpringMotion.prototype.getCurrentPosition = function(){
  let {s} = this;
  return {
    x : s
  };
};
