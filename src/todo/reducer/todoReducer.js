import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "../constant/todoConstants";

const initialState = {
    isloading: false,
    todos: [],
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODO_REQUEST:
            return {
                ...state,
                isloading: true
            }
        case GET_TODO_SUCCESS:
            return {
                isloading: false,
                todos: action.payload,
                error: null
            }
        case GET_TODO_FAILED:
            return {
                isloading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}