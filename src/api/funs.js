import React from 'react';
export function randomInt(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document. documentElement.clientWidth)
  );
}

export function animateElsOnScroll(elsArr, cls){
    elsArr.forEach((el, index)=>{
        if(isElementInViewport(el)){
            setTimeout(()=>{
                el.classList.add(cls)
            }, index*100)
        }


    })

}

export function addTooltip(e, structureTooltip){
    let target = e.target;
    const tooltip = document.querySelector('.tooltip');
    if(!tooltip){
        //for gretting and controling the tooltip on scroll
        target.closest('.project').classList.add('on_hover');
        let tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip';
         structureTooltip(tooltipEl);

        document.body.append(tooltipEl);

        let coords = target.closest('.project').getBoundingClientRect();
        let top = coords.top + target.offsetHeight ;
        tooltipEl.style.top = top + 'px';
    }


}
export function removeTooltip(e,tooltipEl){
    if (tooltipEl) {
        e.target.closest('.project').classList.remove('on_hover');
        tooltipEl.remove();
     }
}

export function splitWord(word){
    return word.split('').map(letter=><span key={'split_word__'+letter}>{letter}</span>)
}

export function selectNavLink(links){

    let path = window.location.href
                .split('/')
                .filter(el=>el.length>1) //get rid of ""
                .pop();
    if(path.includes('#')){
        path = path.split('#')
                .filter(el=>el.length>1)
                .pop();
    }
    links.forEach(link=>{
        link.classList.remove('selected');
        if(link.textContent.toLowerCase().trim() === path){
            link.classList.add('selected');
        }
    })
}
