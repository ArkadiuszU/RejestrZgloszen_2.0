import {atom} from "jotai"

import {CounterContainer} from "../components/containers/CounterContainer";


export const counter = atom(false); 

function HomePage() {
  
  return (
    <div className="bg-light_gray p-10" >
      <CounterContainer/>
    </div>
    
  )
}

export default  HomePage

