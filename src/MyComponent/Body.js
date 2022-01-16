import React from 'react'
import './Body.css';

export default function Body() {
    return (
        <div className="container">
            <div className="resume">
                <div className="title-name">Resume</div><hr/>
                <section className="intro">
                    <div className="about-me">
                        <div className="container-title">About Me</div>
                        <div>I am student of Computer Engineering at Government Engineering Collage, Rajkot. I believe in the learning abilities, commintment to succeed, and relevant studies make me the perfect fit in my field. I am started my collage in 2019. Still i am in 3rd year of my collage.</div>
                    </div>
                    <div className="contact">
                        <div className="container-title">Contact</div>
                        <div className="contact-meta">Contact Number : <a href="tel : 9328672460">9328672460</a></div>
                        <div className="contact-meta">Email : <a href="mailto: ruturajsinhrathod3@gmailcom"> ruturajsinhrathod3@gmail.com</a></div>
                        <div className="contact-meta">Location : <address>Raska, Limbdi, <br/>Surendranagar, Gujrat, <br/>363421.</address></div>
                    </div>
                    <div className="Education">
                        <div className="container-title">Education</div>
                        <div>10th pass/ 81.0 percentage</div>
                        <div>12th pass/ Science / 69.5 percentage</div>
                        <div>BE / Computer Engineering / Current 8.42 CPI</div>
                    </div>
                    <div className="skills">
                        <div className="container-title">Skills</div>
                        <div>Web Devlopement</div>
                        <div>Java</div>
                        <div>React.js</div>
                        <div>Time Management</div>
                        <div>Problem Solver</div>
                        <div>Make decision in any situation</div>
                    </div>
                    <div className="Language">
                        <div className="container-title">Languages</div>
                        <div>Gujrati</div>
                        <div>Hindi</div>
                        <div>English</div>
                    </div>
                </section>
            </div>
        </div>
    )
}
