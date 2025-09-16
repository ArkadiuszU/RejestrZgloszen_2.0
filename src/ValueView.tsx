import {atom, useAtom} from "jotai"
import './App.css'

import {counter} from './App'

function ValueView() {
  const [count] = useAtom(counter)

  return (
    <>
        <p className={count?"text-my_green":"text-my_red"}>  Click on the Vite and React logos to learn more </p>
    </>
  )
}

export default ValueView
