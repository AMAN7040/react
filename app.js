const parent = React.createElement('div', {id: 'parent'}, [
    React.createElement('div', {id:'child'}, [
        React.createElement('h1', {id:'heading'}, "THIS IS THE HEADING"),
        React.createElement('p', {id:'para'}, 'THIS IS A PARAGRAPH'),
      ]),
      React.createElement('div', {id:'secondchild'}, [
        React.createElement('h2', {id:'secondheading'}, "THIS IS THE HEADING-2"),
        React.createElement('p', {id:'secondpara'}, 'THIS IS A PARAGRAPH-2'),
      ])
]);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)