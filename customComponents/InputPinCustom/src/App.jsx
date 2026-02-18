import { useState } from "react";
import { InputBox } from "./components/InputBox";

export const App = () => {
  const [value, setValue] = useState("");

  const style = {
    padding: "10px",
    margin: "5px",
    width: "40px",
    textAlign: "center",
    fontSize: "18px"
  };

  return (
    <>
      <InputBox
        setMainVal={setValue}
        perBox={1}
        length={4}
        style={style}
      />
      <h1>{value}</h1>
    </>
  );
};
