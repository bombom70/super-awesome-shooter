import { Loader } from 'pixi.js';

const loader = Loader.shared;

export default function(assets) {
  return new Promise((res, rej) => {
    for(let key in assets) {
      loader.add(key, assets[key]);
    }
    loader.load(res);
    loader.onError.add(rej);
  });
}
