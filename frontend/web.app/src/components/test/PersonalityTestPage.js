import React from "react";

import top from '../../images/test/top-bg.jpg';
import bottom from "../../images/test/bottom-bg.jpg";
import boy from "../../images/test/boy.png"
import makeYou from "../../images/test/what-is-your-sphere-of-development-2.jpg";

const PersonalityTestPage = () => (
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
        <section className="section-init-test anim-block">
            <div className="bg-image"
                 style={{backgroundImage: `url(${makeYou})`}}></div>
            <div className="section-box center parallax-elem" data-val="-150" data-move="y">
                <div className="section-init-test-box anim-elem top">
                    <div className="section-init-test-txt">
                        <h2 className="title-big white">Какво те прави <strong>#различен?</strong></h2>
                        <p className="p-big white regular">Открий кои са твоите силни страни и какви позиции са
                            подходящи за теб.</p>
                        <div className="btn-box">
                            <a href="./begin" className="btn-mid btn-red " >ЗАПОЧНИ ТЕСТА</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="templete-bottom-section">
            <div className="bg-image" style={{backgroundImage: `url(${bottom})`}}></div>
        </div>
    </div>
);

export default PersonalityTestPage;
