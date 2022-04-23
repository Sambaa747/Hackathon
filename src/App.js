import './App.css'
import { Route, Link, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className='App'>
      <ul
        className='nav nav-light navbar-expand-lg justify-content-center'
        style={{}}
      >
        <li className='nav-item'>
          <Link className='nav-link active' to='/home'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/about'>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='#'>
            Link
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/home' element={<About />}></Route>
      </Routes>
    </div>
  )
}

export default App
