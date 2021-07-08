import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
// var React = require('react');

/*function App(){
    return(
        <div>
            <Header/>
            <h1>Hii to React App</h1>
            <h2>My App</h2>
        </div> 
    )
}*/
const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii to React App</h1>
            <h2>My App</h2>
        </div>
    )
}

// here connected with index.html
ReactDOM.render(<App/>,document.getElementById('root'));