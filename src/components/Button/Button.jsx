import { resetGame } from "../../reducer/TicTacToe/tictactoe.action";
import "./Button.css";

const Button = ({ theme, dispatch, text, game, onClick, title, disabled=false }) => {
	
	const handleClick = (event) => {
    // Verificar si el juego es Tic Tac Toe
    if (game === "tictactoe") {
      resetGame(dispatch);
      // Evitar la propagación del evento al contenedor principal
      event.stopPropagation();
    }else{
		onClick()
	}
  };

  return (
    <>
      <button 
	  className={`color-${theme}`} 
	  onClick={handleClick} title={title} 
	  disabled={disabled}
	  style={disabled ? { cursor: "not-allowed" } : {}}
	  >
        {text}
      </button>
    </>
  );
};

export default Button;
