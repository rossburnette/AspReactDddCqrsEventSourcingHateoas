import * as ActionTypes from "../../actions/actionTypes";
import initialState from "../../initialState";

export function testReducer(state = initialState.testQuestions, action) {
    switch (action.type) {
        case ActionTypes.LOAD_TEST_QUESTIONS_SUCCESS:
            return action.testQuestions;
        case ActionTypes.LOAD_TEST_QUESTIONS_FAILURE:
                return state;
        default:
            return state;
    }
}