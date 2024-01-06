import data from '../data/index.json'

export default function MySkills() {
    return (
      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          {/* <p className="section--title">My Skills</p> */}
          <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        
        <h2>Frontend</h2>
        <div className="skills--section--container">
          {data?.frontend?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2>Backend</h2>

        <div className="skills--section--container">
          {data?.backend?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }