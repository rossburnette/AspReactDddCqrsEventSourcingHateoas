import React from "react";
import robot from '../../images/career/robot.png';
import intro from '../../images/career/intro-bg.jpg';
import introRobo from '../../images/career/intro-robot.png';
import bubble from '../../images/career/bubble.png';
import bottom from "../../images/test/bottom-bg.jpg";

const ChatbotPage = () => (
    <div className="total-wrap-content">
        <div className="robot-intro-section">
            <div className="career-intro-section">
                <div className="bg-image" style={{backgroundImage: `url(${intro})`}}></div>
                <div className="career-main-wrap">
                    <div className="intro-box-outer anim-block">
                        <div className="intro-box anim-elem top-visibility">
                            <div className="intro-box-wrap">
                                <div className="intro-box-title-wrap">
                                    <h1 className="intro-title">Една <strong>#футуристична</strong> среща</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-categories-section">
                <div className="robot-grid">
                    <div className="career-main-wrap">
                        <div className="categories-grid anim-block	">
                            <div className="categories-image-item">
                                <div className="categories-robot anim-elem top delay-03">
                                    <img src={introRobo} alt="robot" className="template-image" />
                                        <div className="speech-bubble anim-elem	delay-09">
                                            <div className="speech-bubble-inner">
                                                <div className="speech-bubble-bg">
                                                    <img src={bubble} alt="bubble"
                                                         className="template-image" />
                                                </div>
                                                <div className="speech-bubble-text-wrap">
                                                    <span className="speech-bubble-text">Здравей!</span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="categories-container-item anim-elem	top">
                                <div className="categories-container-item-wrap">
                                    <div className="robot-text-item">
                                        <div className="robot-text-title-wrap">
                                            <h4 className="robot-text-title">
                                                Запознай се с #ROBOstar
                                            </h4>
                                        </div>
                                        <div className="robot-text-content">
                                            <p>
                                                Описва себе си като умен, чаровен и забавен. #RoboStar е чатбот, който
                                                провежда интервюта за работа. Разговорът с него ще те подготви за реална
                                                среща с работодател.
                                            </p>
                                        </div>
                                        <div className="robot-btn-wrap">
                                            <a href="" className="btn-mid btn-gray" id="start-chatbot"
                                               data-title="Бъди <strong>#искрен</strong>">ЗАПОЧНИ ИНТЕРВЮТО</a>
                                        </div>
                                    </div>
                                    <div className="chatbot-page" id="chatbot-page">
                                        <div className="soge-young-chatbot" data-url="./chatbot/save_results">
                                            <div className="soge-question">
                                                <div></div>
                                            </div>
                                            <div className="soge-answer"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="templete-bottom-section">
                <div className="bg-image" style={{backgroundImage: `url(${bottom})`}}></div>
            </div>

        </div>
    </div>
);

export default ChatbotPage;
