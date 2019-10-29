import { combineReducers } from "redux";
import { testReducer as test } from "../reducers/test/testReducer";

const rootReducer = combineReducers({
    test
});

export default rootReducer;
