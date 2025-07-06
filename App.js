import React from 'react';
import ReactDOM from 'react-dom/client';
const parent = React.createElement('div', {id:'parent'}, [
        React.createElement('div', {id: 'child'}, [
            React.createElement('h1', {id:'heading'}, 'I am h1 tag'), 
            React.createElement('h2', {id: 'h2'}, 'Namaste React!!')
        ]),
    React.createElement('div', {id: 'child2'}, [
            React.createElement('h1', {id:'heading'}, 'Namaste React!'), 
            React.createElement('h2', {id: 'h2'}, 'I am h2 tag')
        ])   
    ]);

// const heading = React.createElement(
//     'h1', 
//     {id:'heading'}, 
//     'Hello World from React!'
// );
console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);