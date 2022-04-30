import React from "react";
import phone from "../../assets/phone-icon.jpg"
import mail from "../../assets/mail-icon.jpg"
import github from "../../assets/github-logo.png"
import linkedin from "../../assets/linkedin.png"


function Contact () {


    return (
        <section id="contact" className="contact">
            <h2 className="contact-text">Contact Me:</h2>
            <div className="contact-box">
                <div className="phone">
                    <img src={phone} alt="phone icon"></img>
                    <h4>804.516.9034</h4>
                </div>
                <div className="email">
                    <a href="mailto:tuckerlarrabee13@gmail.com">
                        <img src={mail} alt="mail icon"></img>
                        <h4>Email</h4>
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/TuckerLarrabee" target={"_blank"}>
                        <img src={github} alt="github logo"></img>
                        <h4>GitHub</h4>
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/tuckerlarrabee/" target={"_blank"}>
                        <img src={linkedin} alt="linkedin logo"></img>
                        <h4>LinkedIn</h4>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;