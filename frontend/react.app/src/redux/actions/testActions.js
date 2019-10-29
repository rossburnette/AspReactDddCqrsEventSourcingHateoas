import * as ActionTypes from "./actionTypes";
import * as testApi from "../../api/testService";

export function loadTestQuestionsSuccess(testQuestions) {
    return {
        type: ActionTypes.LOAD_TEST_QUESTIONS_SUCCESS,
        testQuestions
    };
}

export function loadTestQuestions() {
    return function (dispatch) {
        return testApi
            .getQuestions()
            .then(value =>
                console.log(value)
            )
            .catch(err =>
                alert(err)
            );
    }
}