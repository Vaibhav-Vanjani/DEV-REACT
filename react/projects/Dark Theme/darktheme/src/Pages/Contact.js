import { useNavigate } from "react-router-dom";

export default function Contact(){
    const navigate = useNavigate();
    return (
        <>
         <div>This is Contact Page</div>
         <button onClick={()=>navigate(-1)}>Go Back</button>
        </>
    )
}