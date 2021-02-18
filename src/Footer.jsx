function Footer(){
  return (
    <footer className="site-footer site-footer--blue">
      <div className="container">
        <div className="site-footer__top">
          <a className="site-footer__logo" href="#">
          <img className="site-footer__logo-img" src="/imgs/logo.svg" width="202" height="27" alt="site-logo"/>
        </a>
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li className="site-nav__item"><a className="site-nav__link site-footer__top-link" href="#">OUR COMPANY</a></li>
            <li className="site-nav__item"><a className="site-nav__link site-footer__top-link" href="#">LOCATIONS</a></li>
            <li className="site-nav__item"><a className="site-nav__link sa site-footer__top-link" href="#">CONTACT</a></li>
          </ul>
        </nav>
        </div>

        <div className="site-footer__bottom">
          <ul className="site-footer__bottom-list">
            <li className="site-footer__bottom-item">
              <p className="site-footer__bottom-text">
                Designo Central Office
              </p>
            </li>
            <li className="site-footer__bottom-item">
              <p className="site-footer__bottom-text">
                3886 Wellington Street
              </p>
            </li>
            <li className="site-footer__bottom-item">
              <p className="site-footer__bottom-text">
                Toronto, Ontario M9C 3J5
              </p>
            </li>
          </ul>


          <ul className="site-footer__bottom-list">
            <li className="site-footer__bottom-item">
              <p className="site-footer__bottom-text">
                Contact Us (Central Office)
              </p>
            </li>
            <li className="site-footer__bottom-item">
              <p className="site-footer__bottom-text">
              P : +1 253-863-8967
              </p>
            </li>
            <li className="site-footer__bottom-item">
              <p className="site-footer__bottom-text">
                M : contact@designo.co
              </p>
            </li>
          </ul>

          <ul className="site-footer__bottom-massangers">
            <li>
              <a className="site-footer__bottom-massangers-link" href="#">
                <img src="/imgs/facebook.png" alt="facebook"/>
              </a>
            </li>
            <li>
             <a className="site-footer__bottom-massangers-link" href="#">
                <img src="/imgs/youtube.png" alt="youtube"/>
             </a>
            </li>
            <li>
              <a className="site-footer__bottom-massangers-link" href="#">
                <img src="/imgs/twitter.png" alt="twitter"/>
              </a>
            </li>
            <li>
              <a className="site-footer__bottom-massangers-link" href="#">
                <img src="/imgs/Path.png" alt="pinterest"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;