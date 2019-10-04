export const  BEGIN_PERSONALITY_TEST_SUCCESS = "BEGIN_PERSONALITY_TEST_SUCCESS";
export const BEGIN_PERSONALITY_TEST_FAILURE = "BEGIN_PERSONALITY_TEST_FAILURE";
export const LOAD_PERSONALITY_TEST_SUCCESS = "LOAD_PERSONALITY_TEST_SUCCESS";

export const CALCULATE_USER_RESULT_SUCCESS = "CALCULATE_USER_RESULT_SUCCESS";

export const SUBMIT_NECESSARY_USER_DATA_SUCCESS="SUBMIT_NECESSARY_USER_DATA_SUCCESS";

export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";

// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic submit, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the submit request begins.
export const SUBMIT_USER_ANSWER_OPTIMISTIC = "SUBMIT_USER_ANSWER_OPTIMISTIC";