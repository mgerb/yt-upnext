import * as _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import { Popup } from './components';

// Injects elements into the page
class Injector {

  public injectElements(): void {
    // check for elements every half second
    setInterval(() => {
      this.videoPageInjection();
    }, 500);
  }

  private videoPageInjection(): void {
    const elements: NodeListOf<Element> = document.getElementsByTagName('ytd-thumbnail');

    _.each(elements, (ele: Element, index: number) => {

      // check to see if element hasn't been appended yet
      if (!!ele.querySelector(`#ytd-${index}`)) {
        return;
      }

      // create new root element and append it to youtube video
      const newElement: Element = document.createElement('div');
      newElement.id = `ytd-${index}`;
      newElement.style.position = 'absolute';
      newElement.style.padding= '5px';
      ele.appendChild(newElement);

      // add our react element
      ReactDOM.render(<Popup/>, document.getElementById(`ytd-${index}`));
    });

  }

  // private subscriptionPageInjection(): void {

  // }

}

export default new Injector();
