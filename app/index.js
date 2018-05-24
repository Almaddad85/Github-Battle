var React = require('react');// this one to call react module
var ReactDOM = require('react-dom');// this one to call reactDOM module
require('./index.css');// this is to include css file in our project

var App = require('./components/App')


//render our component using ReactDOM:
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

