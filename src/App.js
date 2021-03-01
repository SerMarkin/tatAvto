import React from "react";
import { Parallax } from "react-parallax";
import 'rc-menu/assets/index.css';

import "react-awesome-button/dist/styles.css";
import "./App.css";

import image1 from "./assets/nahtan.jpg";
import phone from "./assets/phone.PNG";
import MenuHeader from "./components/MenuHeader.js";
import FooterButton from "./components/FooterButton";

const CompanyName = "Выкуп авто"

const App = () => (
  <div className="main">
    <div className="header">
      <MenuHeader title={CompanyName} />
    </div>
    <div className="container">


      <Parallax bgImage={image1} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 600 }}>
          <div className="boxs">
            <h1 className="underline">
              Выкуп Авто Казань
              
              </h1>
            <div className="box-con">
            Выкупим вам автомобиль в кротчайшие сроки и по выгодной цене!
            </div>
            <div className="tel-on">
              <div style={{height:"100%",display:'inline-block'}}>
                <a className="mgo-number" href="tel:+79534800102">+7(953)480-01-02</a>
              </div>
            </div>
          </div>
        </div>
      </Parallax>

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
