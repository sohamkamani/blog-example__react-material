'use strict';

import Renderer from './Renderer';
import Component from './Component';
import Square from './drawings/Square';
import LinearMotion from './motions/LinearMotion';
import SpringMotion from './motions/SpringMotion';

const renderer = new Renderer('myCanvas');

let motion = new LinearMotion({
  center : 100,
  maxDistanceFromCenter : 50
});

let square = new Square({
  width : 25,
  height : 25,
  position : {
    x : 100,
    y : 10
  }
});

let springSquare = new Square({
  width : 25,
  height : 25,
  position : {
    x : 100,
    y : 40
  }
});

let springMotion = new SpringMotion({
    center: 100,
    s: 150,
    k: 3e-3
  });

renderer.addComponent(new Component({
  motion,
  drawing : square
}));

renderer.addComponent(new Component({
  motion : springMotion,
  drawing : springSquare
}));

const render = ()=>{
  requestAnimationFrame(render);
  renderer.update();
  renderer.paint();
};
render();
