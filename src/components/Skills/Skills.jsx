import React from 'react'
import './Skills.css'
import UIDesign from '../../Assets/ui-design.png'
import WebDesign from '../../Assets/website-design.png'
import AppDesign from '../../Assets/app-design.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I do</span>
            <span className="skillDesc">
                I am a skilled and passionate web designer with experience in creating 
                visually appealing and user-friendly websites. I have a strong understanding
                of design and a keen eye for the detail. I am a proficient in HTML, CSS and 
                JavaScript, as well as design software such as Adobe Photoshop and illustrator.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website design</h2>
                        <p>This demo texty can be changed while making the production ready site.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App design</h2>
                        <p> You can write text related to mobile app development.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills