import { createStore } from "redux";
import counterReducer2 from "./service2/reducer/counterReducer";
// import counterReducer from "./services/reducer/counterReducer";

// export const store = createStore(counterReducer);
export const store2 = createStore(counterReducer2);