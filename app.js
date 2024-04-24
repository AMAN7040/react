import React from 'react'
import ReactDOM from 'react-dom/client'


const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id:'child'}, [
        React.createElement('h1', {id:'heading'}, "THIS IS THE HEADING 🤬"),
        React.createElement('p', {id:'para'}, 'THIS IS A PARAGRAPH abhi kya hi bol'),
      ]),
      React.createElement('div', {id:'child2'}, [
        React.createElement('h2', {id:'heading2'}, "THIS IS THE HEADING-2"),
        React.createElement('p', {id:'para2'}, 'THIS IS A PARAGRAPH-2'),
      ])
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)