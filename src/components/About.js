import Comp from "./Comp";

const About = () =>{
    return(
      <div className="aboutus">
        <h1>About</h1>
        <h3>This is a about page</h3>
        <Comp name={"Singh Aman"} place={'Delhi'} info={'Yolooo'}/>
      </div>
    )
}

export default About;