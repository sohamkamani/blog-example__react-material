'use strict';

import assign from 'object-assign';

let LinearMotion = function (options) {
  assign(this, options);
  this.isMovingForward = true;
  this.distance = this.distance || this.center ;
  this.speed = this.speed || 2 ;
};

module.exports = LinearMotion;

LinearMotion.prototype.move = function () {
  let {
    center, distance, speed, maxDistanceFromCenter
  } = this;
  if(this.isMovingForward){
    distance += speed;
  } else {
    distance -= speed;
  }

  let currentDistanceFromCenter = Math.abs(center - distance);
  if(currentDistanceFromCenter >= maxDistanceFromCenter ){
    this.isMovingForward = !this.isMovingForward;
  }

  this.distance = distance;
};

LinearMotion.prototype.getCurrentPosition = function(){
  let x = this.distance;
  return {
    x
  };
};
