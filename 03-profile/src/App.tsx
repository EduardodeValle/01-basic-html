import './App.css'
import homeImage from './assets/home.jpg';
import githubImage from './assets/github.png';
import emailImage from './assets/email.png';
import linkedinImage from './assets/linkedin.png';
import myImage from './assets/1.jpg';

function App() {

  return (
    <>
      <div className="navbar">
        <a href="./index.html" className="left-image"><img src={homeImage} alt="Left Image" /></a>
        <div className="right-images">
          <a href="https://github.com/EduardodeValle"><img src={githubImage} alt="Link Image" /></a>
          <a href="mailto:jsvalle50@gmail.com"><img src={emailImage} alt="Link Image" /></a>
          <a href="https://www.linkedin.com/in/jos%C3%A9-eduardo-de-valle-lara-8636b21b6/"><img
            src={linkedinImage} alt="Link Image" /></a>
        </div>
      </div>

      <div>
        <p className="font-bold text-6xl bg-gradient-to-r from-blue-500 via-blue-400 to-green-400 inline-block text-transparent bg-clip-text">José Eduardo de Valle Lara</p>
      </div>

      <div>
        <p className="font-bold text-4xl text-sky-300 mt-5">Software Engineer</p>
      </div>

      <div className="mt-5 main-container">
        <div className="mr-1 image-container">
          <img src={myImage} className="w-[85%] rounded-[25px] mr-0 block" alt="Your Image" />
        </div>

        <div className="text-container flex-3">

          <p className="p-text">
            My name is José Eduardo de Valle Lara, I'm at 6th semester and currently I am pursuing a B.S. in
            Computer Science and Engineering. I consider myself as a curious person, I'm keen in data structures and
            algorithms in research (not leetcode problems), data analysis, data science, artificial intelligence,
            backend development and AR/VR/MR technologies.
          </p>

          <div className="button-container">
            <a className="button" href="./assets/cv.pdf" download="Eduardo_de_Valle.pdf">
              Download CV
            </a>

            <a className="button" href="./profile.html">
              Let's talk!
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
