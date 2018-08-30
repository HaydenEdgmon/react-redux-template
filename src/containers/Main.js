import React, { Component } from 'react'
import ExampleComponent from '../components/ExampleComponent'
import '../assets/Main.css'

class Main extends Component {
  render() {
    return (
      <div className="mainContainer">
        <ExampleComponent/>
      </div>
    );
  }
}

export default Main;
