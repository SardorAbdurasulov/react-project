function About(){
  return (
    <section className="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__box">
          <h2 className="about__title">About Us</h2>
          <p className="about__text">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
          </div>
        </div>
        <div className="about__right">
          <img src="/imgs/about-img.png" width="476" height="480" alt="about-img"/>
        </div>
      </div>
    </section>
  )
}

export default About;
