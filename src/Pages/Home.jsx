import React from 'react'

export default function Home() {
  return (
    <section id = "HeroSection" className='hero--section'>
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, My Name is Shweta</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack </span> {" "}
                    <br />
                    Developer 
                    </h1>
                        <p className="home--description">
                            I am a third-year B.Tech student at IIIT Lucknow studying Computer Science and Business
                            <br /> I am very passionate about Web Development and love to read in my spare time
                            <br />To know more, click here
                            
                        </p>
                        <br></br>
                    
                
            </div>
            <a href="/AboutMe">
            <button className='btn btn-primary'>Know More</button>
            </a>
        </div>
        <div className="hero--section--img">
            <img src="./img/Shweta_avatar.jpeg" alt="Hero Section" />
        </div>
    </section>
  )
}
