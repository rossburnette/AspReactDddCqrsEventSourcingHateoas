import * as ActionTypes from "../actions/actionTypes";
import * as questionsApi from "../../api/personalityTestService";

export function loadTestQuestionsSuccess(testQuestions) {
    return { type: ActionTypes.LOAD_TEST_QUESTIONS_SUCCESS, testQuestions };
}

export function loadQuestions() {
    return function(dispatch) {
        return questionsApi
            .getQuestions()
            .then(response =>{
               dispatch(loadTestQuestionsSuccess(response.testQuestions));
            });
    };
}