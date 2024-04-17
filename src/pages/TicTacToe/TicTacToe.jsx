import "./TicTacToe.css";
import { useContext, useReducer } from "react";
import {
	INITIAL_STATE,
	tictactoeReducer,
} from "../../reducer/TicTacToe/tictactoe.reducer";
import GoBack from "../../components/GoBack/GoBack";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import { ThemeContext } from "../../providers/context/ThemeContext";
import MainTicTac from "../../components/TicTacToeComponents/MainTicTac/MainTicTac";

const TicTacToe = () => {
	const [state, dispatch] = useReducer(tictactoeReducer, INITIAL_STATE);
	const { board, turn, winner} = state;
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`App color-${theme} tictactoe flex-container animated slideInLeft`}>
		<ThemeSwitcher/>
      <MainTicTac theme={theme} dispatch={dispatch} board={board} turn={turn} winner={winner}/>
      <GoBack to={'/'}/>
		</div>
	);
};
export default TicTacToe;





