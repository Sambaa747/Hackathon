import SwiperCore, { EffectFade, Navigation } from "swiper";
import { useState, useRef, useEffect } from "react";
import DisplayData from "../display-data/index";
import axios from "axios";
import useOnClickOutside from "use-onclickoutside";
import Card from 'react-bootstrap/Card'
import Link from "next/link";
import Button from 'react-bootstrap/Button'
SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [data, setData] = useState([]);
  const [best, setBest] = useState([]);
  const [hi, setHi] = useState([]);
  const [NewTech, setNew] = useState([]);

  const [form, setForm] = useState("");

  function getProduct(e) {
    e.preventDefault();
    fetchData();
  }

  const fetchData = async () => {
    axios
      .get(`http://localhost:8000/api/${form}`)
      .then((res) => res)
      .then((data) => {
        let final = data.data
        setBest(final.BestComputers)
        setHi(final.HiTech)
        setNew(final.NewTech)
      });
  };
  const handleChange = (e) => {
    let value = e.target.value;
    setForm(value);
  };

  if (!data) return <p>No data</p>;

  const searchRef = useRef(null);

  const closeSearch = () => {
    setSearchOpen(false);
  };
  useOnClickOutside(searchRef, closeSearch);

  return (
    <section className="page-intro">
      <div
        className="page-intro__slide"
        style={{ background: "url('images/banner/gradient.gif')" }}
      >
        <div className="container">
          <div className="page-intro__slide__content">
            <h3>
              Худалдан авах бараа бүтээгдэхүүнийхээ үнийн харьцуулалтыг нэг
              дороос хийх боломж ...
            </h3>
            <button
              ref={searchRef}
              className={`search-form-wrapper ${
                searchOpen ? "search-form--active" : ""
              }`}
            >
              <a href="#" className="btn-shop">
                <i
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="icon-search"
                ></i>
              </a>
              <form className={`search-form`} onSubmit={getProduct}>
                <i
                  className="icon-cancel"
                  onClick={() => setSearchOpen(!searchOpen)}
                ></i>
                <input
                  type="text"
                  name="search"
                  size="80"
                  placeholder="Хайх гэж буй бүтээгдэхүүнээ бичнэ үү"
                  onChange={(e) => handleChange(e)}
                />
              </form>
            </button>
           
           
          </div>
          
        </div>
      </div>
      
     
      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <div className="data-item__content">
                <h4>Таны хайсан бүтээгдэхүүн</h4>
              </div>
            </li>
          </ul>
        </div>

        <div style={{display:'flex', flexWrap:'wrap'}}>
            {
            hi.map(el=>{
                  return(
                    <Card style={{width:'200px'}}>
                    <Card.Img variant="top" src={el.image_link} />
                    <Card.Body>
                      <Card.Title>{el.name}</Card.Title>
                      <Card.Text>
                        {el.category}
                        <br />                        
                        Үнэ:{el.price}
                        <br />
                        Борлуулагч: Hitech
                      </Card.Text>
                      <Link href={el.prod_url}>
                      <Button variant="primary">Линк</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  )
                })
            
            }
            {
            NewTech.map(el=>{
                  return(
                    <Card style={{width:'200px'}}>
                    <Card.Img variant="top" src={el.image_link} />
                    <Card.Body>
                      <Card.Title>{el.name}</Card.Title>
                      <Card.Text>
                        {el.category}
                        <br />                        
                        Үнэ:{el.price}
                        <br />
                        Борлуулагч: NewTech
                      </Card.Text>
                      <Link href={el.prod_url}>
                      <Button variant="primary">Линк</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  )
                })
            
            }
            </div>

        {/* {console.log(weather)} */}
      </div>
    </section>
  );
};

export default PageIntro;
