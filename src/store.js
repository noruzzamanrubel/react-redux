import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./todo/reducer/todoReducer";
// import counterReducer2 from "./service2/reducer/counterReducer";
// import counterReducer from "./services/reducer/counterReducer";

export const store = createStore(todosReducer, applyMiddleware(thunk));
// export const store2 = createStore(counterReducer2);