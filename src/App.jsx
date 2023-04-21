import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, selectCount } from "./features/counter/counterSlice"

function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  const incrementValue = Number(incrementAmount) || 0;
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="number" onChange={(e) => setIncrementAmount(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(incrementValue))}>Increment by amount</button>
    </>
  )
}

export default App
