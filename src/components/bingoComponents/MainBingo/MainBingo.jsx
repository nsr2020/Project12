import { useEffect} from "react";
import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import "./MainBingo.css";
import WinnerModal from "../../WinnerModal/WinnerModal";
import { checkSynthesis, handleNewCardGame, handlePauseClick, handlePlayClick, handleResumeClick, handleStopClick, initializeBingoCardBoard } from "../../../reducer/Bingo/bingo.action";


const MainBingo = ({ theme, dispatch ,bingoNumbersCardBoard,displayedNumberIndex,intervalId,
  showWinnerModal, buttonsState, gameStopped,calledNumbers, lineSung, lineWins, synthesis, selectedBingoNumbers }) => {



  useEffect(() => {
     
    return () => {
        clearInterval(intervalId);
    };
}, [intervalId]);

   useEffect(() => { 
    initializeBingoCardBoard(dispatch);
  }, []);
 
/*   useEffect(() => {
    checkLineWinner(dispatch)
  }, [lineWins, lineSung]); */


	return (
		<main className={`color-${theme} flex-container board-bingo`}>
			<h1 className={`color-${theme}`}>Bingo</h1>
			<div className={`color-${theme} flex-container div-btns`}>
				<Button
					theme={theme}
					text="▶"
					game="bingo"
					onClick={()=>{
						handlePlayClick(dispatch, synthesis,bingoNumbersCardBoard, selectedBingoNumbers)
					}}
					title="Play"
					disabled={!buttonsState.play}
				/>
				<Button
					theme={theme}
					text="⏸"
					game="bingo"
					onClick={()=>{
						handlePauseClick(dispatch)
					}}
					title="Pause"
					disabled={!buttonsState.pause}
				/>
				<Button
					theme={theme}
					text="🔁"
					game="bingo"
					onClick={()=>{
                        handleResumeClick(dispatch, synthesis,bingoNumbersCardBoard, selectedBingoNumbers)
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
				
				calledNumbers={calledNumbers}
				buttonsState={buttonsState}
				lineSung={lineSung}
				lineWins={lineWins}
				dispatch={dispatch}
			/>
		
			<DivBallSung
				index={displayedNumberIndex !== null ? displayedNumberIndex : ""}
				
			/>
      {console.log("Valor de showWinnerModal:", showWinnerModal, gameStopped, )}
			<WinnerModal game="bingo" show={gameStopped && showWinnerModal} />
		</main>
	);
};

export default MainBingo;
