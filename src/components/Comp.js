import React, {Component, useEffect, useState} from 'react'


const Comp = () => {
  const [info, setInfo] = useState({});
  
  useEffect(()=>{
    //API CALL
    const fetchData = async () => {
      try{
        const data = await fetch('https://api.github.com/users/AMAN7040');
        const json = await data.json();
       setInfo(json)

      }catch(error){
        console.error('error fetching data', error);
      }
    };

    const timer = setInterval(()=>{
      console.log('Welcome Aman');
     },1000)
     console.log("useEffect called");
    // fetchData();
   
    return ()=>{
      clearInterval(timer);
      console.log('useEffect returned');
    };
    
  })

  console.log("render")

  const {login, avatar_url, followers} = info

    return (
            <div className='comp'>
              <img src={avatar_url}/>
             <h2>{login}</h2>
             <h3>{followers}</h3>
            </div>
          )
}

// class Comp extends Component{
//     constructor(props){
//       super(props); 
      
//       this.state= {
//         userInfo: {
//           name: 'default',
//           location: 'default'
//         } 
//       }
//       console.log('component constructor');
//     }
   
//     async componentDidMount(){
//       const data = await fetch('https://api.github.com/users/AMAN7040');
//       const json = await data.json();
//       console.log('component mounted');

//       this.timer = setInterval(()=>{
//         console.log('Hiee Aman');
//       },2000)

//       this.setState({
//         userInfo: json,
//       })
//     }   

//     componentDidUpdate(){
//       console.log('component updated');
//     }
//     componentWillUnmount(){
//       clearInterval(this.timer);
//       console.log('component unmounted');
//     }

//   render(){
//     const {login, followers, avatar_url} = this.state.userInfo;
//     return (
//             <div className='comp'>
//               <img src={avatar_url}/>
//              <h2>{login}</h2>
//              <h3>{followers}</h3>
//             </div>
//           )
//           console.log('component rendered');
//   }
// }

export default Comp;