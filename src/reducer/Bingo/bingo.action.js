import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";


export 	const handleStopClick = (intervalId,setIntervalId,setDisplayedNumberIndex,setGameStopped,setButtonsState,buttonsState) => {
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
export const handleResumeClick = (
    intervalId,
    setDisplayedNumberIndex,
    setCalledNumber,
    setIntervalId,
    setIsPaused,
    setGameStopped,
    setButtonsState,
    setSelectedBingoNumbers,
    selectedBingoNumbers,buttonsState,sayNumber
  ) => {
    if (!intervalId) {
      const id = setInterval(() => {
        const newNumberIndex = getRandomNumber(setSelectedBingoNumbers, selectedBingoNumbers);
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
        stop: false,
        newNumbers: false,
      });
    }
  };
  




export const handlePlayClick = (intervalId, buttonsState,setDisplayedNumberIndex, 
    setCalledNumber,setIntervalId,setGameStopped,
    setShowWinnerModal,setButtonsState, setSelectedBingoNumbers,selectedBingoNumbers, sayNumber) => {
    if (!intervalId) {
        const id = setInterval(() => {
            const newNumberIndex = getRandomNumber(setSelectedBingoNumbers, selectedBingoNumbers);
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

export const getRandomNumber = (setSelectedBingoNumbers,selectedBingoNumbers) => {
    const allNumbersSelected = selectedBingoNumbers.every((number) => number.selectedBallSung);
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

export const handlePauseClick = (intervalId,setIsPaused,setIntervalId, setButtonsState, buttonsState) => {
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

export 	const handleNewCardGame = (setBingoNumbersCardBoard) => {
    const selectedNumbers = getRandomNumbers();
    const newBingoCardBoard = selectedNumbers.map((number) => ({
        id: number,
        img: bingoNumbers[number - 1].img,
        selectedCardBoardBall: false,
    }));
    setBingoNumbersCardBoard(newBingoCardBoard);
};
// codigo referente a la eleccción de las bolas de section y cantado de bingo y linea
export const initializeBingoCardBoard = (setBingoNumbersCardBoard) => {
    const selectedNumbers = getRandomNumbers();
    const newBingoCardBoard = selectedNumbers.map((number) => ({
      id: number,
      img: bingoNumbers[number - 1].img,
      selectedCardBoardBall: false,
    }));
    setBingoNumbersCardBoard(newBingoCardBoard);
  };

  export   const toggleNumberSelection = (number, index, bingoNumbersCardBoard, setBingoNumbersCardBoard) => {
   
    const updatedBingoNumbersCardBoard = bingoNumbersCardBoard.map((bingoNumber) => {
      if (bingoNumber.id === number) {
        return {
          ...bingoNumber,
          selectedCardBoardBall: true
        };
      }
      return bingoNumber;
    });
    setBingoNumbersCardBoard(updatedBingoNumbersCardBoard);
  
    // Verificar si se ha cantado una línea ganadora
   
      checkLineWinner(index);
    
    // Verificar si se ha cantado un bingo
    checkBingoWinner();
  };

  export  const checkLineWinner = (index) => {
    if (!lineSung) {
      setLineWins(prevLineWins => {
        const newLineWins = [...prevLineWins]; // Copia el estado anterior
        if (index <= 4) {
          newLineWins[0] += 1; // Incrementa el contador de la primera línea
        } else if (index <= 9) {
          newLineWins[1] += 1; // Incrementa el contador de la segunda línea
        } else {
          newLineWins[2] += 1; // Incrementa el contador de la tercera línea
        }
        return newLineWins; // Devuelve el nuevo estado actualizado
      });
    }
  };

    
 export const checkBingoWinner = () => {
    const selectedNumbers = bingoNumbersCardBoard
      .filter((bingoNumber) => bingoNumber.selectedCardBoardBall)
      .map((bingoNumber) => bingoNumber.id);
    
    // Verificar si se han seleccionado todos los números únicos
    
    const uniqueSelectedNumbers = new Set(selectedNumbers);
    console.log(uniqueSelectedNumbers.size);
    if (uniqueSelectedNumbers.size === 14) {
      setGameStopped(true)
      setShowWinnerModal("bingo");
      setTimeout(()=>{
        handleStopClick(); 
      },2000)
      // Detener el juego
    }
  };

  