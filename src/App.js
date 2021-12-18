import React, { Component } from 'react';
import Main from './containers/Main'
import store from './configureStore'
import { Provider } from 'react-redux'
import './App.css'

class App extends Component {
    render() {
            return (
                <Provider store={store}>
                    <div className="App">
                        <Main/>
                    </div>
                </Provider>
            );
    }
}

export default App;
