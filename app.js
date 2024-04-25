import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './logo.png'
import icon from './icon.png'
import './index.css'
//React.createElement => Object => HTML element

// const heading = React.createElement('h1', {id:'heading'} , "HELOOO AMAN this is react course 🫥");

//JSX - is not HTML in JS but we can call it as HTML-like or XML-like syntax

// const jsxHeading = <h1 id="jsxHeading">HEADING USING JSX</h1>

// const Title = () =>  (
//     <h2>Title of this page</h2>
// )

// const name = 'Aman'

// //React Component          && also component composition - combining or nesting components 
// const HeadingComponent = () =>(
//      <div>
//         <h1>THIS IS FUNCTION COMPONENT</h1>
//        {name}
//        <Title/>
//        <Title></Title>
//        {Title()}
//     </div>
// )



// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(<HeadingComponent/>); 

//ASSIGNMENT

// Q. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

// const header = React.createElement('div',{class: 'title'},[
//     React.createElement('h1',{}, "THIS IS H1 TAG"),
//     React.createElement('h2',{}, "THIS IS H2 TAG"),
//     React.createElement('h3',{}, "THIS IS H3 TAG"),
// ]
// );

// Q. Create the same element using JSX

// const header = <div className='title'>
//                  <h1>THIS IS H! TAG</h1>
//                  <h2>THISIS H2 TAG</h2>
//                  <h3>THIS is H3 TAG</h3>
//               </div>

// Q. Create a functional component of the same with JSX

// const Header = () => (
//     <div className='title'>
//         <h1>THIS IS H! TAG</h1>
//      <h2>THISIS H2 TAG</h2>
//      <h3>THIS is H3 TAG</h3>
//     </div>
// )

// Q. Pass attributes into the tag in JSX
// const Header = () => (
//     <div className='title'>
//         <h1 id='head'>THIS IS H! TAG</h1>
//      <h2 id='head'>THISIS H2 TAG</h2>
//      <h3 id='head'>THIS is H3 TAG</h3>
//     </div>
// )

// Q. Composition of Component(Add a component inside another)
// const Para = () => (<p>THIS IS A PARAGRAPH</p>)

// const Header = () => (
//     <div className='title'>
//      <h1 id='head'>THIS IS H! TAG</h1>
//      <h2 id='head'>THISIS H2 TAG</h2>
//      <h3 id='head'>THIS is H3 TAG</h3>
//      <Para/>
//     </div>
// )

// Q {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

// const element = <p>this is for a variable</p>
// const TitleElement = () => <p>This is a paragraph</p>

// const Header = () => (
//     <div className='title'>
//         <h1>THIS IS H1 TAG</h1>
//         {element}
//         <h2>THIS IS H2 TAG</h2>
//         {<TitleElement/>}
//         <h3>THIS IS A H3 TAG</h3>
//         {<TitleElement></TitleElement>}
//     </div>
// )

// q Create a Header Component from scratch using Functional Components with JSX

const Header = () => (
    <div id='container'>
        <header className='header'>
            <div className='logo'>
                <img className="img" src={logo} alt="logo img"/>
            </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            SEARCH
          </button>
        </div>
        <div className="right">
          <img className="img" src={icon} alt="logo img"/>
        </div>
        </header>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Header/>);