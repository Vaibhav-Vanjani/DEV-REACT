import './App.css';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Star from './components/Star';



function App() {
  return (
    <div>
     <Star starCount={6}/>
    </div>
  );
}

export default App;
