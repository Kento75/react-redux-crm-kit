import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import store from '../store';
import { TopPage, Hello } from '../components';
import { SearchPageContainer } from '../containers';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={TopPage} />
            <Route path="/hello" component={Hello} />
            <Route path="/search" component={SearchPageContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(Root);
