import SwiperCore, {EffectFade, Navigation} from 'swiper';
import { useState, useRef, useEffect } from 'react';
import DisplayData from '../display-data/index';
import axios from 'axios';
import useOnClickOutside from 'use-onclickoutside';


SwiperCore.use([EffectFade, Navigation]);



const PageIntro = () => {
  useEffect(() => {
    axios.get('http://192.168.1.181:8000/api/Macbook')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  // const { allData, error } = useSWR(`http://192.168.1.181:8000/api/${form}`, fetcher)
  const [searchOpen, setSearchOpen] = useState(false);
  const [data, setData] = useState([])
  const [form, setForm] = useState("");

  function getProduct(e){
      e.preventDefault();

  }

  const fetchData = async () => {
    const req = await fetch('http://192.168.1.181:8000/api/Macbook', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });
    const newData = await req.json();
    console.log(newData.results)
    return setData(newData.results);

};
   const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    // if(name == "name") {
    //    setForm({ ...form, name: value })
    // }
    console.log(value)
    setForm(value)
    
  }

  if (!data) return <p>No data</p>



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
                <h3 >Худалдан авах бараа бүтээгдэхүүнийхээ үнийн харьцуулалтыг нэг дороос хийх боломж ...</h3>
                <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
                <a href="#" className="btn-shop"><i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i></a>
                  <form className={`search-form`} onSubmit={getProduct}>
                      <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
                      <input 
                      type="text" 
                      name="search" 
                      size="80" 
                      placeholder="Хайх гэж буй бүтээгдэхүүнээ бичнэ үү"
                      onChange={(e) => handleChange(e)} />
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
                <h4>Танд санал болгох компьютерийн бүрдлүүд</h4>
              </div>
            </li>
          </ul>
        </div>

      {/* {console.log(weather)} */}
      {data.data != undefined ? (
        <div>
          <DisplayData data={data.data} />
        </div>
      ) : null}   
      </div>
    </section>
  )
};

export default PageIntro