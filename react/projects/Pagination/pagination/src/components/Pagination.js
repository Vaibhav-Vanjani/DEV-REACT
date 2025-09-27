import { useEffect, useState } from "react";
import '../css/Pagination.css'

export default function Pagination()
{   

    const [showPage,setShowPage] = useState({pageId:1,limitId:5});
    const [arr,setArr] = useState([]);
    const [loading,setLoading] = useState(false);
    const url = `https://picsum.photos/v2/list?page=${showPage.pageId}&limit=${showPage.limitId}`;

    useEffect(()=>{
        async function fetchData()
        {
        try{
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setArr(data);
            console.log("inside pagination")
            setLoading(false);
        }
        catch(error){
            console.log("Error in fetch picsum page url in Pagination !");
            setLoading(false);
            throw error;
        }
    }

    fetchData()

},[showPage]);

    return (<div className="parent">
        {
        loading ?
        (<div className="loading">Loading... </div>)
        :
        (
        <div className="image-container">
            {
               arr && arr.map((ele,index)=>{
                    console.log(ele);

                    return (                  
                    <div key={`${ele.id}+${index}`} className="current-image">
                        <div >
                            <img
                            src={`https://picsum.photos/id/${ele.id}/300/200`}
                            alt={`Image ${index}`}
                            className="fade-in"
                            onLoad={(e) => e.target.classList.add("loaded")}
                            />

                        </div>
                       
                    </div>
                )
                })

                 
            }
        </div>
        )
        }
             <div className="btn-holder"> 
             
              <span className="btn" 
                 onClick={() =>
                    setShowPage(prev =>
                        prev.pageId === 1
                        ? prev
                        : { ...prev, pageId: prev.pageId - 1 }
                    )
                    }
              >
              {'<'}</span>
             
              <span className="btn" 
             onClick={() =>
                setShowPage(prev =>
                    ({ ...prev, pageId: prev.pageId + 1 })
                )
                }
              >{'>'}</span>
            </div>  
    </div>
        
    )
}