function Hero({ heroapi: { btntext, img } }) {
  return (
    <>
      <section className='hero-section'>
        <div className='container'>
          <div className='hero-c'>
            <div className='hero-c__title'>
              {/* title */}
              <h1>
                Play With Nike <br /> Adapt 2.0 Sneakers
              </h1>
              <a href='#collection'>{btntext}</a>
            </div>
            {/* vids img socials */}
            <div className='hero-c__content'>
              <div className='hero-c__content__img'>
                <img src={img} alt='hero-img' />
              </div>

              {/* <div className="hero-c__content__socials"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
