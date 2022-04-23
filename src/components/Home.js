import React, { useState } from 'react'

const Home = () => {
  const [data, setData] = useState('')
  const [search, setSearch] = useState('')

  const searchChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(search)
    console.log(data)
  }
  return (
    <div
      className='p-5 mx-5  bg-primary align-items-center  '
      style={{
        backgroundImage: `url(${require('../assets/back.JPG')})`,
        height: '500px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <br />
      <br />
      <p className='fw-bold fs-4 text-white align-middle my-auto  '>
        Худалдан авах бараа бүтээгдэхүүнийхээ <br /> үнийн харьцуулалтыг нэг
        дороос хийх
      </p>
      <br />
      <br />
      <br />
      <div className='container'>
        <div className='row height d-flex justify-content-center align-items-center'>
          <div className='col-md-6'>
            <form className='form' onSubmit={handleSubmit}>
              {' '}
              <span>
                <input
                  type='text'
                  className='form-control form-input'
                  placeholder='Бүтээгдэхүүний нэрээр хайх'
                  onChange={searchChangeHandler}
                />{' '}
                <br />
                <input type='submit' className='btn btn-primary' value='Хайх' />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
