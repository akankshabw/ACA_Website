import React from 'react'
import background from '../../assets/home_bg.png'
import './style.css';
function Home() {
  return (
    <section className="home-container pt-20 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${background})`}} data-scroll-container>
      <div className="header">
        <h1 className='text-7xl text-white font-serif pt-10'>$ Hello World!_</h1>
      </div>
      <div className="body pt-32">
        <h1 className='heading'>ACA, IIT Kanpur</h1>
        <p className='content'>Association for Computing Activities (ACA) is the Computer Science society of IIT Kanpur. ACA organizes departmental activities right from freshers’ to farewell in addition to several programming competitions and lectures.</p>
      </div>
    </section>
  )
}

export default Home