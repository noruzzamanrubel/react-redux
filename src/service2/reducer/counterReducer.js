import { DECREMENT2, INCREMENT2, RESET2 } from "../constant/counterConstant";

const counterState = {
    count: 0,
}
const counterReducer2 = (state = counterState, action) => {
    switch (action.type) {
        case INCREMENT2:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT2:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET2:
            return {
                ...state,
                count: 0
            }

        default:
            return state;
    }

}
export default counterReducer2;