import React, { Component } from 'react';
import { connect } from 'react-redux'
import {changeReducerText} from '../actions/MainActions'
import '../assets/ExampleComponent.css';

class ExampleComponent extends Component {
    changeText = (passedText) => {
        const {dispatch} = this.props
        dispatch(changeReducerText(passedText))
    }
    render() {
      const {MainReducer} = this.props
      console.log(MainReducer)
    return (
      <div className="exampleComponent">
        This is an example comonent. Add more elements or components to build your app!
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { MainReducer } = state
    console.log(MainReducer)
    return {
        MainReducer
    }
}

export default connect(mapStateToProps)(ExampleComponent);
