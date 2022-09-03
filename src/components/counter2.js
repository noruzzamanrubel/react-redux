import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decementCounter2, incementCounter2, resetCounter2 } from '../service2/action/counterAction';

const Counter2 = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleincrement = () => {
        dispatch(incementCounter2())
    }
    const handledecrement = () => {
        dispatch(decementCounter2())
    }
    const handlereset = () => {
        dispatch(resetCounter2())
    }
    return (
        <div>
            <h2>Counter app</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleincrement}>Increase</button>
            <button onClick={handledecrement}>Decrease</button>
            <button onClick={handlereset}>Reset</button>
        </div>

    )
}

export default Counter2