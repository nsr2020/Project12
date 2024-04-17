import Button from "../../Button/Button";
import SectionTicTac from "../SectionTicTac/SectionTicTac";
import WinnerModal from "../../WinnerModal/WinnerModal";
import "./MainTicTac.css";

const MainTicTac = ({ theme, dispatch, board, turn, winner }) => {
	return (
		<main className={`board color-${theme}`}>
			<h1 className={`color-${theme}`}>Tic Tac Toe</h1>
			<Button
				text="Reset Game"
				dispatch={dispatch}
				theme={theme}
				game="tictactoe"
				title="Reset"
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
