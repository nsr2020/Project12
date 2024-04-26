import { useEffect} from "react";
import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import "./MainBingo.css";
import WinnerModal from "../../WinnerModal/WinnerModal";
import { handleNewCardGame, handlePauseClick, handlePlayClick, handleResumeClick, handleStopClick, initializeBingoCardBoard } from "../../../reducer/Bingo/bingo.action";

const MainBingo = ({ theme, dispatch,bingoNumbersCardBoard,displayedNumberIndex,intervalId, showWinnerModal,
	buttonsState,gameStopped,calledNumber,lineSung,lineWins,synthesis,selectedBingoNumbers,sungNumbers,
	isPaused,selectedIndexs
 }) => {

	
   useEffect(() => { 
    initializeBingoCardBoard(dispatch);
  }, []);
 
	return (
		<main className={`color-${theme} flex-container board-bingo`}>
			<h1 className={`color-${theme}`}>Bingo</h1>
			<div className={`color-${theme} flex-container div-btns`}>
				<Button
					theme={theme}
					text="▶"
					game="bingo"
					onClick={()=>{
						handlePlayClick(dispatch, synthesis,bingoNumbersCardBoard, selectedBingoNumbers, sungNumbers,
							 isPaused, lineSung)
					}}
					title="Play"
					disabled={!buttonsState.play}
				/>
				<Button
					theme={theme}
					text="⏸"
					game="bingo"
					onClick={()=>{
						handlePauseClick(dispatch, intervalId)
					}}
					title="Pause"
					disabled={!buttonsState.pause}
				/>
				<Button
					theme={theme}
					text="🔁"
					game="bingo"
					onClick={()=>{
                        handleResumeClick(dispatch, synthesis,bingoNumbersCardBoard, selectedBingoNumbers, 
							sungNumbers, isPaused, lineSung)
					}}
					title="Resume"
					disabled={!buttonsState.resume}
				/>
				<Button
					theme={theme}
					text="⏹"
					game="bingo"
					onClick={()=>{
						handleStopClick(dispatch)
					}}
					title="Stop"
					disabled={!buttonsState.stop}
				/>
				<Button
					theme={theme}
					text="🎲"
					game="bingo"
					onClick={()=>{
						handleNewCardGame(dispatch)
					}}
					title="New Numbers"
					disabled={!buttonsState.newNumbers}
				/>
			</div>
			<SectionBingo
				theme={theme}
				bingoNumbersCardBoard={bingoNumbersCardBoard}
				calledNumber={calledNumber}
				buttonsState={buttonsState}
				lineSung={lineSung}
				lineWins={lineWins}
				dispatch={dispatch}
				intervalId={intervalId}
				selectedIndexs={selectedIndexs}
			/>
		
			<DivBallSung
				index={displayedNumberIndex !== null ? displayedNumberIndex : ""}
				
			/>
			<WinnerModal game="bingo" show={gameStopped && showWinnerModal} />
		</main>
	);
};

export default MainBingo;
