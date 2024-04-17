import { handleUpdateBoard } from "../../../reducer/TicTacToe/tictactoe.action";
import { TURNS } from "../../../utils/DataTicTacToe/data";
import { checkSwal } from "../../../utils/FuntionsTicTacToe/swal";
import Square from "../Square/Square";
import "./SectionTicTac.css";

const SectionTicTac = ({ board, dispatch, turn, winner,theme }) => {

	return (
		<>
			<section className={`game color-${theme}`}>
				{board.map((square, index) => (
					<Square
						key={index}
						index={index}
						updateBoard={() => {
							handleUpdateBoard(index, dispatch, board, turn, winner);
						}}
						checkSwal={checkSwal}
						board={board}
					>
						{square}
					</Square>
				))}
			</section>
			<section className={`turn`}>
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>
		</>
	);
};

export default SectionTicTac;
