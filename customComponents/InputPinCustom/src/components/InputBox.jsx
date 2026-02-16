import { useState } from "react"
import PropTypes from 'prop-types'
import { PinItem } from "./pinItem"


export const InputBox = ({length,style}) => {

    const [values,setValues]=useState(new Array(length).fill(0))

  return (
    <>
    {values.map((items, indes) => <PinItem style={style} key={index} />)}  
    </>
  )
}

InputBox.prototypes= {
    label:PropTypes.string.isRequired
}

InputBox.defaultProps = {
    label:"hello"
}

