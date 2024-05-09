import Button from "../../Button/Button";
import SectionTicTac from "../SectionTicTac/SectionTicTac";
import WinnerModal from "../../WinnerModal/WinnerModal";
import "./MainTicTac.css";
import { resetGame } from "../../../reducer/TicTacToe/tictactoe.action";

const MainTicTac = ({ theme, dispatch, board, turn, winner }) => {
	return (
		<main className={`board color-${theme}`}>
			<h1 className={`color-${theme}`}>Tic Tac Toe</h1>
			<Button
				theme={theme}
				text="Reset Game"
				title="Reset"
				onClick={() =>{resetGame(dispatch)}}
			/>
			<SectionTicTac
				board={board}
				dispatch={dispatch}
				turn={turn}
				winner={winner}
				theme={theme}
			/>
			<WinnerModal winner={winner} dispatch={dispatch} game="tictactoe"/>
		</main>
	);
};

export default MainTicTac;
