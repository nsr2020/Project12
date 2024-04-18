import { checkSwal } from "../../utils/FuntionsTicTacToe/swal";
import "./WinnerModal.css";

const WinnerModal = ({ winner, dispatch, game, show }) => {
	return (
    
		<>
    
			{(winner === false ) & (game ==="tictactoe")
				? checkSwal(
						{
							title: "Lo sentimos",
							text: `Has empatado`,
							imgUrl: "/assets/pacmansad.png",
						},
						dispatch
				  )
				: (winner !== null) & (winner !== false) & (game ==="tictactoe")
				? checkSwal(
						{
							title: "Enhorabuena",
							text: `Ha ganado el jugador: ${winner}`,
							imgUrl: "/assets/pacman.png",
						},
						dispatch
				  )
				: null}
     {(show === "line" && game === "bingo")
  ? checkSwal({
      title: "Felicidades",
      text: `Has cantado línea`,
      imgUrl: "/assets/linea.png",
    })
  : null
}

{(show === "bingo" && game === "bingo")
  ? checkSwal({
      title: "Felicidades",
      text: `Has cantado bingo`,
      imgUrl: "/assets/bingoxx.gif",
    })
  : null
}

		</>
          
	);
};

export default WinnerModal;
