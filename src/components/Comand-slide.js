import React, { useState } from "react";
import "./../css/comand-slide.css";
import { Icon24Location } from '@vkontakte/icons';
import Katya from "./../photos/_MG_3887.jpg";
import Igor from "./../photos/_MG_4026.jpg";
import Ilya from "./../photos/_MG_3933.jpg";
import Gleb from "./../photos/photo_2022-10-06_03-14-06.jpg";

function Slide() {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleCheckboxChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="section full-height over-hide px-4 px-sm-0">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
            <div className="section mx-auto text-center slider-height-padding">
              <input
                className="checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                checked={activeSlide === 1}
                onChange={() => handleCheckboxChange(1)}
              />
              <label htmlFor="slide-1"></label>
              <input
                className="checkbox scnd"
                type="radio"
                id="slider-2"
                name="slider"
                checked={activeSlide === 2}
                onChange={() => handleCheckboxChange(2)}
              />
              <label htmlFor="slider-2"></label>
              <input
                className="checkbox thrd"
                type="radio"
                id="slider-3"
                name="slider"
                checked={activeSlide === 3}
                onChange={() => handleCheckboxChange(3)}
              />
              <label htmlFor="slider-3"></label>
              <input
                className="checkbox foth"
                type="radio"
                id="slider-4"
                name="slider"
                checked={activeSlide === 4}
                onChange={() => handleCheckboxChange(4)}
              />
              <label htmlFor="slider-4"></label>

              <ul className="ulll">
                <li
                  className="slides"
                  style={{
                    padding: "0 50px",
                    opacity: activeSlide === 1 ? 1 : 0,
                    pointerEvents: activeSlide === 1 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                  <div className="image"><img style={{width: "400px", height: "400px", borderRadius: "15px"}} src={Katya}></img></div>
                    <div className="text">
                      <div className="work"><p>Ведерникова Екатерина</p><a href="https://web.telegram.org/a/#435768010" style={{padding: "0 0 0 10px", width: "24px", height: "24px"}}><Icon24Location className="btn-match" style={{width: "35px", height: "35px" } }/></a></div>
                      <div className="workingg"><p className="workin">Должность: <span className="worki">Founder</span></p></div>
                    </div>
                  </div>
                </li>
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 2 ? 1 : 0,
                    pointerEvents: activeSlide === 2 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                    <div className="image"><img style={{width: "400px", height: "400px", borderRadius: "15px"}} src={Igor}></img></div>
                    <div className="text">
                      <div className="work"><p>Кича Игорь</p><a href="https://web.telegram.org/a/#479599876" style={{padding: "0 0 0 10px", width: "24px", height: "24px"}}><Icon24Location className="btn-match" style={{width: "35px", height: "35px" } }/></a></div>
                      <div className="workingg"><p className="workin">Должность: <span className="worki">CTO</span></p></div>
                    </div>
                    </div>
                </li>
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 3 ? 1 : 0,
                    pointerEvents: activeSlide === 3 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                  <div className="image"><img style={{width: "400px", height: "400px", borderRadius: "15px"}} src={Ilya}></img></div>
                    <div className="text">
                      <div className="work"><p>Стрельников Илья</p><a href="https://web.telegram.org/a/#505870315" style={{padding: "0 0 0 10px", width: "24px", height: "24px"}}><Icon24Location className="btn-match" style={{width: "35px", height: "35px" } }/></a></div>
                      <div className="workingg"><p className="workin">Должность: <span className="worki">Backend</span></p></div>
                    </div>
                  </div>
                </li>
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 4 ? 1 : 0,
                    pointerEvents: activeSlide === 4 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                  <div className="image"><img style={{width: "400px", height: "400px", borderRadius: "15px"}} src={Gleb}></img></div>
                    <div className="text">
                      <div className="work"><p>Белай Глеб</p><a href="https://web.telegram.org/a/#1101590843" style={{padding: "0 0 0 10px", width: "24px", height: "24px"}}><Icon24Location className="btn-match" style={{width: "35px", height: "35px" } }/></a></div>
                      <div className="workingg"><p className="workin">Должность: <span className="worki">Frontend</span></p></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
