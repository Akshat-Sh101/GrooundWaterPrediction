import { useEffect, useRef, useState } from 'react'
import './App.css'
import anim2 from './assets/anim2.json'
import Page1 from './components/Page1';

import { Player } from '@lottiefiles/react-lottie-player';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)
const App = () => {

  window.addEventListener("wheel",function(dets){
    if(dets.deltaY >= 0){
        gsap.to('.content',{
            transform:"translateX(-200%)",
            duration:10,
            repeat:true,
            ease:"none",

        })
        gsap.to('.ri-arrow-right-line',{
            rotate:180,
        })
    }
    else{
        gsap.to('.content',{
            transform:"translateX(0%)",
            duration:10,
            repeat: true,
            ease:"none",
        })
        gsap.to('.ri-arrow-right-line',{
            rotate:0,
        })
    }
})
useGSAP(()=>{
    gsap.from('body',{
        overflow:"hidden",
        delay:4,
    })
    gsap.from('#page7',{
        display:"none",
        delay:4,
    })
    gsap.from('.form',{
        display:"none",
        delay:4,
    })
})

  return <>
        <Page1/>
        <div id="page7">
            <div id="marque">
                <div className="content">
                    <h1>The Highlight Section</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>The Highlight Section</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>The Highlight Section</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>The Highlight Section</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
                <div className="content">
                    <h1>The Highlight Section</h1>
                    <i className="ri-arrow-right-line"></i>
                </div>
            </div>
        </div>

        <div className="form">
          <Player id='anim2'
          src= {anim2}
          loop = {true}
          autoplay
          speed={1}
        />
          <div className="container">
            <h1>Ground Water Prediction</h1>
            <div className="box">
                <input type="number" name="email" placeholder="Latitude" id="email"/>
          </div>
            <div className="box">
                <input type="number" name="email" placeholder="Longitude" id="email"/>
          </div>
            <div className="box">
                <input type="number" name="email" placeholder="Annual Rainfall(mm)" id="email"/>
          </div>
            <div className="box">
                <input type="number" name="email" placeholder="Population Density(people/sq km)" id="email"/>
          </div>
            <div className="box">
                <input type="number" name="email" placeholder="Surface Elevation(m)" id="email"/>
          </div>
          <button className="btn">Predict</button>
        </div>
        </div>
      
  </>;
};

export default App
