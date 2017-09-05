import Injector from './injector';
import Player from './player';

window.onload = () => {
  Player.startListeners();
  Injector.injectElements();
};
