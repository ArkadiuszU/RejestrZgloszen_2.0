import {atom, useAtom} from "jotai"
import './App.css'
import ValueView from "./ValueView";
import Triger from "./Triger";

export const counter = atom(false); 

function App() {
  
  return (
    <>
      <ValueView/>
      <Triger/>
    </>
  )
}

export default App
