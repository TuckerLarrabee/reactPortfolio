import React from "react";
import crypto from "../../assets/cryptohub.png"
import music from "../../assets/MusicYouMayLike.png"
import weather from "../../assets/WeatherInfoToday.png"
import notes from "../../assets/note-taker.png"
import techblog from "../../assets/tech-blog.png"
import regex from "../../assets/regex.jpeg"
import github from "../../assets/github-logo.png"

function Portfolio () {


    return (
        <section id="portfolio">
            <h2 className="project-text">Current Projects:</h2>
            <div className="row">
                <div className="main-project">
                    <a href="https://cryptohubproject.herokuapp.com/" target={"_blank"}>
                        <img src={crypto}></img>
                    </a>
                    <div className="main-project-text">
                        <a href="https://cryptohubproject.herokuapp.com/" target={"_blank"}>
                            <p >MongoDB, Express, React, Node.js</p>
                            <h3>CryptoHub</h3>
                        </a>
                        <a className="project-text-link" href="https://github.com/TuckerLarrabee/cryptohub_project3" target={"_blank"}>
                            Link to Github 
                        </a>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="project2">
                    <a href="https://tuckerlarrabee.github.io/Music-You-May-Like/" target={"_blank"}>
                        <img style={{margin:0}} src={music}></img>
                    </a>
                    <div>
                        <a href="https://tuckerlarrabee.github.io/Music-You-May-Like/" target={"_blank"}>
                            <p >HTML/CSS/JS</p>
                            <h3>Music You May Like</h3>
                        </a>
                        <a className="project-text-link" href="https://github.com/TuckerLarrabee/Music-You-May-Like" target={"_blank"}>
                            Link to Github 
                        </a>
                    </div>
                </div>
                <div className="project3">
                    <a href="https://tuckerlarrabee.github.io/WeatherInfoToday/" target={"_blank"}>
                        <img style={{margin:0}} src={weather}></img>
                    </a>
                    <div>
                        <a href="https://tuckerlarrabee.github.io/WeatherInfoToday/" target={"_blank"}>
                            <p >Server Side APIs/JS</p>
                            <h3>Weather Info Today</h3>
                        </a>
                        <a className="project-text-link" href="https://github.com/TuckerLarrabee/WeatherInfoToday" target={"_blank"}>
                            Link to Github 
                        </a>
                    </div>
                </div>
                <div className="project4">
                    <a href="https://pacific-sands-54238.herokuapp.com/" target={"_blank"}>
                        <img style={{margin:0}} src={techblog}></img>
                    </a>
                    <div>
                        <a href="https://pacific-sands-54238.herokuapp.com/" target={"_blank"}>
                            <p >MVC/MySQL2/Express</p>
                            <h3>Tech Blog</h3>
                        </a>
                        <a className="project-text-link" href="https://github.com/TuckerLarrabee/TechBlog_MVC" target={"_blank"}>
                            Link to Github 
                        </a>
                    </div>
                </div>
                <div className="project5">
                    <a href="https://gist.github.com/TuckerLarrabee/b1c2b7221ee783e718f28ac8fda86da8" target={"_blank"}>
                        <img style={{margin:0}} src={regex}></img>
                    </a>
                    <div>
                        <a href="https://gist.github.com/TuckerLarrabee/b1c2b7221ee783e718f28ac8fda86da8" target={"_blank"}>
                            <p >Regex</p>
                            <h3>Regex Email Validation</h3>
                        </a>
                        <a className="project-text-link" href="https://gist.github.com/TuckerLarrabee/b1c2b7221ee783e718f28ac8fda86da8" target={"_blank"}>
                            Link to Github 
                        </a>
                    </div>
                </div>
                <div className="project6">
                    <a href="https://notesfordays123.herokuapp.com/notes" target={"_blank"}>
                        <img style={{margin:0}} src={notes}></img>
                    </a>
                    <div>
                        <a href="https://notesfordays123.herokuapp.com/notes" target={"_blank"}>
                            <p >Node/Express</p>
                            <h3>Note Taker</h3>
                        </a>
                        <a className="project-text-link" href="https://github.com/TuckerLarrabee/NotesForDays" target={"_blank"}>
                            Link to Github 
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;