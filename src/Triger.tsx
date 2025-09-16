import {atom, useAtom} from "jotai"
import './App.css'

import {counter} from './App'

function Triger() {
  const [_, setCount] = useAtom(counter)

  return (
    <>
        <div onClick = {_ =>setCount(prev => !prev)} className="text-my_red">  Click on the Vite and React logos to learn more </div>
    </>
  )
}

export default Triger
