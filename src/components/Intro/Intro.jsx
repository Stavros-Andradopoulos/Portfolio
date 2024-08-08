import React from 'react'
import './Intro.css'
import bg from '../../Assets/image.png'
import btnImg from '../../Assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className="introName">Smith</span><br />Website Designer</span>
                <p className='introPara'>I am a skilled web designer with experience in creating <br/> visually appealing and user friendly websites. </p>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500}>
                    <button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire me</button>
                </Link>
            </div>
            <img src={bg} alt="Profile" className='bg'/>
        </section>
    )
}

export default Intro