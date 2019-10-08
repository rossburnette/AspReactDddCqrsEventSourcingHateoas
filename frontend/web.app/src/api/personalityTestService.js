import * as apiClient from "./apiClient";
import { joinUrlWithRoute } from "../utils/urlUtils";

export function beginTest() {
    const url = joinUrlWithRoute(apiClient.BASE_PERSONALITY_TEST_URL, "begin");
    return apiClient.post(url, null);
}

export function getQuestions() {
    const url = joinUrlWithRoute(apiClient.BASE_PERSONALITY_TEST_URL, "????"); // TODO
    return apiClient.get(url);
}

