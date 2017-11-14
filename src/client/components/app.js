import React, { Component } from 'react';

import Header from './common/component.header';
import ComponentGradeList from './common/component.grade-list'

class App extends Component {
  render() { console.log('rendering App');
    return (
      <div>
        <Header />
        <ComponentGradeList />
      </div>
    ); 
  }
}  

export default App