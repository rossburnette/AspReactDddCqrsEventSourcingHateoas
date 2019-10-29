import * as apiClient from "./apiClient";
import { joinUrlWithRoute } from "../utils/urlUtils";

export function getQuestions() {
    const url = joinUrlWithRoute(apiClient.BASE_TEST_URL, "structured");
    return apiClient.get(url);
}