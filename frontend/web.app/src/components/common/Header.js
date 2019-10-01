import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../../images/icons/young-logo.svg';

const Header = () => {
    return (
        <header id="header" className="header">
            <div className="header-wrap">
                <div className="mobile-menu-row">
                    <div className="mobile-logo-container">
                        <a href="./" className="mobile-logo-link">
                            <img src={logo} alt="logo" className="template-image"/>
                        </a>
                    </div>
                    <div className="mobile-menu-container">
                        <div className="mobile-menu-btn-wrap">
                            <button className="menu-btn" id="menu-btn">
                <span className="lines-wrap">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="header-box">
                    <div className="header-box-inner">
                        <nav className="nav">
                            <ul className="menu menu-left">
                                <li className="menu-item menu-anim-el">
                                    <NavLink to="/personality-test" className="menu-link lc ">
                                        Направи тест
                                    </NavLink>
                                </li>
                                <li className="menu-item menu-anim-el">
                                    <a href="./chatbot" className="menu-link lc ">RoboStar</a>
                                </li>
                                <li className="menu-item menu-anim-el">
                                    <a href="./about-us" className="menu-link ">За нас</a>
                                </li>
                            </ul>
                            <h1 className="logo">
                                <a className="logo-link desktop" href="./">
                                    <img src={logo} alt="Soge young logo"/>
                                </a>
                            </h1>
                            <ul className="menu menu-right">
                                <li className="menu-item menu-anim-el"><a href="./articles"
                                                                          className="menu-link "><strong>#Нещополезно</strong></a>
                                </li>
                                <li className="menu-item menu-anim-el"><a href="./careers"
                                                                          className="menu-link ">Обяви</a></li>
                                <li className="menu-item menu-anim-el"><a href="./contacts"
                                                                          className="menu-link ">Контакти</a></li>
                            </ul>
                        </nav>
                        <div className="login-container menu-anim-el">
                            <div className="login-container-inner">
                                <div className="login-btn-wrap">
                                    <a href="./users/login" className="login btn">Вход/регистрация</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;