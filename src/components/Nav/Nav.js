import React,{useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
// import {NavHashLink} from 'react-router-hash-link';

import './Nav.scss';

import facebook from './../../media/icons/facebook.png';
import twitter from './../../media/icons/twitter.png';
import instagram from './../../media/icons/instagram.png';
import linkedin from './../../media/icons/linkedin.png';

import {selectNavLink} from './../../api/funs'

export default function Page (props){
    useEffect(handleScroll)
    return(
        <div className="Nav">
            <div className="wrapper">

                <div className="Nav__brand" onClick={()=>window.scrollTo(0,0)}>Marc McBride</div>
                <div className="Nav__pages">
                    <a href="#about">About</a>
                    <a href="#media">Media</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}
function handleScroll(){
    window.addEventListener('scroll', ()=>{
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.Nav a');
        const d = document.documentElement;
        const offset = d.scrollTop + window.innerHeight;
        const height = d.offsetHeight;

        sections.forEach(section=>{
            const top = section.getBoundingClientRect().top;
            //scroll to top
            if(document.querySelector('.Top').getBoundingClientRect().top>-100){
                navLinks.forEach(a=>{
                        a.style.color = '#fff';

                })

            }else if(document.querySelector('.Top').getBoundingClientRect().top<-150 && document.querySelector('.About').getBoundingClientRect().top>250){
                navLinks.forEach(a=>{
                    a.style.color = '#515769';

                })

            }
            if(top<50 && top >-50){
                const id = section.getAttribute('id');
                if(id){ //nav section has no id
                    navLinks.forEach(a=>{
                        if(a.textContent.toLowerCase() === id.toLowerCase()){
                            a.style.color = 'crimson';
                        }else{
                            a.style.color = '#515769';

                        }
                    })

                }
            }

            //scroll to bottom
             if (offset > height-100) {
                 navLinks.forEach((a,i,arr)=>{
                         a.style.color = '#515769';
                         arr[arr.length-1].style.color = 'crimson';
                 })
            }
        })

    })
}
