import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { DECREMENT, INCREMENT, RESET } from '../constants/counterConstant'

export const incementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decementCounter = () => {
    return {
        type: DECREMENT
    }
}

export const resetCounter = () => {
    return {
        type: RESET
    }
}