import React, { Component } from 'react';
import ReactDom from 'react-dom';
import UserContextProvider from './components/UserContextProvider';
import Finderr from './Finderr';

class App extends Component {
    render() {
        return (
            <UserContextProvider>
                <Finderr />
            </UserContextProvider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));