import React from "react";

import top from '../../images/test/top-bg.jpg';
import bottom from "../../images/test/bottom-bg.jpg";
import boy from "../../images/test/boy.png";
import first from "../../images/test/1.jpg";
import second from "../../images/test/2.jpg";

import fifth from "../../images/test/5.jpg";
import sixth from "../../images/test/6.jpg";

const PersonalityTestStartPage = ({questions}) => (
    <div className="total-wrap-content">
        <div className="template-top-section">
            <div className="bg-image" style={{backgroundImage: `url(${top})`}}></div>
            <div className="main-wrap-content">
                <div className="template-top-grid anim-block">
                    <div className="image-item anim-elem left-visibility">
                        <div className="boy-image">
                            <img src={boy} alt="boy" className="template-image"/>
                        </div>
                    </div>
                    <div className="content-item anim-elem top-visibility">
                        <div className="content-box">
                            <div className="content-box-inner">
                                <p>
                                    Открий твоите <br/><strong>#силни страни</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="section-test-layout anim-block">
            <div className="main-wrap-content anim-elem top delay-03">
                <div className="section-test-layout-box cf">
                    <div className="test-col">
                        <div className="section-test-layout-content">
                            <form action="./interview/get_results" method="POST" id="test">
                                <div className="cover-div"></div>
                                <div className="question active section-test-layout-question images-question">
                                    <div className="section-test-layout-title medium">Избери едно от двете твърдения,
                                        което в по-голяма степен се отнася за теб.
                                    </div>
                                    <div className="section-test-layout-answer cf">
                                        <div className="answer question-item-img">
                                            <h3 className="new-test-title">Действам</h3>
                                            <label className="container"> 0
                                                <input type="radio" data-answer="1" data-question="1" name="question-1"
                                                       value="action"/>
                                                <img src={first}
                                                     className="responsive question-item-bckg"/>
                                            </label>
                                        </div>
                                        <div className="answer question-item-img">
                                            <h3 className="new-test-title">Намирам решение</h3>
                                            <label className="container"> 1
                                                <input type="radio" data-answer="2" data-question="1" name="question-1"
                                                       value="process"/>
                                                <img src={second}
                                                     className="responsive question-item-bckg"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="question section-test-layout-question text-question">
                                    <div className="section-test-layout-title medium">Избери едно от двете твърдения,
                                        което в по-голяма степен се отнася за теб.
                                    </div>
                                    <div className="section-test-layout-answer cf">
                                        <div className="answer question-item-onlyText">
                                            <label className="container"> 2
                                                <input type="radio" data-answer="1" data-question="2" name="question-2"
                                                       value="people"/>
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
                                                <input type="radio" data-answer="2" data-question="2" name="question-2"
                                                       value="idea"/>
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

                                <div className="question section-test-layout-question images-question">
                                    <div className="section-test-layout-title medium">Избери едно от двете твърдения,
                                        което в по-голяма степен се отнася за теб.
                                    </div>
                                    <div className="section-test-layout-answer cf">
                                        <div className="answer question-item-img">4
                                            <h3 className="new-test-title">Мечтател съм</h3>
                                            <label className="container">
                                                <input type="radio" data-answer="1" data-question="3" name="question-3"
                                                       value="idea"/>
                                                <img src={fifth}
                                                     className="responsive question-item-bckg"/>
                                            </label>
                                        </div>
                                        <div className="answer question-item-img">
                                            <h3 className="new-test-title">Общителен съм</h3>
                                            <label className="container"> 5
                                                <input type="radio" data-answer="2" data-question="3" name="question-3"
                                                       value="people"/>
                                                <img src={sixth}
                                                     className="responsive question-item-bckg"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <p id="errorTest" className="error-field red"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default PersonalityTestStartPage;
