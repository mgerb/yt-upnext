import React from 'react';

import './popup.scss';

const style = {
  popup: {
    background: 'red',
    borderRadius: '4px',
    cursor: 'pointer',
    height: '20px',
    width: '20px',
  },
} as any;

export class Popup extends React.Component<any, any> {

  public render(): any {
    return (
      <div style={style.popup} className='popup'/>
    );
  }
}
