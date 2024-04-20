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
                src="./education.png"
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
        src="./arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href = './#experience'}
        />
        </section>  
        <section id="experience">
  <p class="section__text__p1">Explore My</p>
  <h1 class="title">Experience</h1>
  <div class="experience-details-container">
    <div class="about-containers">
      <div class="details-container">
        <h2 class="experience-sub-title">Data Analysis</h2>
        <div class="article-container">
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Excel</h3>
                <p>Experienced</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>SQL</h3>
                <p>Experienced</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Python</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Jupyter</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="details-container">
        <h2 class="experience-sub-title">Business Analysis</h2>
        <div class="article-container">
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Tableau</h3>
                <p>Basic</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Power BI</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Looker Studio</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>CRM: Kartra, Monday.com</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </article>
          <article>
            <div class="details-container">
              <img
                src="./assets/checkmark.png"
                alt="Experience icon"
                class="icon"
              />
              <div> {/* Adjusted nesting */}
                <h3>Project Management: JIRA, Asana</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  <img
    src="arrow.png"
    alt="Arrow icon"
    class="icon arrow"
    onclick="location.href='./#projects'"
  />
</section>
<section id="projects">
  <p class="section__text__p1">Browse My Recent</p>
  <h1 class="title">Projects</h1>
  <div class="experience-details-container">
    <div class="about-containers">
      <div class="details-container color-container">
        <div class="article-container">
          <img
            src="Screenshot 2024-04-10 at 18.16.54.png"
            alt="Project 1"
            class="project-img"
          />
        </div>
        <h2 class="experience-sub-title project-title">Retail Data Centralisation and Insights</h2>
        <div class="btn-container">
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/jeonpierre/Multinational-Retail-Data-Centralisation'"
          >
            Github
          </button>
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/'"
          >
            Live Demo
          </button>
        </div>
      </div>
      <div class="details-container color-container">
        <div class="article-container">
          <img
            src="Screenshot 2024-04-10 at 18.19.14.png"
            alt="Project 2"
            class="project-img"
          />
        </div>
        <h2 class="experience-sub-title project-title">Rugby Performance Analysis</h2>
        <div class="btn-container">
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/jeonpierre/Rugby-Data-Analysis'"
          >
            Github
          </button>
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/'"
          >
            Live Demo
          </button>
        </div>
      </div>
      <div class="details-container color-container">
        <div class="article-container">
          <img
            src="project-3.png"
            alt="Project 3"
            class="project-img"
          />
        </div>
        <h2 class="experience-sub-title project-title">Customer CHURN Insights and Forecasting</h2>
        <div class="btn-container">
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/'"
          >
            Github
          </button>
          <button
            class="btn btn-color-2 project-btn"
            onclick="location.href='https://github.com/'"
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  </div>
  <img
    src="arrow.png"
    alt="Arrow icon"
    class="icon arrow"
    onclick="location.href='./#contact'"
  />
</section>
<section id="contact">
  <p class="section__text__p1">Get in Touch</p>
  <h1 class="title">Contact Me</h1>
  <div class="contact-info-upper-container">
    <div class="contact-info-container">
      <img
        src="email.png"
        alt="Email icon"
        class="icon contact-icon email-icon"
      />
      <p><a href="mailto:jeanpierreviljoen01@gmail.com">jeanpierreviljoen01@gmail.com</a></p>
    </div>
    <div class="contact-info-container">
      <img
        src="linkedin.png"
        alt="LinkedIn icon"
        class="icon contact-icon"
      />
      <p><a href="https://www.linkedin.com/in/jeanpierreviljoen/">LinkedIn</a></p>
    </div>
  </div>
</section>
    </section>
    

);

export default Homepage;


