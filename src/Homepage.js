import './Homepage.scss';

const Homepage = () => (
    <section id="all">
        <section id="profile">
            <div className="section__pic-container">
                <img src="Profile Picture.png" alt="Jean-Pierre Viljoen profile picture" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Jean-Pierre Viljoen</h1>
                <p className="section__text__p2">Data Driven Solutions</p>
                <div className="btn-container">
                    <button
                        className="btn btn-color-2"
                        onClick={() => window.open('./Jean-Pierre Viljoen- Curriculum Vitae..docx')}
                    >
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>
                        Contact Info
                    </button>
                    <div id="socials-container">
                        <img 
                            src="linkedin.png"
                            alt="My LinkedIn profile"
                            className="icon"
                            onClick={() => window.open('https://www.linkedin.com/in/jeanpierreviljoen/')}
                        />
                        <img
                            src="./github.png"
                            alt="My GitHub profile"
                            className="icon"
                            onClick={() => window.open('https://github.com/jeonpierre')}
                        />
                            
                    </div>
                </div>
            </div>
        </section>
        <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
        <div className="section__pic-container">
            <img
            src="./about-pic.png"
            alt="Profile picture"
            className="about-pic"
            />
        </div>
        <div className="about-details-container">
            <div className="about-containers">
            <div className="details-container">
                <img
                src="./experience.png"
                alt="Experience icon"
                className="icon"
                />
                <h3>Experience</h3>
                <p>2+ years <br />Data & Business Analysis, Product Managment</p>
            </div>
            <div className="details-container">
                <img
                src="./assets/education.png"
                alt="Education icon"
                className="icon"
                />
                <h3>Education</h3>
                <p>B.Sc. Hons. Bachelors Degree</p>
            </div>
            </div>
            <div className="text-container">
            <p>
                Hello, I'm Jean-Pierre Viljoen, a dedicated Business Analyst and Product Manager with a passion for leveraging data-driven insights to support strategic decision-making. 
            </p>
            <br />
            <p>
                With a background in Psychology and extensive experience in data analysis and manipulation, I thrive on bridging the gap between complex data and actionable business strategies. 
            </p>
            </div>
        </div>
        </div>
        <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
        />
        </section>  
     </section>
    );

export default Homepage;
