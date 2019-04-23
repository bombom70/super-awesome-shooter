import * as PIXI from 'pixi.js';

const app = new PIXI.Application(document.documentElement.clientWidth, document.documentElement.clientHeight, {
  transparent: false,
  background: 0x000000,
});
app.renderer.resize(document.documentElement.clientWidth, document.documentElement.clientHeight);

window.addEventListener('resize', () => 
  app.renderer.resize(document.documentElement.clientWidth, document.documentElement.clientHeight));

export default app;
