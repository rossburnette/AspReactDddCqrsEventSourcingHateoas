import React from "react";
import Background from '../../images/test/top-bg.jpg';
import Boy from '../../images/test/boy.png';
import SphereDevelopment from '../../images/test/what-is-your-sphere-of-development-2.jpg';
import Bottom from '../../images/test/bottom-bg.jpg';

const PersonalityTestPage = () => (
    <div className="total-wrap-content">
        <div className="template-top-section">
            <div className="bg-image" style={{backgroundImage: `url(${Background})`}}></div>
            <div className="main-wrap-content">
                <div className="template-top-grid anim-block">
                    <div className="image-item anim-elem left-visibility">
                        <div className="boy-image">
                            <img src={Boy} alt="boy" className="template-image"/>
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
                 style={{backgroundImage: `url(${SphereDevelopment})`}}></div>
            <div className="section-box center parallax-elem" data-val="-150" data-move="y">
                <div className="section-init-test-box anim-elem top">
                    <div className="section-init-test-txt">
                        <h2 className="title-big white">Какво те прави <strong>#различен?</strong></h2>
                        <p className="p-big white regular">Открий кои са твоите силни страни и какви позиции са
                            подходящи за теб.</p>
                        <div className="btn-box">
                            <a href="./personality-test/start" className="btn-mid btn-red ">ЗАПОЧНИ ТЕСТА</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="templete-bottom-section">
            <div className="bg-image" style={{backgroundImage: `url(${Bottom})`}}></div>
        </div>
    </div>
);

export default PersonalityTestPage;
