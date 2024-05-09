import React from 'react'

export const Comp = (props) => {
    const {name, place, info} = props;
  return (
    <div className='comp'>
     <h1>{name}</h1>
     <h3>{place}</h3>
     <h4>{info}</h4>
    </div>
  )
}

export default Comp;