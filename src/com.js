import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class ChildCom extends Component {
  constructor(props) {
    super(props);
    // console.log(this)    
  }
  componentWillMount() {
    const { stores } = this.context;
    this.updateData();
    stores.subscribe(() => { this.updateData() });
  }

  updateData = () => {
    const { stores } = this.context;
    const state = stores.getState();
    console.log('======');
    console.log(state);
    console.log('======');
    this.setState({name: state.message.name})
  }
  doDispatch = () => {
    const { stores } = this.context;
    stores.dispatch({
      type: 'CHANGE',
      payload: {
        name: '少年'
      }
    });
    
    console.log('name', stores.getState());
  }
  render(){
    return (
      <div>
        <div>{this.state.name}</div>
        <button onClick={this.doDispatch}>dispatch</button>
      </div>
    )
  }
}
ChildCom.contextTypes = {
  stores: PropTypes.object
};
export default ChildCom;