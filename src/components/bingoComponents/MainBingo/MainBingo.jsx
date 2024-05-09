import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import "./MainBingo.css";
import WinnerModal from "../../WinnerModal/WinnerModal";
import { handleInfoGame, handlePauseClick, handlePlayClick, handleResetClick} from "../../../reducer/Bingo/bingo.action";


const MainBingo = ({ theme,dispatch,paused, ourRandomNumbers, allNumbers, actualNumber, showModal, selectedNumbers  }) => {

	return (
		<main className={`color-${theme} flex-container board-bingo`}>
			<h1 className={`color-${theme}`}>Bingo</h1>
			<div className={`color-${theme} flex-container div-btns`}>
				<Button
					theme={theme}
					text="▶"
					title="Play"
					onClick={()=>{
						handlePlayClick(dispatch,allNumbers,paused)
					}}
					disabled={paused !== 0}
				/>
				<Button
					theme={theme}
					text="⏸"
					title="Pause"
					onClick={()=>{
						handlePauseClick(dispatch)
					}}
					disabled={paused === 0 || paused === 2 }
				/>
				<Button
					theme={theme}
					text="🎲"
					
					onClick={()=>{
						handleResetClick(dispatch)
					}}
					title="New Numbers"
				/>
					<Button
					theme={theme}
					text="ℹ"
					title="Info about this game"
					onClick={()=>{
						handleInfoGame(dispatch)
					}}
					disabled={paused !== 0 || paused === 2 }
				/>
			</div>
			<SectionBingo
				theme={theme}
				dispatch={dispatch}
				ourRandomNumbers={ourRandomNumbers}
				actualNumber={actualNumber}
				selectedNumbers={selectedNumbers}	
			/>
		
			<DivBallSung
				actualNumber={actualNumber}	
			/>
			<WinnerModal game="bingo" show={showModal} />
		</main>
	);
};

export default MainBingo;
