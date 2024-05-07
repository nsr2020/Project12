
import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import "./MainBingo.css";
import WinnerModal from "../../WinnerModal/WinnerModal";
import { handleInfoGame, handleNewCardGame, handlePauseClick, handlePlayClick, handleStopClick} from "../../../reducer/Bingo/bingo.action";
import { useEffect } from "react";

const MainBingo = ({ theme, dispatch,paused,ourRandomNumbers,allNumbers,actualNumber,showModal,selectedNumbers
 }) => {
	useEffect(()=>{
		handleStopClick(dispatch)
	},[])
	return (
		<main className={`color-${theme} flex-container board-bingo`}>
			<h1 className={`color-${theme}`}>Bingo</h1>
			<div className={`color-${theme} flex-container div-btns`}>
				<Button
					theme={theme}
					text="▶"
					game="bingo"
					onClick={()=>{
						handlePlayClick(dispatch,allNumbers,paused)
					}}
					title="Play"
					disabled={paused !== 0}
				/>
				<Button
					theme={theme}
					text="⏸"
					game="bingo"
					onClick={()=>{
						handlePauseClick(dispatch)
					}}
					title="Pause"
					disabled={paused === 0 || paused === 2 || paused === 4}
				/>
				<Button
					theme={theme}
					text="🔁"
					game="bingo"
					onClick={()=>{
                        handlePlayClick(dispatch,allNumbers)
					}}
					title="Resume"
					disabled={ paused === 0 || paused === 3 || paused === 4 || paused === 1}
				/>
				<Button
					theme={theme}
					text="⏹"
					game="bingo"
					onClick={()=>{
						handleStopClick(dispatch)
					}}
					title="Stop"
					disabled={paused === 0 }
					
				/>
				<Button
					theme={theme}
					text="🎲"
					game="bingo"
					onClick={()=>{
						handleNewCardGame(dispatch)
					}}
					title="New Numbers"
					disabled={paused !==0}
				/>
					<Button
					theme={theme}
					text="ℹ"
					game="bingo"
					onClick={()=>{
						handleInfoGame(dispatch)
					}}
					title="Info about this game"
					disabled={paused !==0}
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
