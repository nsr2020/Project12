
import { useState } from 'react';
import './StartPage.css';
import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const [addClass, setAddClass] = useState(false)

  const navigate = useNavigate();

  const handleClick = (game) => {
    setAddClass(true);
    setTimeout(() => {
      if(game === "ticTacToe"){
        navigate("/ticTacToe");
      } else {
        navigate("/bingo");
      }
    }, 2000);
  };
  return (
    <div className={`App startpage flex-container ${addClass && "animated lightSpeedOut"}`}>
        <h1 className="animated rollIn">Games Hub</h1>
    <div className=' imgwrp flex-container animated fadeInUp'>
   
        <img onClick={()=>{
          handleClick("ticTacToe")
        }} className='tictac animated fadeInRight' src="/assets/tic-tac-toe.png" alt="" />
        <img onClick={()=>{
          handleClick("bingo")
        }}  className='bingo animated fadeInLeft' src="/assets/bingo.png" alt="" />
     
    </div>
 
    </div>
  );
  
};
export default StartPage;