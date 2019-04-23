import Ship from './Ship';
import * as PIXI from 'pixi.js';
import app from './init';
import loadAssets from './loader';
const {Sprite, Container, Loader} = PIXI;
const {resources} = PIXI.Loader.shared;
document.body.appendChild(app.view);

const assets = {
  ship: '/ship.png',
};

loadAssets(assets)
  .then(onload)
  .catch(e => console.error(e));

function onload() {
  const shipTexture = resources.ship.texture;
  const ship = Ship.create(shipTexture, 0, 0);
  ship.x = app.screen.width / 2 - ship.width / 2;
  ship.y = app.screen.height - ship.height;
  ship.scale.x = 0.6;
  ship.scale.y = 0.6;
  app.stage.addChild(ship);

  window.addEventListener('keydown', ({code}) => {
    const events = {
      ArrowLeft() {
        ship.left();
      },
      ArrowRight() {
        ship.right();
      },
      ArrowUp() {
        ship.down();
      },
      ArrowDown() {
        ship.up();
      },
    };
    if (ship.x + ship.width > app.screen.width || ship.x < 0) {
      return;
    }
    if (ship.y + ship.height > app.screen.height || ship.y < 0) {
      return;
    } else {
      code in events && events[code]();
    }
  });
  app.ticker.add(delta => {});
}
