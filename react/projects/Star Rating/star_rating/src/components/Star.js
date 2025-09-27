import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import '../css/star.css'

export default function Star({starCount}){


    // mouseover to collect till current i want to fill
    // previous mouseclick - how much were filled initialy
    // filled star == state

    // console.log(starCount);
    const arr = [...Array(starCount)];
    // console.log(arr);
    const [hoverTill,setHoverTill] = useState({
        filledStart:-1,
        hoverTill:-1,
    });

    function starHoverHandler(index){
        // console.log("starHoverHandler");
        setHoverTill(prev=>({...prev,hoverTill:index}));
    }

    function resetFilledStarHandler(){
        // console.log("resetFilledStarHandler");
        setHoverTill(prev=>({...prev,hoverTill:prev.filledStart}));
    }
    
    function fillOverHandler(filledStart){
        // console.log("fillOverHandler");
        setHoverTill(prev=>({...prev,filledStart:filledStart,hoverTill:filledStart}));
    }

    return (<>
        <div className="star-container">        
            {
                arr.map((ele,index)=>{
                return <div key={index}>

                    {
                        hoverTill.hoverTill>=index 
                        ?
                        (
                        <FaStar 
                        className="star"
                        onMouseEnter={()=>starHoverHandler(index)}
                        onMouseLeave={()=>resetFilledStarHandler()}
                        onClick={()=>fillOverHandler(index)}
                        />
                        )    
                             :
                        (
                        <CiStar 
                        className="star"
                        onMouseEnter={()=>starHoverHandler(index)}
                        onMouseLeave={()=>resetFilledStarHandler()}
                        onClick={()=>fillOverHandler(index)}
                        />
                        )    

                    }
                    
                    
                    </div>
                })
            }
        </div>

    </>)
}