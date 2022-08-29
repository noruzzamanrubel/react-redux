import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((count) => count + 1)
    }
    return (
        <div>
            <h2>counter app</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increase</button>
        </div>

    )
}

export default Counter