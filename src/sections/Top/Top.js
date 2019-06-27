import React, {useEffect} from 'react';
import './Top.scss';
import Nav from './../../components/Nav/Nav';

export default function Top (){
    useEffect(handleScroll);
    return(
        <section className="Top">
            <div className="cover bg"></div>
            <div className="cover"></div>
            <Nav/>
            <div className="wrapper">
                <div className="Top__content">
                    <h1>MARC <br/>McBRIDE</h1>
                    <h2>Music Director</h2>
                    <p>Coffee fiend. Dog lover. <br/>Health & Fitness junkie. Traveller.</p>
                </div>

            </div>
        </section>
    )
};
function handleScroll(){
    window.addEventListener('scroll', ()=>{
        let top = document.querySelector('.Top').getBoundingClientRect().top;
        if(top<-150){
            document.querySelector('.Nav').style.background = '#fff';
            document.querySelector('.Nav').style.border = 'solid .2rem #fafafa';
            document.querySelector('.Nav .wrapper').style.color = '#515769';
            // top= (top+100);
            // console.log(top)
            // const opacity = 1+(top /300);
            // console.log('op',opacity)
            // document.querySelector('.Top__content').style.top = top*-2+'px';
            // document.querySelector('.Top__content').style.opacity = opacity;
        }else{
            document.querySelector('.Nav').style.background = 'none';
            document.querySelector('.Nav').style.border = 'none';
            document.querySelector('.Nav .wrapper').style.color = '#fff';
            // document.querySelector('.Top__content').style.top ='0px';
            // document.querySelector('.Top__content').style.opacity = 1;
        }
        if(top<0){
            // top= (top+50);
            const opacity = 1+(top /300);
            console.log('op',opacity)
            document.querySelector('.Top__content').style.top = top*-.5+'px';
            document.querySelector('.Top__content').style.opacity = opacity;
        }else{
            document.querySelector('.Top__content').style.top ='0px';
            document.querySelector('.Top__content').style.opacity = 1;
        }
    })
}
