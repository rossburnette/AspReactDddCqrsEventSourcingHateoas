import React from "react";

import aboutUs from '../../images/about-us/about-us.jpg';
import robot from '../../images/about-us/robot.png';
import people from '../../images/about-us/young-people-with-tablet.jpg';

import bottom from '../../images/test/bottom-bg.jpg';

const AboutPage = () => (
    <div className="total-wrap-content">
        <section className="abous-us-intro-section anim-block">
            <div className="section-box center anim-elem top-visibility">
                <div className="about-us-intro-section-box white-box center">
                    <div className="addition-txt-box">
                        <span className="p-huge lightGrey addition-txt">МИСИЯ</span>
                    </div>
                    <div className="wrap-txt">
                        <h3 className="title-big black"><strong>#</strong>За <strong className="red">нас</strong></h3>
                        <p className="p-small">
                            В Експресбанк ние помагаме <strong>над 500 000 клиенти</strong> да осъществят своите
                            финансови планове като се стремим да им предоставяме гъвкави, достъпни и качествени продукти
                            и услуги. За да изпълним тази мисия, ние разчитаме на нашите <strong>над 1500
                            служители</strong>, ценим индивидуалния принос на всеки един и <strong>инвестираме в
                            развитието на хората</strong>.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mobile-only intro-test-section-mob-img">
                <img className="responsive b-lazy"
                     data-src-small="/git/soge_young/images/about-us/about-us-mobile.jpg"
                     data-src-mid="/git/soge_young/images/about-us/about-us-tablet.jpg"
                     data-src-big={aboutUs}
                     data-src={aboutUs}
                     src="/git/soge_young/images/home/desktop-hidden-image.jpg" alt="About us image" />
            </div>
        </section>
        <section className="about-us-txt-section cl anim-block">
            <div className="about-us-txt-section-inner anim-elem">
                <div className="about-us-col col col-d-50 col-t-100 col-m-100 anim-elem top">
                    <div className="about-us-txt-box center">
                        <div className="wrap-txt">
                            <h3 className="title-big black"><strong>#</strong><strong
                                className="red">Инициативата</strong></h3>
                            <p className="p-small">
                                Проектът #YOUNGstars стартира като идея на група ентусиасти по време на състезанието
                                Open Innovation camp. Те имаха една основна цел &ndash;да намерят решение, което ще
                                помогне на младите хора в България да се реализират успешно.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-us-col col col-d-50 col-t-100 col-m-100 cl anim-elem top">
                    <div className="about-us-txt-box center">
                        <div className="wrap-txt">
                            <h3 className="title-big black"><strong>#</strong><strong className="red">Решението</strong>
                            </h3>
                            <p className="p-small">
                                Спомняйки си несигурността по време на първото си интервю за работа, нашите колеги
                                разработиха чат бот, който ти помага да се упражняваш за реална среща с работодател. Те
                                използваха също личностен тест, който разкрива твоите силни страни и те насочва какви
                                позиции са най-подходящи за теб.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-us-list-section flex cl anim-block">
            <div className="about-us-list-col about-us-col-img col col-d-50 col-t-100 col-m-100 anim-elem top">
                <div className="mobile-only intro-test-section-mob-img">
                    <img className="responsive b-lazy"
                         data-src-small="/git/soge_young/images/about-us/young-people-with-tablet-mobile.jpg"
                         data-src-big={people}
                         data-src-big={people}
                         data-src={people}
                         src="/git/soge_young/images/home/desktop-hidden-image.jpg "
                         alt="Young people with tablet image" />
                </div>
            </div>
            <div className="about-us-list-col-txt col col-d-50 col-t-100 col-m-100 anim-elem top">
                <div className="white-box center anim-elem top">
                    <div className="about-us-list-box center">
                        <div className="wrap-txt">
                            <ul className="list">
                                <ul className="list tmc-list">
                                    <li>Защото знаем, че всяко начало е трудно.</li>
                                    <li>И за да се реализираш успешно, е важно да си добре подготвен и уверен.</li>
                                    <li><strong>#YOUNGstars</strong> ти помага да откриеш своите силни страни и да се
                                        подготвиш за твоето първо интервю за работа.
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-us-robot-section cl  anim-block">
            <div className="about-us-col">
                <div className="about-us-txt-box center wider">
                    <div className="wrap-txt anim-elem top">
                        <h3 className="title-big black"><strong>#Защото знаем, че успехът е 10 % талант
                            и</strong><strong className="red"> 90 % практика </strong></h3>
                        <p className="p-small">
                            Стартирайте кариерата си смело, #YOUNGstars!
                        </p>
                    </div>
                </div>
            </div>
            <div className="robot-container">
                <div className="robot-image anim-elem right">
                    <img src={robot} alt="robot"
                         className="template-image anim-elem top" />
                </div>
                <div className="robot-image-mobile">
                    <img src={robot} alt="robot" className="template-image" />
                </div>
            </div>
        </section>
        <div className="templete-bottom-section">
            <div className="bg-image" style={{backgroundImage: `url(${bottom})`}}></div>
        </div>
    </div>
);

export default AboutPage;
