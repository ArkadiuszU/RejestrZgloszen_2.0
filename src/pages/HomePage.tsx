import {atom} from "jotai"

import {CounterContainer} from "../components/containers/CounterContainer";


export const counter = atom(false); 

function HomePage() {
  
  return (
    <div className="w-screen h-screen bg-light_gray" >
      <CounterContainer/>
    </div>
    
  )
}

export default  HomePage

