import * as ActionTypes from "./actionTypes";
import * as personalityTestApi from "../../api/personalityTestService";

export function beginTestSuccess(eventStream){
    return { type: ActionTypes.BEGIN_PERSONALITY_TEST_SUCCESS, eventStream };
}

export function beginTestFailure() {
  return { type: ActionTypes.BEGIN_PERSONALITY_TEST_FAILURE };
}

export function beginTest() {
  return function(dispatch) {
    return personalityTestApi
      .beginTest()
      .then(resource => {
        localStorage.setItem("answers_event_stream", resource.userAnswersEventStreamId);
        dispatch(beginTestSuccess(resource.userAnswersEventStreamId));
      })
      .catch(error => {
      alert(error);
        dispatch(beginTestFailure());
        throw error;
      });
  };
}

export function loadTestQuestionsSuccess(testQuestions){
    return { type: ActionTypes.LOAD_PERSONALITY_TEST_SUCCESS, testQuestions };
}

export function loadTestQuestions(){
    return function(dispatch){
        return personalityTestApi
            .getQuestions()
            .then(response =>{
                    dispatch(loadTestQuestionsSuccess(response.items));
                })
    }
}