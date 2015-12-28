'use strict';
import assign from 'object-assign';

let Square = function (options) {
  let self = this;
  assign(self, options);
};

module.exports = Square;

Square.prototype.draw = function (ctx) {
  let self = this;
  ctx.fillStyle = 'black';
  ctx.rect(self.position.x, self.position.y, self.width, self.height);
  ctx.fill();
};
