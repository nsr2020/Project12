import {  useNavigate } from "react-router-dom"
import "./GoBack.css"


const GoBack = ({to}) => {
  const navigate = useNavigate();

  const handleClick = () => {
  
      navigate(to)
  
  };
  return (
    <div className="back">
        <img 
        onClick={handleClick}
        src="/assets/atras.png" 
        alt="atras" />
    </div>
    
  )
}

export default GoBack