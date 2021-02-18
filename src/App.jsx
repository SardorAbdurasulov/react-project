import { useState } from "react";
import "./style.css";
import Footer from "./Footer"

import About from "./About";
import WorldClass from "./World-class";
import States from "./States";
import RealDeal from "./Real-deal"


function App() {
  const [dark, setNightMode] = useState(false)
  return (
    <>
    <header className={dark ? "dark" : null}>
      <div className="container site-header__container">
        <a className="site-header__logo" href="#">
        <img className="site-header__logo-img" src="/imgs/logo.svg" width="202" height="27" alt="site-logo"/>
      </a>
      <button className="button-dark" onClick={() => setNightMode(!dark)}>
        {dark ? <img src="/imgs/light.svg" width="20" height="20" alt="son"/> : <img src="/imgs/morn.svg" width="20" height="20" alt="son"/>}
      </button>
      <nav className="site-nav">
        <ul className="site-nav__list">
          <li className="site-nav__item"><a className="site-nav__link" href="#">OUR COMPANY</a></li>
          <li className="site-nav__item"><a className="site-nav__link" href="#">LOCATIONS</a></li>
          <li className="site-nav__item"><a className="site-nav__link sa" href="#">CONTACT</a></li>
        </ul>
      </nav>
      </div>
    </header>

    <main className={dark ? "dark" : null}>
      <About/>
      <WorldClass/>
      <States/>
      <RealDeal/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
