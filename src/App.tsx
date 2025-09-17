import {atom} from "jotai"

import HomePage from "./pages/HomePage";


export const counter = atom(false); 

function App() {
  
  return (
    <>
     <HomePage/>
    </>
  )
}

export default App
