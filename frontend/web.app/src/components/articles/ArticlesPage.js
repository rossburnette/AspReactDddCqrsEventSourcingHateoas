import React from "react";

import intro from '../../images/career/intro-bg.jpg';

const ArticlesPage = () => (
    <div className="total-wrap-content">
        <div className="news-list-top-section">
            <div className="career-intro-section anim-block">
                <div className="bg-image" style={{backgroundImage: `url(${intro})`}}></div>
                <div className="career-main-wrap">
                    <div className="intro-box anim-elem top-visibility">
                        <div className="intro-box-wrap">
                            <div className="intro-box-title-wrap">
                                <h1 className="intro-title"><strong>#</strong>НещоПолезно</h1>
                            </div>
                            <p className="p-small">
                                Открий полезна информация за твоята кариера
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="news-list-section">
            <div className="news-item anim-block">
                <a href="./articles/banka-dsk-i-ekspresbank-s-nay-golyamata-klonova-mreja-v-stranata"
                   className="news-item-box cf flex">
                    <div className="col col-d-50 col-t-50 col-m-100 news-image-box anim-elem top">
                    </div>
                    <div className="col col-d-50 col-t-50 col-m-100 news-item-txt-box anim-elem	bottom">
                        <div className="news-item-txt white-box center transparent">
                            <div className="addition-txt-box">
                                <span className="p-huge darkGrey addition-txt">Прочети</span>
                            </div>
                            <div className="wrap-txt">
                                <h3 className="p-large medium black"><strong className="red"><strong>Банка ДСК и
                                    Експресбанк</strong> </strong>с най-голямата клонова мрежа в страната</h3>
                                <div className="item-btn-wrap">
								<span className="wave-btn">
									<span className="wave-btn-text">КЪМ СТАТИЯТА</span>
									<span className="wave"></span>
								</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="news-item anim-block">
                <a href="./articles/angelite-na-inovatsiite" className="news-item-box cf flex">
                    <div className="col col-d-50 col-t-50 col-m-100 news-image-box anim-elem top">
                    </div>
                    <div className="col col-d-50 col-t-50 col-m-100 news-item-txt-box anim-elem	bottom">
                        <div className="news-item-txt white-box center transparent">
                            <div className="addition-txt-box">
                                <span className="p-huge darkGrey addition-txt">Прочети</span>
                            </div>
                            <div className="wrap-txt">
                                <h3 className="p-large medium black">Проектът <strong className="red">#YOUNGstars
                                    стартира</strong></h3>
                                <div className="item-btn-wrap">
								<span className="wave-btn">
									<span className="wave-btn-text">КЪМ СТАТИЯТА</span>
									<span className="wave"></span>
								</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="news-item anim-block">
                <a href="./articles/angeli-na-inovatsiite" className="news-item-box cf flex">
                    <div className="col col-d-50 col-t-50 col-m-100 news-image-box anim-elem top">
                    </div>
                    <div className="col col-d-50 col-t-50 col-m-100 news-item-txt-box anim-elem	bottom">
                        <div className="news-item-txt white-box center transparent">
                            <div className="addition-txt-box">
                                <span className="p-huge darkGrey addition-txt">Прочети</span>
                            </div>
                            <div className="wrap-txt">
                                <h3 className="p-large medium black">Ангели на <strong className="red">иновациите <br/></strong>
                                </h3>
                                <div className="item-btn-wrap">
								<span className="wave-btn">
									<span className="wave-btn-text">КЪМ СТАТИЯТА</span>
									<span className="wave"></span>
								</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>

    </div>
);

export default ArticlesPage;
