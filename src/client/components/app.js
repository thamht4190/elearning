import React, { Component } from 'react';

import Header from './common/component.header';

export default class App extends Component {
  render() { console.log('rendering App');
    return (
      <div>
        <Header />
        React simple starter
      </div>
    );
  }
}
