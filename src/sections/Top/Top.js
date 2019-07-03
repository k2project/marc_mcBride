import React, {useEffect} from 'react';
import './Top.scss';
import Nav from './../../components/Nav/Nav';

export default function Top (){
    useEffect(handleScroll);
    return(
        <section className="Top" id="welcome">
            <div className="cover bg"></div>
            <div className="cover"></div>
            <Nav/>
            <div className="wrapper">
                <div className="Top__content">
                    <h1>MARC <br/>McBRIDE</h1>
                    <h2>Music Director</h2>
                    <p>Coffee & Dog lover. <br/>Health & Fitness junkie. Traveller.</p>
                </div>

            </div>
        </section>
    )
};
function handleScroll(){
    window.addEventListener('scroll', ()=>{
        let top = document.querySelector('.Top').getBoundingClientRect().top;

        if(top<0){
            // top= (top+50);
            const opacity = 1+(top /300);
            document.querySelector('.Top__content').style.top = top*-.5+'px';
            document.querySelector('.Top__content').style.opacity = opacity;
        }else{
            document.querySelector('.Top__content').style.top ='0px';
            document.querySelector('.Top__content').style.opacity = 1;
        }
    })
}
