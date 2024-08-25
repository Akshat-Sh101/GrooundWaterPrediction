import React from 'react'

import loading from '../assets/loading.json'
import waves from '../assets/waves.json'
import { Player } from '@lottiefiles/react-lottie-player';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';

const page1 = () => {
    let [cnt1,setCnt] = useState(0);
    // let [firstload,setFirstload] = useState(true);
    let animref = useRef(null);
  useEffect(()=>{
    var elem = document.getElementById('anim');
    var cnt = 0;
    var id = setInterval(frame,30);
    
    function frame(){
      if(cnt > 101){
        clearInterval(id);
      }
      else if(cnt == 100){
        animref.current.pause();
      }
      else{
        setCnt(cnt++)
      }
    }
  },[])
    useGSAP(()=>{
      // if(firstload == false){
        gsap.to('#anim',{
          scale:11,
          opacity:0,
          delay:3,
          duration:1.2, 
        })
        // setFirstload(false)
      // }
      gsap.to('#txt',{
        scale:0,
        opacity:0,
        delay:3,
        duration:0.5,
      })
      gsap.to('#waves',{
        scale:1,
        opacity:1,
        delay:3.3,
        duration:0.5,
      })
      gsap.to('#main',{
        display:"block",
        delay:3.3,
        duration:0.5,
      })
      gsap.from("#navbar h4",{
        y:-200,
        opacity:0,
        delay:3.5,
        stagger:0.1,
        duration:0.3,
      })
      gsap.from("#navbar button",{
        y:-200,
        opacity:0,
        delay:3.8,
        duration:0.4,
      })
      gsap.from("#content h1",{
        y:200,
        opacity:0,
        delay:4.2,
        stagger:0.1,
        duration:0.5,
      })
      gsap.from("#logo",{
        opacity:0,
        delay:4.2,
        stagger:0.1,
        duration:0.8,
      })
      gsap.from("#info",{
        opacity:0,
        scale:0,
        delay:4.0,
        duration:0.6,
      })
    })

  return (
    <>
      <div className="load">
        <Player id='anim'
          src= {loading}
          loop = {false}
          autoplay
          speed={1.5}
          ref={animref}
        />
        <h1 id='txt'>Loading {cnt1}% ...</h1>
      </div>
      <main id='main'>
        <div className='details'>
          <nav id="nav">
              <div id="logo">
                <img src="src\assets\logo.png" alt="GC" />
              </div>
              <div id="navbar">
                  <h4>Home</h4>
                  <h4>About Us</h4>
                  <h4>Predict</h4>
                  <h4>View More</h4>
                  <h4>Contacts</h4>
                  <button>Documentation</button>
              </div>
          </nav>
        </div>
       
        <div id='content'>
          <div id='head'>
          <h1>Ground Water</h1>
          <h1>Level</h1>
          <h1>Predictor</h1>
          </div>
          <div id='info'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla accusamus facilis consequuntur odit, suscipit, libero, repellendus totam reiciendis nemo iste sint corrupti quia optio rerum fuga illum? Rerum reprehenderit modi consectetur obcaecati blanditiis neque voluptate commodi reiciendis, nostrum culpa explicabo magnam ducimus minima soluta optio dolores provident repellat repellendus veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, molestias.
          </div>
        </div>
          <Player id='waves'
          src= {waves}
          loop = {true}
          autoplay
          speed={1.5}
        />
        </main>
    </>
  )
}

export default page1
