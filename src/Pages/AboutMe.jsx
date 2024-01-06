import {Document, Page, pdfjs} from 'react-pdf'
// import Shweta_Resume from './img/Shweta_Resume.pdf'

const AboutMe =() => {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./img/Shweta_img2.jpeg" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            {/* <p className="section--title">About</p> */}
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            I am a pre-final year student at IIIT Lucknow pursuing B.Tech in Computer
             Science and Business. I am passionate about identifying and resolving real-world issues.
               I always look forward to gaining new technical and non-technical experience.
               <br /> <br /> 
               I have developed a keen interest in web development,
                am proficient in frontend development, and have begun exploring backend too recently.
                 I have developed multiple web applications, both individually and as part of a team.
                 <br /> <br />
                 Apart from these, I love to read, and more often than not, you will find 
                 me with a book in my hand. Hence, the picture :)


            </p>
            <p className="hero--section-description">
             Email: jhashweta862@gmail.com
             <br />
             <a href="https://drive.google.com/file/d/12hRxeM8d-AudXGdIqMKQ6P9Wsv5MkDKk/view?usp=sharing" >
              Resume: Resume.pdf
             {/* <div className='res'>
              <Document 
              file = {"https://drive.google.com/drive/search?q=Resume_shweta"}
              onLoadError={console.error}>
                <Page index={0}/>
              </Document>
             </div> */}
             </a> 
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default AboutMe