import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import bingoNumbers from "../../../utils/DataBingo/dataBingo";
import "./MainBingo.css";
import { getRandomNumbers } from "../../../utils/FuntionsBingo/getRandomNumbersForCardBoard";
import WinnerModal from "../../WinnerModal/WinnerModal";

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

	useEffect(() => {
		// Verificar si la síntesis de voz es compatible con el navegador
		if ("speechSynthesis" in window) {
			setSynthesis(window.speechSynthesis);
		}
	}, []);

	const handlePauseClick = () => {
		clearInterval(intervalId);
		setIntervalId(null);
		setIsPaused(true);
		setButtonsState({
			...buttonsState,
			play: false,
			pause: false,
			resume: true,
			stop: true,
			newNumbers: false,
		});
	};
	const handleResumeClick = () => {
		if (!intervalId) {
			const id = setInterval(() => {
				const newNumberIndex = getRandomNumber();
				if (newNumberIndex !== null) {
					// Verificar si newNumberIndex no es null
					setDisplayedNumberIndex(newNumberIndex);
					sayNumber(selectedBingoNumbers[newNumberIndex].id);
          setCalledNumber(selectedBingoNumbers[newNumberIndex].id); // Cambiado de bingoNumbers a selectedBingoNumbers
				} else {
					clearInterval(id); // Detener el intervalo si todos los números se han cantado
				}
			}, 2500);
			setIntervalId(id);
			setIsPaused(false);
      setGameStopped(false);
			setButtonsState({
				...buttonsState,
				play: false,
				pause: true,
				resume: false,
				stop: true,
				newNumbers: false,
			});
		}
	};

	const handleStopClick = () => {
		clearInterval(intervalId);
		setIntervalId(null);
		setDisplayedNumberIndex(null);
    setGameStopped(false);
		setButtonsState({
			...buttonsState,
			play: true,
			pause: false,
			resume: false,
			stop: false,
			newNumbers: true,
		});
    handleNewCardGame()
	};

	const handlePlayClick = () => {
		console.log("he hecho clic");
		if (!intervalId) {
			const id = setInterval(() => {
				const newNumberIndex = getRandomNumber();
				if (newNumberIndex !== null) {
					// Verificar si newNumberIndex no es null
					setDisplayedNumberIndex(newNumberIndex);
					sayNumber(selectedBingoNumbers[newNumberIndex].id);
          setCalledNumber(selectedBingoNumbers[newNumberIndex].id); // Cambiado de bingoNumbers a selectedBingoNumbers
				} else {
					clearInterval(id); // Detener el intervalo si todos los números se han cantado
				}
			}, 2500); // Cambia el intervalo de tiempo según tu preferencia
			setIntervalId(id);
      setGameStopped(false)
      setShowWinnerModal("")
			setButtonsState({
				...buttonsState,
				play: false,
				pause: true,
				resume: false,
				stop: true,
				newNumbers: false,
			});
		}
	};

	const handleNewCardGame = () => {
		const selectedNumbers = getRandomNumbers();
		const newBingoCardBoard = selectedNumbers.map((number) => ({
			id: number,
			img: bingoNumbers[number - 1].img,
			selectedCardBoardBall: false,
		}));
		setBingoNumbersCardBoard(newBingoCardBoard);
	};

	const getRandomNumber = () => {
		const allNumbersSelected = selectedBingoNumbers.every(
			(number) => number.selectedBallSung
		);
		if (allNumbersSelected) {
			return null;
		}

		let randomNumber;
		do {
			randomNumber = Math.floor(Math.random() * selectedBingoNumbers.length);
		} while (selectedBingoNumbers[randomNumber].selectedBallSung);

		// Crear una copia actualizada de los números de bingo seleccionados
		const updatedSelectedBingoNumbers = [...selectedBingoNumbers];
		updatedSelectedBingoNumbers[randomNumber].selectedBallSung = true;

		// Actualizar el estado con la nueva copia
		setSelectedBingoNumbers(updatedSelectedBingoNumbers);
		console.log(selectedBingoNumbers[randomNumber].id);
		return randomNumber;
    
	};

	const sayNumber = (number) => {
		if (synthesis) {
			const utterance = new SpeechSynthesisUtterance(number);
			synthesis.speak(utterance);
		}
	};

	useEffect(() => {
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
					onClick={handlePlayClick}
					title="Play"
					disabled={!buttonsState.play}
				/>
				<Button
					theme={theme}
					text="⏸"
					game="bingo"
					onClick={handlePauseClick}
					title="Pause"
					disabled={!buttonsState.pause}
				/>
				<Button
					theme={theme}
					text="🔁"
					game="bingo"
					onClick={handleResumeClick}
					title="Resume"
					disabled={!buttonsState.resume}
				/>
				<Button
					theme={theme}
					text="⏹"
					game="bingo"
					onClick={handleStopClick}
					title="Stop"
					disabled={!buttonsState.stop}
				/>
				<Button
					theme={theme}
					text="🎲"
					game="bingo"
					onClick={handleNewCardGame}
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
