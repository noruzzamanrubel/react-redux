import { DECREMENT2, INCREMENT2, RESET2 } from "../constant/counterConstant"

export const incementCounter2 = () => {
    return {
        type: INCREMENT2
    }
}
export const decementCounter2 = () => {
    return {
        type: DECREMENT2
    }
}
export const resetCounter2 = () => {
    return {
        type: RESET2
    }
}