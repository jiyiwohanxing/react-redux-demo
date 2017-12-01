// import _ from 'lodash';
// // import path from 'path';
// import './style.css'
// function component() {
//     var element = document.createElement('div');

//     element.innerHTML = _.join(['Hello', 'Webpack~'], ' ');
//     element.className = 'hello';
//     return element;
// }
// // console.log(test);
// document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept();
// }
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

import ChildCom from './com';
import storeCreator from './store.js';
const stores = storeCreator();

class App extends Component {

  getChildContext () {
     return { stores }
  }
  componentWillMount () {
    stores.dispatch({
      type: 'GOOD',
      payload: {
        name: '赵星'
      }
    })
  }

  render() {
    return (
      <div>
        你好，
        <ChildCom />
      </div>
    );
  }
}
App.childContextTypes = {
  stores: PropTypes.object
};
render(<App />, document.getElementById('root'));