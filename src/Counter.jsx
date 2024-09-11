// import useState() hook
import { useState } from 'react'
import "./Counter.css"

function Counter() {

    // useState() hook
    let [count, setCount] = useState(3)

    const addValue = () => {
        if (count < 20) {
            // setCount(count+1)

            // OR

            setCount((prevCount) => {
                return prevCount + 1
            })
        }
    }

    const subValue = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <h1>Counter  Variable</h1>
            <p>counter between [0, 20]</p>
            <h2>Count = {count}</h2>
            <h2>Count = {count}</h2>
            <button onClick={addValue}>Increment</button>
            <br />
            <button onClick={subValue}>Decrement</button>
        </>
    )
}

export default Counter
