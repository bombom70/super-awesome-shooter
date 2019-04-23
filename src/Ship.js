import {Sprite} from 'pixi.js';
class Ship extends Sprite {
  static create(texture, x, y) {
    const ship = new this(texture, x, y);
    return ship;
  }
  constructor(texture, x, y) {
    super(texture);
    this.x = x;
    this.y = y;
    this.speed = 10;
  }

  left() {
    this.x -= this.speed;
  }

  right() {
    this.x += this.speed;
  }

  up() {
    this.y += this.speed;
  }

  down() {
    this.y -= this.speed;
  }
}

export default Ship;