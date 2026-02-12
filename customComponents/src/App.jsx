import { Button } from "./components/Button"
import { HomeButton } from "./components/HomeButton"
import { Sign_in_Button } from "./components/Sign_in_Button"


const App = () => {
  return (
    <>
    <h1>hello</h1>
    <HomeButton value={'home button'}/> <br/>
    <br/>
    <Sign_in_Button value={'Sign_in_Button'}/>
    <br/>
    <br/>
    <Button
      value={{
        name:'signUp',
        style:{
          padding: '.25 1rem',
                borderRadiust: '.4rem',
                border: '2px solid red',
                background: 'transparent',
        }
      }}
    />
      
    </>
  )
}

export default App
