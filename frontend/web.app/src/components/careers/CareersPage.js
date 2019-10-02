import React from "react";

import bottom from '../../images/test/bottom-bg.jpg';
import robot from '../../images/career/robot.png';
import intro from '../../images/career/intro-bg.jpg';

const CareersPage = () => (
    <div className="total-wrap-content">
        <div className="career-intro-section anim-block">
            <div className="bg-image" style={{backgroundImage: `url(${intro})`}}></div>
            <div className="career-main-wrap">
                <div className="intro-box anim-elem top-visibility">
                    <div className="intro-box-wrap">
                        <div className="intro-box-title-wrap">
                            <h1 className="intro-title">Стартирай кариерата си #смело</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="career-categories-section">
            <div className="career-categories-top anim-block" id="career-categories-top">
                <div className="career-main-wrap">
                    <div className="categories-title-wrap anim-elem top">
                        <h4 className="categories-title">
                            Виж кариерните <strong>#възможности</strong> в XXX
                        </h4>
                        <h6 className="categories-sub-title">Разгледай категориите.</h6>
                    </div>
                    <div className="categories-grid">
                        <div className="categories-image-item anim-elem top">
                            <div className="categories-robot">
                                <img src={robot} alt="robot" className="template-image" />
                            </div>
                        </div>
                        <div className="categories-container-item anim-elem top">
                            <div className="categories-container-item-wrap">
                                <div className="categories-list-container">
                                    <ul className="categories-list">
                                        <li className="categories-list-item active"
                                            data-content="./careers/filter_category/id:1">
                                        <span className="list-item-text">
                                            Банкиране на дребно и търговска мрежа
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:2">
                                        <span className="list-item-text">
                                            Комуникации, маркетинг и дигитално банкиране
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:3">
                                        <span className="list-item-text">
                                            Информационни технологии
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:4">
                                        <span className="list-item-text">
                                            Управление на риска
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:5">
                                        <span className="list-item-text">
                                            Право и нормативно съответствие
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:6">
                                        <span className="list-item-text">
                                            Бек офис, организация и администрация
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:7">
                                        <span className="list-item-text">
                                            Корпоративно банкиране
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:8">
                                        <span className="list-item-text">
                                            Финанси и счетоводство
                                        </span>
                                        </li>
                                        <li className="categories-list-item "
                                            data-content="./careers/filter_category/id:9">
                                        <span className="list-item-text">
                                            Други
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="arrows-container">
                                    <div className="up-arrow-container">
                                        <button className="up-arrow"></button>
                                    </div>
                                    <div className="down-arrow-container">
                                        <button className="down-arrow"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="career-categories-bottom anim-block">
                <div className="career-main-wrap">
                    <div className="available-positions-container" id="available-positions-container">
                    </div>
                    <div className="item-btn-wrap anim-elem top">
                        <button className="wave-btn scroll-top-btn" data-scroll="career-categories-top">
                            <span className="wave-btn-text">ВЪРНИ СЕ КЪМ КАТЕГОРИИТЕ</span>
                            <span className="wave"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="templete-bottom-section">
            <div className="bg-image" style={{backgroundImage: `url(${bottom})`}}></div>
        </div>
    </div>
);

export default CareersPage;
