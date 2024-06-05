import Comp from "./Comp";
import { Component } from "react";
import Compo from "./Compo";

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
    // console.log('Parent constructor')
    super(props);

   
  }
  
  async componentDidMount(){
    // console.log('Parent mounted')
  }

  render(){
    // console.log('Parent rendered')
    return( 
      <div className="aboutus">
        <h1>About</h1>
        <h3>This is a about page</h3>
        <Comp/>
        <Compo name='Aman singh'/>
      </div>
    )
  }
}


export default About;