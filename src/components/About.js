import Comp from "./Comp";
import { Component } from "react";

// const About = () =>{
//     return(
//       <div className="aboutus">
//         <h1>About</h1>
//         <h3>This is a about page</h3>
//         <Comp name={"Singh Aman"} place={'Delhi'} info={'Yolooo'}/>
//       </div>
//     )
// }

class About extends Component{
  constructor(props){
    super(props);

   
  }
  
  componentDidMount(){
    
  }

  render(){
   
    return( 
      <div className="aboutus">
        <h1>About</h1>
        <h3>This is a about page</h3>
        <Comp/>
      </div>
    )
  }
}


export default About;