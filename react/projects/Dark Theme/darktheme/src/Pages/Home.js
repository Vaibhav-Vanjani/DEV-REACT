import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    return (
        <>
         <div>This is Home Page</div>
         <button onClick={()=>navigate('/About')}>Go to About Page</button>
         {/* <button onClick={()=>navigate(-1)}>Go Back</button> */}
        </>
    )
}