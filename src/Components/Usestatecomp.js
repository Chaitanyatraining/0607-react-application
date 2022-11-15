import React, { useEffect, useState } from 'react'

function Usestatecomp() {
    const [count,setCount] = useState(0);
   
    const increment= ()=>{
        setCount(count+1);
    }
    const decrement= ()=>{
        setCount(count-1);
    }

    useEffect(()=>{
        //componentdidMount and componentdidUpdate
        return 
    },[])


  return (
    <div>
        <h2>Usestatecomp</h2>
        <h2>Counter : {count}</h2>
        <button className='btn btn-primary me-3' onClick={increment}>Increment</button>
        <button className='btn btn-danger' onClick={decrement}>decrement</button>
    </div>
  )
}

export default Usestatecomp