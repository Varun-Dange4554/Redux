import React from 'react'

const Card = ({name}) => {
    const  clicked =  () => {
        return (
        console.log("button clicked")
    )
    }
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={clicked}>click</button>
    </div>
  )
}

export default Card
