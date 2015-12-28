'use strict';

import assign from 'object-assign';

let Component = function(options){
  assign(this, options);
};

module.exports = Component;

Component.prototype.update = function(){
  let {motion, drawing} = this;
  motion.move();
  assign(drawing.position ,motion.getCurrentPosition());
};

Component.prototype.draw = function(ctx){
  let {drawing} = this;
  drawing.draw(ctx);
};
