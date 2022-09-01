import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decementCounter, incementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(incementCounter());
    }
    const handledecrement = () => {
        dispatch(decementCounter());
    }
    const handleReset = () => {
        dispatch(resetCounter());
    }
    return (
        <div>
            <h2>counter app</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrement}>Increase</button>
            <button onClick={handledecrement}>decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>

    )
}

export default Counter