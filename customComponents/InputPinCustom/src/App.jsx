import { useState } from "react"
import { InputBox } from "./components/inputBox"

export const App = () => {
  const [value,setValue] = useState("");

  const style = {
    padding:"10px",
    margin:"5px",
    Width:"15px"
  }
  return (
    <>
   <InputBox length={4} style={style}/>
      
    </>
  )
}

