import SwiperCore, {EffectFade, Navigation} from 'swiper';
import { useState, useRef } from 'react';

import useOnClickOutside from 'use-onclickoutside';


SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
 
  const [searchOpen, setSearchOpen] = useState(false);

  const searchRef = useRef(null);

  const closeSearch = () => {
    setSearchOpen(false);
  }
  useOnClickOutside(searchRef, closeSearch);

  return (
    <section className="page-intro">  
          <div className="page-intro__slide" style={{ background: "url('images/banner/gradient.gif')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h3>Худалдан авах бараа бүтээгдэхүүнийхээ үнийн харьцуулалтыг нэг дороос хийх боломж ...</h3>
                <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
                  <form className={`search-form`}>
                      <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
                      <input type="text" name="search" placeholder="Хайх гэж буй бүтээгдэхүүнээ бичнэ үү" />
                  </form>  
                  <a href="#" className="btn-shop"><i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i></a>
          </button>
              </div>
            </div>
          </div>
    

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>On purchases over $199</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients' opinions speak for themselves</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro