import React, {useState, useEffect} from 'react';
import './PastProjects.scss';
import {pastProjectsSlides} from './../../../api/projects';

export default function PastProjects (){
    return(
        <div className="PastProjects subsection">
            <Slideshow/>
        </div>
    )
}

function Slideshow(){
    const [currentSlide, setCurrentSlide] = useState(0);
    let setSlideshowTimeout;
    function handleSlideChange(index){
        setCurrentSlide(index);
        clearTimeout(setSlideshowTimeout);
        runSlideshow();
    }
    function runSlideshow(){


        const slidesArr = document.querySelectorAll('.Slideshow__slide');
        const slideContentArr = document.querySelectorAll('.Slideshow__slide_content');
        const ctrlsArr = document.querySelectorAll('.Slideshow__ctrl');
        [...slidesArr, ...slideContentArr, ...ctrlsArr].forEach(el=>el.classList.remove('current'))

        let current = currentSlide;
        let next = current < slidesArr.length-1? current+1 : 0;


        slidesArr[current].classList.add('current');
        slideContentArr[current].classList.add('current');
        ctrlsArr[current].classList.add('current');

        setSlideshowTimeout = setTimeout(()=>{
            slidesArr[current].classList.remove('current');
            slidesArr[next].classList.add('current');
            slideContentArr[current].classList.remove('current');
            slideContentArr[next].classList.add('current');
            ctrlsArr[current].classList.remove('current');
            ctrlsArr[next].classList.add('current');

            setCurrentSlide(next)
        },5000);
    }
    useEffect(()=>{
        runSlideshow();
        return()=>clearTimeout(setSlideshowTimeout);
    })
    const slidesBg = pastProjectsSlides.map((slide, index)=>{

        const bg=require('./../../../media/imgs/'+slide.imgs.bg);
        return (
            <div className="Slideshow__slide"
                key={`slideshow_slide_${slide.projectName.name}`}
                style ={ { backgroundImage: "url("+bg+")" } }></div>
        )
    })
    const slidesContent = pastProjectsSlides.map((slide, index)=>{
        return (
            <div key={`slideshow_slide_content_${slide.projectName.name}`}
                className="Slideshow__slide_content">
                <div className="projects__past_role">{slide.role.title}</div>
                <div className="projects__past_name font_themed">{slide.projectName.name}</div>
                <div className="projects__past_desc">{slide.desc}</div>

            </div>
        )
    })
    const cntrls = pastProjectsSlides.map((slide, index)=><li
        className="Slideshow__ctrl"
        key={`slideshow_ctrl_${slide.projectName.name}`}
        onClick={()=>handleSlideChange(index)}></li>)
    return(
        <div className="Slideshow">
            {slidesBg}
            <div className="cover cover_gradient">
                <div className="cover cover_crossed"></div>
                {slidesContent}
            </div>
            <ul>{cntrls}</ul>
        </div>
    )
}
