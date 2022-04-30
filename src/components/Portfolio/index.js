import React from "react";
import crypto from "../../assets/cryptohub.png"
import music from "../../assets/MusicYouMayLike.png"
import weather from "../../assets/WeatherInfoToday.png"
import gitItDone from "../../assets/GitItDone.png"
import techblog from "../../assets/tech-blog.png"

function Portfolio () {


    return (
        <section id="portfolio">
            <h2 className="project-text">Current Projects:</h2>
            <div className="row">
                <div className="main-project">
                    <a href="https://secret-cliffs-96796.herokuapp.com/login" target={"_blank"}>
                        <img src={crypto}></img>
                    </a>
                    <div className="main-project-text">
                        <a href="https://secret-cliffs-96796.herokuapp.com/login" target={"_blank"}>
                            <p >Node/Express/Handlebars</p>
                            <h3>CryptoHub</h3>
                        </a>
                        {/* <a>
                            Link to Github
                        </a> */}
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
                    </div>
                </div>
                {/* <div className="project5">
                    <a href="https://tuckerlarrabee.github.io/Music-You-May-Like/" target={"_blank"}>
                        <img style={{margin:0}} src={music}></img>
                    </a>
                    <div>
                        <a href="https://tuckerlarrabee.github.io/Music-You-May-Like/" target={"_blank"}>
                            <p >HTML/CSS/JS</p>
                            <h3>Music You May Like</h3>
                        </a>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Portfolio;