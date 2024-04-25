import React from 'react'
import ReactDOM from 'react-dom/client'

//React.createElement => Object => HTML element

// const heading = React.createElement('h1', {id:'heading'} , "HELOOO AMAN this is react course 🫥");

//JSX - is not HTML in JS but we can call it as HTML-like or XML-like syntax

// const jsxHeading = <h1 id="jsxHeading">HEADING USING JSX</h1>

const Title = () => (
    <h2>Title of this page</h2>
)

//React Component          && also component composition - combining or nesting components 
const HeadingComponent = () =>(
     <div>
        <h1>THIS IS FUNCTION COMPONENT</h1>
     <Title/>
    </div>
)



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>); 