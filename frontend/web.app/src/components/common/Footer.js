import React from "react";

import logo from '../../images/icons/young-logo.svg'

const Footer = () => (
    <footer className="section fp-auto-height">
        <div className="footer">
            <div className="footer-box">
                <div className="footer-tools cf">
                    <div className="scroll-top">
                        <a href="#home" className="scroll-top-link scroll-top-btn" data-scroll="wrapper">
                            Върни се в
                            началото
                        </a>
                    </div>
                    <div className="footer-content">
                        <div className="footer-logo desktop">
                            <a href="index.php">
                                <img src={logo} alt="Soge logo"/>
                            </a>
                        </div>
                        <div className="footer-menu cf">
                            <ul className="footer-nav">
                                <li className="footer-item"><a href="./inteview" className="footer-link"><strong>Направи
                                    тест</strong></a></li>
                                <li className="footer-item"><a href="./chatbot" className="footer-link">RoboStar</a>
                                </li>
                                <li className="footer-item"><a href="./articles"
                                                               className="footer-link"><strong>#НещоПолезно</strong></a>
                                </li>
                            </ul>
                            <ul className="footer-nav">
                                <li className="footer-item"><a href="./careers" className="footer-link">Обяви</a></li>
                                <li className="footer-item"><a href="./about-us" className="footer-link">За нас</a></li>
                                <li className="footer-item"><a href="./contacts" className="footer-link">Контакти</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-login">
                            <a href="./users/login" className="login btn">Вход/регистрация</a>
                        </div>
                        <div className="footer-social">
                            <span className="share-with">Сподели в:</span>
                            <ul className="social-list">
                                <li className="social-item">
                                    <a href="https://facebook.com"
                                       className="social-link social-icon fb"
                                       target="_blank"></a></li>
                                <li className="social-item"><a href="https://instagram.com"
                                                               className="social-link social-icon instagram"
                                                               target="_blank"></a></li>
                                <li className="social-item"><a href="https://twitter.com"
                                                               className="social-link social-icon tw"
                                                               target="_blank"></a></li>
                            </ul>
                        </div>
                        <div className="footer-logo mobile">
                            <a href="./">
                                <img src={logo} alt="Soge logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-copy-right">
                    <span className="copy-right">All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
