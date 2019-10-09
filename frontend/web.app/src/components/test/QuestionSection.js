import React from "react";

const QuestionSection = () => {
    return (
        <>
            <div className="question section-test-layout-question text-question">
                <div className="section-test-layout-title medium">Избери едно от двете твърдения, което в по-голяма
                    степен се отнася за теб.
                </div>
                <div className="section-test-layout-answer cf">
                    <div className="answer question-item-onlyText">
                        <label className="container"> 2
                            <input type="radio" data-answer="1" data-question="2" name="question-2" value="people"/>
                            <span className="only-text-content">
																		<span className="only-text-content-wrap">
																			<span className="checkmark"></span>
																			<span className="question-item-txt"><span>„Сговорна дружина планина повдига“</span></span>
																		</span>
																	</span>
                        </label>
                    </div>
                    <div className="answer question-item-onlyText">
                        <label className="container"> 3
                            <input type="radio" data-answer="2" data-question="2" name="question-2" value="idea"/>
                            <span className="only-text-content">
																		<span className="only-text-content-wrap">
																			<span className="checkmark"></span>
																			<span className="question-item-txt"><span>Често ми светва лампичката</span></span>
																		</span>
																	</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionSection;