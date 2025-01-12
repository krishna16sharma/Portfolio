import './styles/normalise.css';
import './styles/stars.css';
import './styles/main_styles.css';
import ParallaxJSXWrapper from './components/ParallaxJSXWrapper.js'

function App() {
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    const Sky = ParallaxJSXWrapper(
        <div>
        <img src={process.env.PUBLIC_URL + "/images/background.png"} alt="" className="sky"/>
        </div>
        , 0.05);
    const Night = ParallaxJSXWrapper(
            <div className="night">
                  <div className="star"></div>
                  <div className="star"></div>
                </div>, 0.02
        )
    const Social = ParallaxJSXWrapper(
        <div className="social">
            <a href="mailto:krishna16sharma.s@gmail.com">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="https://in.linkedin.com/in/krishna-sharma-s-a438671b4">
                <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/krishna16sharma">
                <i className="fab fa-github"></i>
            </a>
        </div>, 0.04)
    const Moon = ParallaxJSXWrapper(<img src={process.env.PUBLIC_URL +"/images/Moon.png"} alt="" className="moon"/>, 0.02);
    const Greeting = ParallaxJSXWrapper(<div className="greeting">Welcome</div>, 0.04);
    const Section2 = ParallaxJSXWrapper(
        <div className="section2">
            <svg className="svg_curve_top" xmlns="http://www.w3.org/2000/svg" fill="#000101" viewBox="0 0 100 100" preserveAspectRatio="none" >
                <path d="M0,100 C65,93 76,10 100,100" />
            </svg>
            <div className="section2_container">
                <div className="left_side">
                    <h2>About Me</h2>
                    <p>Hello! I am <strong>Krishna Sharma S,</strong> an enthusiastic student pursuing my M.Tech in Computer Science at Indian Institute of Information Technology, Lucknow.</p>
                    <p>I love to make websites and have a good knowledge in the field of Machine Learning and Data Science.</p>
                    <p>My hobbies include Anime, Digital Art and Chess.</p>
                    <div className="buttons">
                        <div class="button button1" onClick={handleScroll}>Projects</div>
                        <a href="https://drive.google.com/file/d/1yA_DaRcT1EKSciO81DPRiXzh-up3R6YN/view?usp=sharing">
                            <div class="button button1">Resume</div>
                        </a>
                    </div>
                </div>
                <div className="right_side">
                    <img src={process.env.PUBLIC_URL + "/images/New_Photo.jpg"} className="image" alt=""/>
                    <p className="Reach"> Reach out to me at:<strong> krishna16sharma.s@gmail.com</strong></p>
                </div>
            </div>
            <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="#000101" viewBox="0 0 100 100" preserveAspectRatio="none" >
                <path d="M0,0 C65,20 90,5 100,0" />
            </svg>
        </div>, 0.05);
    const Section3 = ParallaxJSXWrapper(
        <div className="section3">
            <h2> Skills </h2>
            <div className="grid-container">
              <div className="grid-item">
                <h1 className="fab fa-html5" style={{margin:"0",width:"100%"}}></h1><span className="caption">HTML 5</span>
              </div>
              <div className="grid-item">
                <h1 className="fab fa-css3-alt" style={{margin:"0",width:"100%"}}></h1><span className="caption">CSS 3</span>
              </div>
              <div className="grid-item">
                <h1 className="fab fa-js-square" style={{margin:"0",width:"100%"}}></h1><span className="caption">Javascript</span>
              </div>
              <div className="grid-item">
                <h1 className="fab fa-node" style={{margin:"0",width:"100%"}}></h1><span className="caption">Node.js</span>
              </div>
              <div className="grid-item">
                <h1 className="fab fa-react" style={{margin:"0",width:"100%"}}></h1><span className="caption">React</span>
              </div>
              <div className="grid-item">
                <h1 className="fab fa-python" style={{margin:"0",width:"100%"}}></h1><span className="caption">Python</span>
              </div>
              <div className="grid-item">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" style={{fill:"#FFFFFF"}}>
                    <path d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"></path>
                </svg>
                <span className="caption">C++</span>
              </div>
              <div className="grid-item"><h1 className="fab fa-java" style={{margin:"0",width:"100%"}}></h1><span className="caption">Java</span></div>
              <div className="grid-item">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="99.56" viewBox="0 0 172 172" style={{fill:"#FFFFFF"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M121.08531,7.22938c-5.16,0 -9.63469,1.02125 -13.76,2.05594c7.22937,3.09062 11.70406,6.88 14.10937,8.6c5.50938,4.81062 8.6,9.63469 14.10938,17.54937c1.02125,1.72 2.74125,4.12531 3.77594,7.90125c1.03469,3.44 1.03469,6.19469 1.03469,8.94938c0,3.78937 -0.34937,6.88 -0.69875,9.97062c-0.33594,2.41875 -0.33594,3.45344 -0.67187,4.13875c0,0.34938 0,0.68531 -0.34938,1.37063c0,1.72 0,2.41875 0.34938,3.78937c0,1.37063 0.33594,2.75469 0.33594,5.16c0.34938,4.47469 0.34938,7.56531 -0.33594,11.34125v1.38406c-0.69875,3.09063 -1.38406,6.19469 -3.10406,8.93594c0.34938,0.69875 0.68531,1.03469 1.03469,1.72c1.72,-2.40531 3.09063,-4.81062 4.46125,-7.55187c4.13875,-7.57875 6.54406,-14.10938 8.26406,-18.92c3.09063,-8.94938 4.81063,-15.49344 5.84531,-20.30406c2.40531,-10.32 2.75469,-15.13062 1.72,-20.64c0,-1.72 -0.68531,-4.82406 -2.40531,-7.91469c-3.78937,-6.88 -9.63469,-9.97063 -13.76,-12.04c-2.75469,-1.37063 -9.98406,-5.16 -19.95469,-5.49594zM46.56094,8.74781c-3.96406,-0.08063 -8.80156,0.36281 -14.23031,2.94281c-1.72,0.69875 -6.88,3.10406 -11.00531,8.6c-2.75469,3.44 -4.81063,8.6 -5.84531,14.44531c-1.03469,5.16 -1.38406,11.36813 0.68531,23.05875c1.37062,8.25063 2.75469,13.76 5.50937,25.10125c0.34938,1.38406 2.40531,7.57875 6.88,21.33875l0.33594,0.68531c0.69875,2.40531 2.75469,7.56531 7.22937,12.72531c3.09063,3.44 5.84531,5.50937 8.26406,5.50937h0.67187c4.47469,0 7.57875,-3.44 10.32,-6.19469c0,-0.34937 6.54406,-8.25062 8.94938,-11.00531c-0.34938,-0.34937 -1.02125,-0.34937 -1.37063,-0.69875c-4.12531,-2.40531 -7.22937,-6.18125 -9.63469,-10.32c-4.12531,-7.56531 -3.78937,-15.13062 -3.10406,-18.92l0.34938,-5.83187c-1.37063,-9.29875 -1.02125,-18.23469 0.69875,-27.18406c1.37062,-7.56531 3.09062,-15.13062 9.27187,-23.04531c2.06938,-2.75469 4.47469,-5.16 6.88,-6.88c-5.49594,-2.40531 -11.34125,-3.78937 -17.2,-4.12531c-1.11531,-0.09406 -2.33812,-0.17469 -3.655,-0.20156zM89.77594,11.69063c-1.72,0 -3.44,0 -5.16,0.34937c-6.88,1.37063 -13.41062,5.16 -18.57062,11.69063c-5.16,6.54406 -6.53063,12.72531 -7.90125,19.95469c-0.69875,2.75469 -0.69875,5.16 -1.04813,7.91469c2.06938,-1.72 4.82406,-3.78937 8.94938,-4.82406c2.40531,-0.68531 8.6,-2.74125 13.76,0.34938c1.72,1.03469 4.12531,3.10406 6.53062,8.94937c5.16,14.44531 0.01344,29.24 -0.67187,30.61063c-0.34938,1.37062 -1.03469,2.40531 -1.38406,3.09062c-0.68531,1.72 -1.37062,3.10406 -2.05594,5.85875c-0.34938,2.40531 -0.69875,4.47469 -0.69875,6.88c1.03469,0 2.06937,0.33594 3.09062,1.02125c1.72,1.72 2.06938,4.13875 2.41875,5.16c0.68531,5.50938 0.68531,12.38938 0.68531,19.26938c0,5.50937 0,10.66937 0.33594,14.10937c0.69875,7.91469 3.10406,13.41063 6.54406,16.16531c2.40531,2.06938 5.49594,2.05594 7.21594,2.40531h0.69875c5.16,0 13.41063,-3.44 16.50125,-8.25063c1.72,-2.75469 2.41875,-5.16 3.10406,-8.6c0.34938,-2.06937 0.33594,-3.09062 0.68531,-5.16c0,-1.03469 0.34937,-2.75469 0.34937,-4.81062c0,-1.72 0.33594,-3.78938 0.68531,-6.20813c0.34938,-5.84531 1.37063,-12.71187 1.72,-16.50125c0.34938,-4.47469 2.40531,-8.26406 4.12531,-10.66937c-2.40531,-0.34938 -4.81063,-2.40531 -6.18125,-5.84531c-2.06938,-3.78937 -2.41875,-4.82406 -2.76813,-6.54406c-0.33594,-1.37062 -1.02125,-3.09062 -3.44,-8.25062c-5.16,-11.69063 -5.83187,-15.13063 -5.83187,-17.88531c-0.34938,-3.78937 -0.69875,-8.93594 3.44,-12.37594c6.18125,-5.50938 14.09594,-5.16 18.22125,-3.78938v-0.69875c-0.68531,-2.74125 -2.05594,-4.81062 -3.09063,-6.18125c-5.16,-7.91469 -7.91469,-12.04 -12.73875,-16.16531c-2.05594,-1.72 -7.21594,-5.85875 -14.78125,-8.6c-3.44,-1.03469 -7.57875,-2.41875 -12.73875,-2.41875zM127.80406,52.03c-2.49938,-0.17469 -5.68406,0.25531 -8.43875,2.67406c-1.37063,1.37062 -1.37063,4.12531 -1.02125,6.53062c0,1.72 0.33594,4.12531 5.49594,15.82938c2.40531,5.49594 3.09063,7.21594 3.44,8.6c0.34938,1.37062 0.68531,2.05594 2.75469,5.83187c0.34938,0.69875 0.68531,1.38406 1.37063,2.06938c0.68531,-1.03469 1.03469,-2.75469 1.37062,-5.50938l0.34938,-1.02125c0.68531,-3.09062 0.34937,-5.50937 0.34937,-9.63469c0,-2.06937 -0.34937,-3.44 -0.34937,-4.47469c-0.34938,-1.72 -0.34938,-3.09063 -0.34938,-5.16c-0.68531,-1.03469 -0.68531,-1.37063 -0.33594,-2.06938c0,-0.68531 0.33594,-1.70656 0.68531,-3.77594c0.34937,-2.75469 0.69875,-5.16 0.69875,-7.91469c-0.69875,-0.34938 -1.03469,-0.68531 -1.72,-1.02125c0,0 -1.81406,-0.77938 -4.3,-0.95406zM74.01375,53.38719c-2.19031,-0.25531 -4.70312,0.45688 -6.24844,0.9675c-3.78938,1.03469 -6.18125,3.44 -7.90125,4.81063c-1.03469,1.03469 -2.06938,2.06937 -3.10406,3.44c0,2.40531 0.33594,4.82406 0.68531,7.22937v0.34938l-0.68531,6.88c-0.68531,3.09062 -1.03469,8.93594 2.40531,14.78125c1.72,3.44 4.13875,6.19469 7.22937,7.91469c2.06938,1.37063 4.81063,2.40531 7.90125,3.10406c0,-2.41875 0.34938,-5.17344 0.69875,-7.57875c0.68531,-3.44 1.37063,-5.16 2.40531,-7.22938c0.34938,-1.02125 0.68531,-1.70656 1.38406,-2.74125c0.33594,-1.03469 5.14656,-14.10937 0.67187,-26.14937c-1.02125,-2.75469 -2.05594,-4.47469 -3.44,-5.16c-0.59125,-0.34938 -1.29,-0.5375 -2.00219,-0.61813zM124.485,55.34906c0.90031,-0.05375 1.76031,0.02687 2.10969,0.37625c1.03469,0.68531 -0.34937,2.40531 -0.69875,2.75469c-0.33594,0.34938 -1.02125,1.03469 -2.05594,1.38406c-1.37062,0.33594 -2.40531,-0.69875 -2.75469,-0.69875c-0.34938,-0.34938 -1.37063,-1.37063 -1.02125,-2.40531c0.33594,-0.68531 0.68531,-0.68531 2.05594,-1.03469c0.51063,-0.17469 1.46469,-0.33594 2.365,-0.37625zM72.7775,58.19781c1.15563,-0.08063 2.12313,0.36281 2.9025,0.61812c1.03469,0.34938 2.05594,0.69875 2.05594,1.38406c0.34938,1.03469 -0.67187,1.72 -1.02125,2.05594c-1.03469,1.03469 -2.75469,1.04813 -2.75469,1.04813c-1.72,0 -2.75469,-1.03469 -3.44,-2.06938c-0.34937,-0.34937 -0.68531,-1.03469 -0.33594,-1.72c0.33594,-0.68531 1.02125,-1.03469 1.37062,-1.03469c0.43,-0.17469 0.83313,-0.25531 1.22281,-0.28219zM135.88,103.2c-1.72,2.40531 -4.12531,5.50938 -4.47469,9.63469c0,0.68531 0,1.03469 -0.34938,1.72c2.75469,0.68531 5.17344,0.68531 7.57875,0.34938c5.50938,-0.69875 9.28531,-3.45344 9.97063,-4.13875c2.40531,-1.72 5.50937,-5.16 4.81062,-6.53063c-0.33594,-0.68531 -1.37062,-0.34937 -6.88,0c-1.37062,0 -5.49594,1.03469 -8.25062,0.34938h-0.68531c-0.68531,-0.34938 -1.37062,-0.69875 -1.72,-1.38406zM76.01594,110.08c-0.68531,1.03469 -1.70656,1.72 -2.39187,2.40531c-2.75469,1.72 -6.20813,3.10406 -9.64813,3.78937c-3.09062,1.03469 -4.81062,1.03469 -4.81062,2.06938c-0.34938,1.37062 3.09062,3.09062 4.81062,3.77594c5.85875,2.40531 11.70406,1.03469 12.73875,0.68531c0.68531,-0.34938 2.40531,-1.03469 4.12531,-2.06938c0,-3.77594 -0.33594,-7.21594 -0.68531,-9.97062v-0.34938h-0.34937c-1.03469,0 -2.40531,0.01344 -3.78938,-0.33594z"></path></g></g></svg>
                  <span className="caption">PostgeSQL</span>
              </div>
            </div>
        </div>, 0.05);
    const Section4 = ParallaxJSXWrapper(
        <div className="section4">
            <h2>My Projects</h2>
            <div className="project-grid-container">
              <div className="project-grid-item">
                <div className="content">
                    <img src={process.env.PUBLIC_URL +"/images/meteo.png"} alt="Meteo" style={{width:"500px",height:"300px"}}/>
                    <a href={'https://github.com/krishna16sharma/Meteo'}>
                        <div class="overlay">
                            <div class="text">A website built using React.js and deployed at Render to help users get real-time weather data.</div>
                        </div>
                    </a>
                </div>
                <span className="project_captions">Meteo</span>
              </div>
              <div className="project-grid-item">
                    <div className="content">
                        <img src={process.env.PUBLIC_URL +"/images/House.webp"} alt="Predict house Prices" style={{width:"500px",height:"300px"}}/>
                        <a href={'https://github.com/krishna16sharma/Predict-House-Prices'}>
                            <div class="overlay">
                                <div class="text">
                                    A machine learning model built using Linear Regression. Using GridSearchCV, the best method was determined. Then, the model was integrated into a Flask application.
                                </div>
                            </div>
                        </a>
                    </div>
                <span className="project_captions">Predict House Prices</span>
              </div>
              <div className="project-grid-item">
                    <div className="content">
                        <img src={process.env.PUBLIC_URL +"/images/Teacher.png"} alt="Profile Builder" style={{width:"500px",height:"300px"}}/>
                        <a href={'https://github.com/krishna16sharma/Profile-Builder'}>
                            <div class="overlay">
                                <div class="text">
                                    A website built using Django to build Portfolio for faculties based on their research works and help students contact these researchers.
                                    This project was built based on the Agile model. Testing was done using tools like Selinium, SonarQube and Django's inbuilt Unit Testing module.
                                </div>
                            </div>
                        </a>
                    </div>
                <span className="project_captions">Profile Builder</span>
              </div>
              <div className="project-grid-item">
                    <div className="content">
                        <img src={process.env.PUBLIC_URL +"/images/DocLlama.png"} alt="DocLlama" style={{width:"500px",height:"300px"}}/>
                        <a href={'https://github.com/krishna16sharma/DocLlama'}>
                            <div class="overlay">
                                <div class="text">
                                DocLlama is an AI-powered document assistant designed to help you interact with your PDFs using the help of LLMs and RAG.
                                </div>
                            </div>
                        </a>
                    </div>
                <span className="project_captions">DocLlama</span>
              </div>
            </div>
        </div>, 0.05)

  return (
    <div className="main_container">
        <div className="section1">
            <Sky/>
            <Night/>
            <Social/>
            <Moon/>
            <Greeting/>
        </div>
        <Section2/>
        <Section3/>
        <Section4/>
    </div>
  );
}

export default App;
