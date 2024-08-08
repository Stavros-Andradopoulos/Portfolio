import React from 'react'
import './Works.css'
import portfolio1 from '../../Assets/portfolio-1.png'
import portfolio2 from '../../Assets/portfolio-2.png'
import portfolio3 from '../../Assets/portfolio-3.png'
import portfolio4 from '../../Assets/portfolio-4.png'
import portfolio5 from '../../Assets/portfolio-5.png'
import portfolio6 from '../../Assets/portfolio-6.png'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Portfolio</h2>
            <span className='worksDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence </span>
            <div className="worksImgs">
                <img src={portfolio1} alt="portfolio1" className="worksImg" />
                <img src={portfolio2} alt="portfolio2" className="worksImg" />
                <img src={portfolio3} alt="portfolio3" className="worksImg" />
                <img src={portfolio4} alt="portfolio4" className="worksImg" />
                <img src={portfolio5} alt="portfolio5" className="worksImg" />
                <img src={portfolio6} alt="portfolio6" className="worksImg" />
            </div>
            <button className='workBtn'>See More</button>
        </section> 
    )
}

export default Works