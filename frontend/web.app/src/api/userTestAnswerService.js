import * as apiClient from "./apiClient";
import { joinUrlWithRoute } from "../utils/urlUtils";

export function registerUserAnswer (userAnswer) {
    const url = joinUrlWithRoute(apiClient.BASE_PERSONALITY_TEST_URL, "user-answer");
    return apiClient.post(url, userAnswer);
}