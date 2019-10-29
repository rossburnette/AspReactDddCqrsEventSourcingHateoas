import * as ActionTypes from "../../actions/actionTypes";
import initialState from "../../initialState";

export function testReducer(state = initialState.testQuestions, action) {
    if (action.type === ActionTypes.LOAD_TEST_QUESTIONS_SUCCESS) {
        return action.testQuestions;
    } else {
        return state;
    }
}