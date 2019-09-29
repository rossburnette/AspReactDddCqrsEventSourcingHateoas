import React from 'react'
import scrollDown from '../../images/icons/scroll-down.svg'

import topFb from '../../images/icons/social/top-fb.svg'
import topFbHover from '../../images/icons/social/top-fb-hover.svg'
import topInstagram from '../../images/icons/social/top-instagram.svg'
import topInstagramHover from '../../images/icons/social/top-instagram-hover.svg'


import robot from '../../images/home/robot.png'
import boy from '../../images/home/boy.png'

const HomePage = () => {
  return (
    <div id="fullpage">

      <section className="section active">
        <div className="intro-section fh anim-block">

          <div className="section-box">
            <div className="intro-txt center">
              <div className="intro-title-wrap">
                <h2 className="title-large white anim-elem top-100">
                  ТИ си любопитен и различен? Срещни се с чат бот футуристичен. Стартирай кариерата си смело!
                </h2>
              </div>
              <p className="p-big white regular anim-elem top delay-02">
                # YoungSTARS е твоят пътеводител към успех в кариерата! Ще откриеш своите силни страни и ще се подготвиш
                за своето първо интервю за работа.
              </p>
              <div className="btn-box anim-elem top delay-02">
                <a href="chatbot" className="btn-big btn-red ">Научи повече</a>
              </div>
            </div>
            <div className="scroll-down-container anim-elem top delay-02">
              <a href="#test" className="scroll-down-btn" id="scroll-down-btn">
                                <span className="scroll-down-image">
							<img  src={scrollDown} alt="icon" className="template-image" />
						</span>
              </a>
            </div>
          </div>

          <div className="page-navigation">
            <a href="#home" className="line active anim-elem left"><span className="page-slide">1</span></a>
            <a href="#test" className="line anim-elem left"><span className="page-slide">2</span></a>
            <a href="#help" className="line anim-elem left"><span className="page-slide">3</span></a>
            <a href="#advice" className="line anim-elem left"><span className="page-slide">4</span></a>
          </div>
          <div className="social-links-top-container anim-elem bottom">
            <div className="social-item">
              <a href="https://facebook.com" className="top-social-link">
                                <span className="social-image-container fb">
							<img src={topFb} alt="icon" className="social-image" />
							<img src={topFbHover} alt="icon" className="social-image-hover" />
						</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://instagram.com" className="top-social-link">
                                <span className="social-image-container instagram">
							<img src={topInstagram} alt="icon" className="social-image" />
							<img src={topInstagramHover} alt="icon" className="social-image-hover" />
						</span>
              </a>
            </div>
            <div className="social-item">
              <a href="https://twitter.com" className="top-social-link">
                                <span className="social-image-container twitter">
						</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="intro-test-section fh anim-block">
          <div className="section-box">
            <div className="intro-test-txt center">
              <div className="intro-test-txt-box white-box center anim-elem top-visibility">
                <div className="addition-txt-box">
                  <span className="p-huge lightGrey addition-txt">РАЗБЕРИ</span>
                </div>
                <div className="wrap-txt">
                  <h3 className="title-big black">КАКВО ТЕ ПРАВИ <strong className="red">#РАЗЛИЧЕН</strong>?</h3>
                  <p className="p-small">
                    Открий твоите силни страни и ще получиш ориентация какви позиции са най-подходящи за теб.
                  </p>
                  <div className="curve-box">
                    <a href="personality-test" className="btn-big btn-gray">Направи теста</a>
                  </div>
                </div>
              </div>
              <div className="image-item anim-elem left-100">
                <div className="boy-image">
                  <img src={boy} alt="boy" className="template-image"/>
                </div>
              </div>
            </div>
          </div>

          <div className="page-navigation dark anim-block">
            <a href="#home" className="line anim-elem left"><span className="page-slide">1</span></a>
            <a href="#test" className="line active anim-elem left"><span className="page-slide">2</span></a>
            <a href="#help" className="line anim-elem left"><span className="page-slide">3</span></a>
            <a href="#advice" className="line anim-elem left"><span className="page-slide">4</span></a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="chat-bot-section fh anim-block">
          <div className="section-box">
            <div className="intro-test-txt center">
              <div className="image-item anim-elem top">
                <div className="robot-image">
                  <img src={robot} alt="robot" className="template-image" />
                </div>
              </div>
              <div className="intro-test-txt-box white-box center anim-elem top delay-02">
                <div className="addition-txt-box">
                  <span className="p-huge lightGrey addition-txt">ПИШИ МИ</span>
                </div>
                <div className="wrap-txt">
                  <h3 className="title-big black">Правил ли си #интервю с <strong className="red"> чат бот</strong>?</h3>
                  <p className="p-small">
                    Запознай се с #ROBOstar и направи интервю за работа, докато си чатиш. Така ще си добре подготвен за
                    реална среща с работодател
                  </p>
                  <div className="curve-box">
                    <a href="chatbot" className="btn-big btn-gray">Започни интервюто</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="page-navigation dark anim-block">
            <a href="#home" className="line anim-elem left"><span className="page-slide">1</span></a>
            <a href="test" className="line anim-elem left"><span className="page-slide">2</span></a>
            <a href="#help" className="line active anim-elem left"><span className="page-slide">3</span></a>
            <a href="#advice" className="line anim-elem left"><span className="page-slide">4</span></a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="advice-section fh anim-block">
          <div className="mobile-only advice-section-mob-img">
            <img className="responsive b-lazy" data-src-small="./images/home/advice-mobile-img.jpg"
                 data-src-mid="./images/home/advice-tablet-img.jpg" data-src-big="./images/home/advice-tablet-img.jpg"
                 src="./images/home/desktop-hidden-image.jpg" alt="Try our test image" />

          </div>
          <div className="section-box">
            <div className="advice-title-wrap anim-elem top">
              <h3 className="title-big white">
                <strong>#</strong>Съвети за <strong>интервю</strong>
              </h3>
            </div>
            <div className="advice-slider-container anim-elem top">
              <div className="advice-slider swiper-container slider-swipper" data-items="3" data-items-laptop="2"
                   data-items-mobile="1">
                <div className="swiper-wrapper">
                  <div className="advice-slide swiper-slide">
                    <div className="addition-txt-box">
                      <span className="p-huge lightGrey addition-txt">ПРОЧЕТИ</span>
                    </div>
                    <div className="advice-slide-inner">
                      <div className="advice-slide-content">
                        <div className="advice-slide-content-text">
                          <p>
                            Ангели на <strong className="red">иновациите <br/></strong>
                          </p>
                          <a href="./articles/angeli-na-inovatsiite" className="abs-item-link"></a>
                        </div>
                        <div className="item-btn-wrap">
                          <a href="./articles/angeli-na-inovatsiite" className="wave-btn">
                            <span className="wave-btn-text">КЪМ СТАТИЯТА</span>
                            <span className="wave"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="advice-slide swiper-slide">
                    <div className="addition-txt-box">
                      <span className="p-huge lightGrey addition-txt">ПРОЧЕТИ</span>
                    </div>
                    <div className="advice-slide-inner">
                      <div className="advice-slide-content">
                        <div className="advice-slide-content-text">
                          <p>
                            <strong className="red"><strong>Банка ДСК и Експресбанк</strong> </strong>с най-голямата клонова
                            мрежа в страната
                          </p>
                          <a href="./articles/banka-dsk-i-ekspresbank-s-nay-golyamata-klonova-mreja-v-stranata"
                             className="abs-item-link"></a>
                        </div>
                        <div className="item-btn-wrap">
                          <a href="./articles/banka-dsk-i-ekspresbank-s-nay-golyamata-klonova-mreja-v-stranata"
                             className="wave-btn">
                            <span className="wave-btn-text">КЪМ СТАТИЯТА</span>
                            <span className="wave"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="advice-slide swiper-slide">
                    <div className="addition-txt-box">
                      <span className="p-huge lightGrey addition-txt">ПРОЧЕТИ</span>
                    </div>
                    <div className="advice-slide-inner">
                      <div className="advice-slide-content">
                        <div className="advice-slide-content-text">
                          <p>
                            Проектът <strong className="red">#YOUNGstars стартира</strong>
                          </p>
                          <a href="./articles/angelite-na-inovatsiite" className="abs-item-link"></a>
                        </div>
                        <div className="item-btn-wrap">
                          <a href="./articles/angelite-na-inovatsiite" className="wave-btn">
                            <span className="wave-btn-text">КЪМ СТАТИЯТА</span>
                            <span className="wave"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination advice-slider-pagination"></div>

              </div>
            </div>
          </div>

          <div className="page-navigation anim-block">
            <a href="#home" className="line anim-elem left"><span className="page-slide">1</span></a>
            <a href="#test" className="line anim-elem left"><span className="page-slide">2</span></a>
            <a href="#help" className="line anim-elem left"><span className="page-slide">3</span></a>
            <a href="#advice" className="line active anim-elem left"><span className="page-slide">4</span></a>
          </div>
        </div>
      </section>

      <footer className="section fp-auto-height">
        <div className="footer">
          <div className="footer-box">
            <div className="footer-tools cf">
              <div className="scroll-top">
                <a href="#home" className="scroll-top-link scroll-top-btn" data-scroll="wrapper">Върни се в началото</a>
              </div>
              <div className="footer-content">
                <div className="footer-logo desktop">
                  <a href="index.php">
                    <img src="./images/icons/young-logo.svg?v=1" alt="Soge logo" />
                  </a>
                </div>
                <div className="footer-menu cf">
                  <ul className="footer-nav">
                    <li className="footer-item"><a href="./inteview" className="footer-link"><strong>Направи тест</strong></a>
                    </li>
                    <li className="footer-item"><a href="./chatbot" className="footer-link">RoboStar</a></li>
                    <li className="footer-item"><a href="./articles" className="footer-link"><strong>#НещоПолезно</strong></a>
                    </li>
                  </ul>
                  <ul className="footer-nav">
                    <li className="footer-item"><a href="./careers" className="footer-link">Обяви</a></li>
                    <li className="footer-item"><a href="./about-us" className="footer-link">За нас</a></li>
                    <li className="footer-item"><a href="./contacts" className="footer-link">Контакти</a></li>
                  </ul>
                </div>
                <div className="footer-login">
                  <a href="./users/login" className="login btn">Вход/регистрация</a>
                </div>
                <div className="footer-social">
                  <span className="share-with">Сподели в:</span>
                  <ul className="social-list">
                    <li className="social-item">
                      <a href="https://facebook.com" className="social-link social-icon fb" target="_blank"></a>
                    </li>
                    <li className="social-item">
                      <a href="https://instagram.com" className="social-link social-icon instagram" target="_blank"></a>
                    </li>
                    <li className="social-item">
                      <a href="https://twitter.com" className="social-link social-icon tw" target="_blank"></a>
                    </li>
                  </ul>
                </div>
                <div className="footer-logo mobile">
                  <a href="./">
                    {/*<img src="./images/icons/young-logo.svg?v=1" alt="Soge logo" />*/}
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-copy-right">
              <span className="copy-right">DSK Bank 2019. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
	);
};

export default HomePage;