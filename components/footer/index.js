import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo />Hermes</h6>
            <p>Худалдан авах бараа бүтээгдэхүүнийхээ үнийн харьцуулалтыг нэг дороос хийх боломж ...</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">           
            <ul>
              <li>Мэдээ, Мэдээлэл</li>
              <li><a href="#">Дэлгүүр хайх</a></li>
              <li><a href="#">Онлайн худалдаа</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Холбогдох</li>
              <li><a href="#">elritardos@ufe.edu.mn</a></li>
              <li><a href="#">Утас: 95169675</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY El Ritardos - © 2022. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer