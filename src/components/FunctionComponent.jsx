import React, {useState} from 'react'

const FunctionComponent = () => {
    const [number,setNumber] = useState(0);
    const decrease =()=>{ setNumber(number-10)}
    const increase =()=>{ setNumber(number +20)}
  return (
    <div>
      <h1>Counter App</h1>
      <h1>Counter:{number}</h1>
      <button onMouseEnter={(increase)}>Increment </button>
      <button onClick={(decrease)}>Drecrement</button>
    </div>
  )
}

export default FunctionComponent
