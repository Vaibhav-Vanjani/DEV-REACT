import { useEffect, useState } from 'react';
import '../Css/Slider.css'

export default function Slider()
{   
    const [darkTheme,setDarkTheme] = useState(false);

    useEffect(()=>{
         document.documentElement.setAttribute('data-theme', darkTheme ? 'light' : 'dark');
    },[darkTheme])

    function toggleSlider(event){
        if(!darkTheme){
            event.target.classList.add('slider-container__roller-toggleright');
            event.target.classList.remove('slider-container__roller-toggleleft');
            
        }
        else{
             event.target.classList.remove('slider-container__roller-toggleright');
             event.target.classList.add('slider-container__roller-toggleleft');
            
        }
        setDarkTheme(!darkTheme);
    }

    return (<div className="slider-container">
        <section className="slider-container__section">
            <span className="slider-container__roller"
                onClick={toggleSlider}
            ></span>
        </section>
        </div>)
}