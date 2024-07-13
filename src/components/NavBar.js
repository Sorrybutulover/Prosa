import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/nav.css';
import border from '../images/menu-border.png';
import { useState, useEffect } from 'react';

import { Icon24LogoVk } from '@vkontakte/icons';
import { Icon24Location } from '@vkontakte/icons';

function NavBar() {
  const location = useLocation();
  const isStart = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isContact = location.pathname === '/comand';
  const isProducts = location.pathname === '/products';
  const isLisenses = location.pathname === '/blog';

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  let prevScrollpos = window.scrollY;

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("scroll-header").style.top = "0";
      document.getElementById("navbar").style.top = "45px";
    } else {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("scroll-header").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
  };

  // Определение состояний
  const [isAuth1, setIsAuth] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trackerId, setTrackerId] = useState('');
  const [meetId, setMeetId] = useState('');
  const [isDataEntered, setIsDataEntered] = useState(false);

  // Обработчик клика по ссылке "Авторизация"
  const handleAuthClick = (e) => {
    e.preventDefault(); // Предотвращает переход по ссылке
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Обработчик закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false); // Закрывает модальное окно
  };

  // Обработчик изменения данных
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  // Обработчик логина
  const handleLogin = () => {
    // Сохраняет введенные данные в локальное хранилище
    localStorage.setItem('trackerId', trackerId);
    localStorage.setItem('meetId', meetId);
    setIsModalOpen(false); // Закрывает модальное окно
    // Проверяет, введены ли данные
    if (trackerId || meetId) {
      setIsDataEntered(true);
    } else {
      setIsDataEntered(false);
    }
  };

  // Проверка наличия данных в локальном хранилище при монтировании компонента
  useEffect(() => {
    const storedTrackerId = localStorage.getItem('trackerId');
    const storedMeetId = localStorage.getItem('meetId');
    if (storedTrackerId && storedMeetId) {
      setTrackerId(storedTrackerId);
      setMeetId(storedMeetId);
      setIsDataEntered(true);
    }
  }, []);

  return (
    <>
      <header className="header" id="scroll-header">
        <div className="hiden-header" id="hiden-header">
          <ul className="header-list" id="primary-navbar" data-visiable="false">
            <li>
              <div className="our-tel" id="our-tel3">
                <div className="footer-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                </div>
                <p className="our-first" id="our-first-3">
                  Тел:
                </p>
                <p className="our-second" id="our-second-3">
                  +7 (952) 777-77-77
                </p>
              </div>
            </li>

            <li style={{ marginRight: "90px" }}>
              <div className="our-mail" id="our-tel3">
                <div className="footer-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-compass"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                    <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                  </svg>
                </div>
                <p className="our-first" id="our-first-3">
                  Адресс:
                </p>
                <p className="our-second" id="our-second-3">
                  20c Factory Street, Newyork, NY 10205
                </p>
              </div>
            </li>

            <li className="social-buttons-cont">
              <button className="foot-button">
                <Icon24LogoVk />
              </button>
              <button className="foot-button">
                <Icon24Location />
              </button>
            </li>
          </ul>
        </div>
        <nav className="navbar" id="navbar">
          <ul className="navbar-list" id="primary-navbar" data-visiable="false">
            <li className={`${isStart ? "navbar-punkt-active" : "navbar-punkt"}`}>
              <a href="/" className="navbar-links">
                Главная
              </a>
            </li>

            <li
              style={{ minWidth: "5.3rem" }}
              className={`${isAbout ? "navbar-punkt-active" : "navbar-punkt"}`}>
              <a style={{ minWidth: "5.3rem" }}
                href="/about"
                className="navbar-links">О нас</a>
            </li>

            <li
              className={`${isContact ? "navbar-punkt-active" : "navbar-punkt"}`}>
              <a href="/comand" className="navbar-links">Команда</a>
            </li>

            <li className={`${isAuth1 ? "navbar-punkt-active" : "navbar-punkt"}`}>
              <a href="#"
                className={`navbar-links ${isDataEntered ? 'data-entered' : 'data-not-entered'}`}
                onClick={handleAuthClick}>Авторизация</a>
            </li>
          </ul>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content" style={{paddingTop: "20px"}}>
              <div style={{marginTop: "-15px"}}>
                <span className="close" onClick={handleCloseModal}>&times;</span>
                </div>
                <div>
                  <label>
                  <span style={{paddingLeft: "10px"}}>
                    Яндекс.Трекер ID:
                    </span>
                    <input type="text" value={trackerId} style={{marginTop: "12px"}} onChange={(e) => setTrackerId(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label style={{marginBottom: "30px"}}> 
                    <span style={{paddingLeft: "10px"}}>
                    Google Meet ID:
                    </span>
                    <input type="text" value={meetId} style={{marginTop: "12px"}} onChange={(e) => setMeetId(e.target.value)} />
                  </label>
                </div>
                <button className='btn_s' onClick={handleLogin}>Войти</button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <div className="toggle-item">
        <a className={`toggle-click ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`hamburger-lines ${isOpen ? 'open' : ''}`}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </a>
      </div>

      {isOpen && (
        <div className="dropdown-menu-toggle" style={{top: '0'}}>
          <ul className="dropdown-menu" style={{border: 'none'}}>
            <li className={`${isStart ? "dropdown-punkt active" : "dropdown-punkt"}`}>
              <a href="/" className="dropdown-links">Главная</a>
            </li>
            <li className={`${isAbout ? "dropdown-punkt active" : "dropdown-punkt"}`}>
              <a href="/about" className="dropdown-links">О нас</a>
            </li>
            <li className={`${isContact ? "dropdown-punkt active" : "dropdown-punkt"}`}>
              <a href="/comand" className="dropdown-links">Команда</a>
            </li>
            <li className={`${isAuth1 ? "dropdown-punkt active" : "dropdown-punkt"}`}>
              <a href="#"
                className={`dropdown-links ${isDataEntered ? 'data-entered' : 'data-not-entered'}`}
                onClick={handleAuthClick}>Авторизация</a>
            </li>
          </ul>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content" style={{paddingTop: "20px"}}>
                <div style={{marginTop: "-15px"}}>
                <span className="close" onClick={handleCloseModal}>&times;</span>
                </div>
                <div>
                  <label>
                    <span style={{paddingLeft: "10px"}}>
                    Яндекс.Трекер ID:
                    </span>
                    <input type="text" value={trackerId} style={{marginTop: "12px"}} onChange={(e) => setTrackerId(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label style={{marginBottom: "30px"}}> 
                    <span style={{paddingLeft: "10px"}}>
                    Google Meet ID:
                    </span>
                    <input type="text" value={meetId} style={{marginTop: "12px"}} onChange={(e) => setMeetId(e.target.value)} />
                  </label>
                </div>
                <button onClick={handleLogin}>Войти</button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default NavBar;
