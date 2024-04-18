import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import bingoNumbers from "../../../utils/DataBingo/dataBingo";
import "./MainBingo.css";
import WinnerModal from "../../WinnerModal/WinnerModal";
import { handleNewCardGame, handlePauseClick, handlePlayClick, handleStopClick } from "../../../reducer/Bingo/bingo.action";

const MainBingo = ({ theme }) => {
	const [bingoNumbersCardBoard, setBingoNumbersCardBoard] = useState([]);
	const [selectedNumbers, setSelectedNumbers] = useState([]);

	const [displayedNumberIndex, setDisplayedNumberIndex] = useState(null);
	const [intervalId, setIntervalId] = useState(null);
	const [isPaused, setIsPaused] = useState(false);
	const [synthesis, setSynthesis] = useState(null);
	const [selectedBingoNumbers, setSelectedBingoNumbers] = useState([]);
  const [showWinnerModal, setShowWinnerModal] = useState("");
  const [bingoCalled,setBingoCalled] = useState(false);
	const [buttonsState, setButtonsState] = useState({
		play: true,
		pause: false,
		resume: false,
		stop: false,
		newNumbers: true,
	});
  const [gameStopped, setGameStopped] = useState(false);
  const [calledNumber, setCalledNumber] = useState(null); 
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [lineSung, setLineSung] = useState(false)
  const [lineWins, setLineWins] = useState([0, 0, 0]);

  console.log(typeof setCalledNumber);


  const sayNumber = (number) => {
    if (synthesis) {
        const utterance = new SpeechSynthesisUtterance(number);
        synthesis.speak(utterance);
    }
};
  useEffect(() => {
    // Verificar si la síntesis de voz es compatible con el navegador
    if ("speechSynthesis" in window) {
        setSynthesis(window.speechSynthesis);
    }

    return () => {
        clearInterval(intervalId);
    };

}, [intervalId]);

useEffect(() => {
    setSelectedBingoNumbers(bingoNumbers); // Establecer los números de bingo al cargar el componente
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
						handlePlayClick(intervalId,setDisplayedNumberIndex,setButtonsState,buttonsState,
							setCalledNumber,setIntervalId,setGameStopped,
							setShowWinnerModal,setButtonsState,selectedBingoNumbers,setSelectedBingoNumbers)
					}}
					title="Play"
					disabled={!buttonsState.play}
				/>
				<Button
					theme={theme}
					text="⏸"
					game="bingo"
					onClick={()=>{
						handlePauseClick(intervalId,setIntervalId,setIsPaused,setButtonsState,buttonsState)
					}}
					title="Pause"
					disabled={!buttonsState.pause}
				/>
				<Button
					theme={theme}
					text="🔁"
					game="bingo"
					onClick={()=>{
                        handleResumeClick(buttonsState,intervalId,
							setIntervalId,setIsPaused,setButtonsState,
							setDisplayedNumberIndex,setCalledNumber,
							setGameStopped,selectedBingoNumbers,setSelectedBingoNumbers, sayNumber)
					}}
					title="Resume"
					disabled={!buttonsState.resume}
				/>
				<Button
					theme={theme}
					text="⏹"
					game="bingo"
					onClick={()=>{
						handleStopClick(intervalId,setIntervalId,setGameStopped,setButtonsState,buttonsState)
					}}
					title="Stop"
					disabled={!buttonsState.stop}
				/>
				<Button
					theme={theme}
					text="🎲"
					game="bingo"
					onClick={()=>{
						handleNewCardGame(setBingoNumbersCardBoard)
					}}
					title="New Numbers"
					disabled={!buttonsState.newNumbers}
				/>
			</div>
			<SectionBingo
				theme={theme}
				bingoNumbersCardBoard={bingoNumbersCardBoard}
				setBingoNumbersCardBoard={setBingoNumbersCardBoard}
				selectedNumbers={selectedNumbers}
				setSelectedNumbers={setSelectedNumbers}
        setShowWinnerModal={setShowWinnerModal}
        setBingoCalled={setBingoCalled}
        bingoCalled={bingoCalled}
        gameStopped={gameStopped}
        setGameStopped={setGameStopped}
        calledNumber={calledNumber}
        calledNumbers={calledNumbers}
        setCalledNumbers={setCalledNumbers}
        buttonsState={buttonsState}
        handleStopClick={handleStopClick}
        handlePauseClick={handlePauseClick}
        lineSung={lineSung}
        setLineSung={setLineSung}
        lineWins={lineWins}
        setLineWins={setLineWins}
        
			/>
			<DivBallSung
				index={displayedNumberIndex !== null ? displayedNumberIndex : ""}
			/>
      {console.log("Valor de showWinnerModal:", showWinnerModal, gameStopped)}
			<WinnerModal game="bingo" show={gameStopped && showWinnerModal} />
		</main>
	);
};

export default MainBingo;
