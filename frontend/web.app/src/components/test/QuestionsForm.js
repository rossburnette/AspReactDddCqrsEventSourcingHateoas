import React from "react";
import PropTypes from "prop-types";
import QuestionSection from "./QuestionSection";

const QuestionsForm = ({ questions }) => {
    return (
        <form action="./interview/get_results" method="POST" id="test">
            <div className="cover-div"></div>
            {questions.map(question => {
                }
            )}
        </form>
    )
};

QuestionsForm.prototype = {
    questions: PropTypes.object.isRequired
};

export default QuestionsForm;