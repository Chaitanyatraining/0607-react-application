import React from 'react'

function FuncComp(props) {
    // console.log(props)
  return (
    <div>
        <h2 className='text-primary'>CourseName : {props.courseName} and duration is {props.courseDuration} </h2>
    </div>
  )
}

export default FuncComp