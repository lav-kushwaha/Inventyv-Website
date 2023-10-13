import React from 'react'
import './Home.css'
import Image from '../../assets/asset 1.jpeg'
import Inventyv from '../Inventyv/Inventyv'
import Cards from '../Cards/Cards'

const Home = () => {
  return (
    <>
      <div className="home-img">
        <img src={Image} alt="Home-Image" />
        <div className="home-heading">
         <div className="home-tittle">
         <p>Software Development Center</p>
          <h2><pre>      INVENTING</pre>A BETTER FUTURE</h2>
          <h7>Committed to leverage the power of the latest technologies to deliver the best-in-class products and business solutions.</h7>
         </div>
        </div>
      </div>
      <Inventyv/>
      <Cards/>
    </>
    )
}
export default Home