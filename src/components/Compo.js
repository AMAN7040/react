import React, {Component} from 'react'

class Compo extends Component{
    constructor(props){
        // console.log('component 2 constructor');
        super(props);

        this.state = {
          count: 0,
          text:'',
        };
    }

    handleClick = () =>{
        this.setState((prev)=>({
            count: prev.count + 1,
        }));
    }

    handleText = () =>{
        this.setState((prev)=>({
            text: event.target.value,
        }))
    }

    componentDidMount(){
        // console.log("Component 2 mounted")
    }


    render(){
        // console.log('Component 2 rendered')
        const{name} = this.props;
        const {count,text} = this.state;
        return(
            <div>
             <h4>{name}</h4>
             <p>{text}</p>
             <input type='text' value={text} onChange={this.handleText}/>
             <p>count: {count}</p>
             <button onClick={this.handleClick}>CLICK ME</button>
            </div>
        )
    }
}

export default Compo