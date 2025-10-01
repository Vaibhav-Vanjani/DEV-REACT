import { useNavigate } from "react-router-dom";

export default function About(){
    const navigate = useNavigate();
    return (
        <>
         <div>This is About Page</div>
         <button onClick={()=>navigate('/Contact')}>Go to Contact Page</button>
         <button onClick={()=>navigate(-1)}>Go Back</button>
        
        </>
    )
}