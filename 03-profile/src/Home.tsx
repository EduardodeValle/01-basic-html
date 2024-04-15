import './App.css'
import homeImage from './assets/home.jpg';
import githubImage from './assets/github.png';
import emailImage from './assets/email.png';
import linkedinImage from './assets/linkedin.png';
import myImage from './assets/1.jpg';
import Profile from './profile.tsx';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

    return (
        <>
            <div className="navbar">
                <Link to="/" className="left-image">
                    <img src={homeImage} alt="Left Image" />
                </Link>
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

                        <Link to="/profile" className="button">Go to Profile</Link>
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </div>

                </div>
            </div>


            <div className="mt-8">
                <article>
                    <h2 className="text-4xl font-bold text-sky-300 mb-6">
                        Experience
                    </h2>

                </article>
            </div>

            <div className="grid gap-12">
                <article className="space-y-4">
                    <p className="bg-blue-800 rounded-l-full font-bold flex items-center">
                        <span className="bg-blue-600 text-white px-6 rounded-full py-2">
                            01
                        </span>
                        <span className="flex-1 p-2 text-left">
                            Comité Ecológico Integral del estado de Nuevo León | Data Analyst
                        </span>
                    </p>

                    <p className="text-left">
                        Analysis and cleaning of data with Python (Pandas, NumPy, Matplotlib) about the air quality of the state of Nuevo León.
                    </p>
                    <ul className="text-left">
                        <li>Organized and cleaned a segment of the database to store the information in an orderly manner, taking care of its integrity.</li>
                        <li>Developed pipelines to read raw data with an API, manipulate it and make derivations and then save it to a database.</li>
                        <li>Adjusted the raw data obtained from sensors to optimize the calculation of pollution models (US EPA mainly).</li>
                    </ul>

                </article>

                <article className="space-y-4">
                    <p className="bg-blue-800 rounded-l-full font-bold flex items-center">
                        <span className="bg-blue-600 text-white px-6 rounded-full py-2">
                            02
                        </span>
                        <span className="flex-1 p-2 text-left">
                            Tecnológico de Monterrey | Topological Data Analysis
                        </span>
                    </p>

                    <p className="text-left">
                        Analysis and cleaning of data with Python (Pandas, NumPy, Matplotlib) about the air quality of the state of Nuevo León.
                    </p>
                    <ul className="text-left">
                        <li>Performed extensive data cleaning, manipulation and tuning using Python (Pandas, NumPy, Matplotlib).</li>
                        <li>I built graphs from the data with the KeplerMapper library and exported them to html files to visualize them, I transformed the
                            structure of the graphs to a customized one to apply algorithms such as MergeSort, binary search, Dijkstra and BFS to obtain
                            the topological properties of each graph.</li>
                    </ul>
                </article>

                <article className="space-y-4">
                    <p className="bg-blue-800 rounded-l-full font-bold flex items-center">
                        <span className="bg-blue-600 text-white px-6 rounded-full py-2">
                            02
                        </span>
                        <span className="flex-1 p-2 text-left">
                            Dilo en señas | Señaventuras
                        </span>
                    </p>

                    <p className="text-left">
                        I participate in the development of a mobile application for iOS in collaboration with the organization Dilo en señas that helps people
                        with hearing disabilities to learn Mexican Sign Language with gamification, SwiftUI is the main framework, Core ML is used for artificial
                        intelligence for object detection and RealityKit for augmented reality features.
                    </p>
                    <ul className="text-left">
                        <li>I built basic and animated 3D assets in Blender for the augmented reality experience.</li>
                        <li>Extended the AR experiences with animations done in Reality Composer, the main menu of the app has islands in AR and the
                            specific view is also generated in AR with unique animations.
                        </li>
                    </ul>
                </article>

                <article className="space-y-4">
                    <p className="bg-blue-800 rounded-l-full font-bold flex items-center">
                        <span className="bg-blue-600 text-white px-6 rounded-full py-2">
                            02
                        </span>
                        <span className="flex-1 p-2 text-left">
                            Tecnológico de Monterrey | Student system
                        </span>
                    </p>

                    <p className="text-left">
                        I worked on a project that is a clone of the anonymous survey system that students answer to rate the content of a subject and the
                        quality of the teachers
                    </p>
                    <ul className="text-left">
                        <li>I designed the database with MySQL that stores all users by roles, completed surveys and pending surveys.</li>
                        <li>Web development of the administrator page to enable and create new surveys, I focused on the backend with NodeJS, React
                            (contexts), Express and more frameworks
                        </li>
                    </ul>
                </article>
            </div>
        </>
    )
}

export default App
