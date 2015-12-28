'use strict';

let Renderer = function(canvasId){
  const canvas = document.getElementById(canvasId);
  let self = this;
  self.canvas = canvas;
  self.ctx = canvas.getContext('2d');
  self.components = [];
};

module.exports = Renderer;

Renderer.prototype.addComponent = function(drawObject){
  this.components.push(drawObject);
};

Renderer.prototype.update = function(){
  this.components.forEach(drawObject => {
    drawObject.update();
  });
};

Renderer.prototype.paint = function(){
  let self = this;
  self.ctx.clearRect(0,0,self.canvas.width,self.canvas.height);
  self.ctx.beginPath();
  this.components.forEach(component => {
    component.draw(self.ctx);
  });
  self.ctx.stroke();
};
