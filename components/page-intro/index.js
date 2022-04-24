import SwiperCore, {EffectFade, Navigation} from 'swiper';
import { useState, useRef } from 'react';
import DisplayData from '../display-data/index'




import useOnClickOutside from 'use-onclickoutside';


SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
    
 
  const [searchOpen, setSearchOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    id: "",
  });

  async function todoData(e) {
    e.preventDefault();
    if(form.search == ""){
      alert("Хайх гэж буюу нэр оруулна уу?")
    } else {
      const data =  await fetch(
        `https://jsonplaceholder.typicode.com/todos?q=${form.search}`
      )
      .then((res) => console.log(res.json()))
      .then((data) => data)

      setTodos({data: data});
     
    }
  }

  const searchChangeHandler = (e) => {
    let name = e.target.name
    let value = e.target.value

    if(name == "id") {
      setForm({ ...form, id: value })
    }
    console.log(value)
  }

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
                  <form className={`search-form`} onSubmit={(e) => todoData(e)}>
                      <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
                      <input 
                      type="text" 
                      name="search" 
                      size="80" 
                      placeholder="Хайх гэж буй бүтээгдэхүүнээ бичнэ үү"
                      onChange={searchChangeHandler} />
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
      {todos.data != undefined ? (
        <div>
          <DisplayData data={todos.data} />
        </div>
      ) : null}   
      </div>
    </section>
  )
};

export default PageIntro