import React, { Component } from 'react';
import AppHeader from './common/Header/AppHeader';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div>
          <AppHeader />
        </div>
        <div>Hello World</div>
      </div>
    );
  }
}

export default HelloWorld;
