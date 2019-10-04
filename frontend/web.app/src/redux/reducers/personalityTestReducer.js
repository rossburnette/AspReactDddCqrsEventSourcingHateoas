import * as ActionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function personalityTestReducer(state = initialState.personalityTest, action) {
    switch (action.type) {
        case ActionTypes.BEGIN_PERSONALITY_TEST_SUCCESS:
            return { ...state, eventStreamIds: action.eventStream, testQuestions: [] };
        case ActionTypes.BEGIN_PERSONALITY_TEST_FAILURE:
            return {...state, eventStreamIds: [], testQuestions: []}
        case ActionTypes.LOAD_PERSONALITY_TEST_SUCCESS:
            return {
                ...state,
                eventStreamId: localStorage.getItem("answers_event_stream"),
                testQuestions: action.testQuestions };
        default:
            return state;
    }
}

