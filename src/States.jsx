function States(){
  return (
    <section className="states">
      <div className="container">
        <ul className="states__list">
          <li className="states__item">
            <img className="states__img" src="/imgs/canada.png" width="202" height="202" alt="CANADA"/>
            <h3 className="states__title">CANADA</h3>
            <a className="states__item-link" href="#">SEE LOCATION</a>
          </li>

          <li className="states__item">
            <img className="states__img" src="/imgs/australia.png" width="202" height="202" alt="AUSTRALIA"/>
            <h3 className="states__title">AUSTRALIA</h3>
            <a className="states__item-link" href="#">SEE LOCATION</a>
          </li>

          <li className="states__item">
            <img className="states__img" src="/imgs/united-kindom.png" width="202" height="202" alt="UNITED KINGDOM"/>
            <h3 className="states__title">UNITED KINGDOM</h3>
            <a className="states__item-link" href="#">SEE LOCATION</a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default States;