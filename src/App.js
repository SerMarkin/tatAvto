import React from "react";
import { Parallax } from "react-parallax";
import 'rc-menu/assets/index.css';
import { Element } from "react-scroll";

import "./App.css";
import image1 from "./assets/nahtan.jpg";
import MenuHeader from "./components/MenuHeader.js";
import FooterButton from "./components/FooterButton";

const CompanyName = "Выкуп авто"

const App = () => (
  <div className="main">
    <div className="header">
      <MenuHeader title={CompanyName} />
    </div>
    <div className="container">

      <Element name="section1"></Element>

      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }} >
        <div style={{ height: 600 }}>
          <div className="boxs">
            <h1 className="underline">
              Выкуп Авто Казань
            </h1>
            <div className="box-con">
              Выкупим вам автомобиль в кротчайшие сроки и по выгодной цене!
            </div>
            
          </div>
          <div className="tel-on">
              <div className="tel-on-button">
                <a target="_blank"
                  href="https://wa.me/79377788125?text=Здравствуйте!%20Я%20хочу%20продать%20автомобиль." rel="noreferrer"
                  className="sppb-btn sppb-btn-primary sppb-btn-lg  sppb-text-center" role="button">
                  <i className="fa fa-whatsapp"></i>
                    НАПИСАТЬ WHATSAPP
              </a>
              </div>
              <div className="tel-on-button">
                <a href="tel:+79534800102"
                  className="sppb-btn sppb-btn-primary sppb-btn-lg  sppb-text-center" style={{ background: '#5959ff' }} role="button">
                  <i className="fa fa-phone"></i>
                    ПОЗВОНИТЬ
              </a>
              </div>
            </div>
        </div>
      </Parallax>

      <Element name="section2"></Element>

      <Parallax strength={-100}>
        <div style={{ height: 500 }}>
          <div className="boxs">
            <h1 className="underline">Characteristic</h1>
            <div className="box-con">
              My view of functional languages is that they all use very powerful compilers, such as Haskell. For such a compiler, functional generics are very useful because they make a lot of transformations possible, including parallelization. But the Python interpreter doesn't know what your code means, which is also useful. So, I don't think it's reasonable to add the following functional ideas to python, because these are very useful in functional languages, but not suitable for Python
            </div>
          </div>
        </div>
      </Parallax>

      <Element name="section3"></Element>

      <Parallax strength={-100}>
        <div style={{ height: 600 }}>
          <div className="boxs">
            <div className="box-con">
              <h1 className="underline">Sample Code</h1>
              <div>This is the code of some examples. You can copy and paste it into your program to run. If you want to learn more about its usage, please visit the document page</div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
    <FooterButton />
  </div>
);

export default App;
