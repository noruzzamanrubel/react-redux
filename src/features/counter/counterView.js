import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter View</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}>Increase</button>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrease</button>
            <button onClick={() => {
                dispatch(reset())
            }}>Reset</button>
        </div>
    )
}

export default CounterView