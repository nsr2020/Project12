
import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";
import { sayNumber } from "../../utils/FuntionsBingo/sayNumber";


export 	const handleStopClick = (dispatch) => { 
    const gameStopped = true;
    dispatch({ type: "STOP", payload: {gameStopped} });
    handleNewCardGame(dispatch)
}
/*-------------------------------------------------------------------------------------------------------------------- */
export const handleResumeClick = ( dispatch, synthesis,bingoNumbersCardBoard, selectedBingoNumbers) => {
  let updatedSelectedBingoNumbers = []
  const newIntervalId = setInterval(() => {
    const allNumbersSelected = bingoNumbersCardBoard.every(number => number.selectedBallSung);

    if (!allNumbersSelected) {
        let newNumberIndex1;
        let selectedNumber;
        do {
          newNumberIndex1 = Math.floor(Math.random() * selectedBingoNumbers.length);
          selectedNumber = selectedBingoNumbers[newNumberIndex1];
     
        } while (selectedBingoNumbers[newNumberIndex1].selectedBallSung);

        selectedNumber.selectedBallSung = true;
        const numberSung = selectedNumber.id;
        
        console.log(numberSung, synthesis);

        sayNumber(numberSung, synthesis);

        const updatedBingoNumbersCardBoard = bingoNumbersCardBoard.map((number, index) => {
          if (index === newNumberIndex1) {
              return {
                  ...number,
                  selectedBallSung: true
              };
          }
      
          return number;
      });
      selectedBingoNumbers = selectedBingoNumbers.filter(number => number.id !== selectedNumber.id);
      if (selectedBingoNumbers.length === 0) {
        clearInterval(newIntervalId);
        setTimeout(()=>{
          alert("No has seleccionado todos los números a tiempo!!!!")
          const gameStopped = true;
          dispatch({ type: "STOP", payload: {gameStopped} });
          handleNewCardGame(dispatch)
        },4000)
      }
      
        // Devolver un nuevo estado  con la información actualizada
        dispatch({type:"UPDATE_DISPLAYED_NUMBER_INDEX", payload:{selectedNumber,updatedBingoNumbersCardBoard,
          allNumbersSelected, newIntervalId }})
    } 
}, 2500);
   updatedSelectedBingoNumbers = selectedBingoNumbers;
    const buttonsState2 ={
      play: false,
      pause: true,
      resume: false,
      stop: false,
      newNumbers: false,
    }
    const intervalId2 = newIntervalId
    const isPaused2 = false
    const gameStopped2 = false

        dispatch({ type: "RESUME", payload: {buttonsState2, intervalId2, isPaused2, gameStopped2, updatedSelectedBingoNumbers} })}

  //************************************************************************************************ */
  
  export const handlePlayClick = (dispatch, synthesis,bingoNumbersCardBoard, selectedBingoNumbers) => {
    
    let updatedSelectedBingoNumbers = [];
    const newIntervalId = setInterval(() => {
      let newNumberIndex;
      let selectedNumber;
      do {
        newNumberIndex = Math.floor(Math.random() * selectedBingoNumbers.length);
        selectedNumber = selectedBingoNumbers[newNumberIndex];
  
      } while (selectedBingoNumbers[newNumberIndex].selectedBallSung);

      selectedNumber.selectedBallSung = true;
      const numberSung = selectedNumber.id;
      console.log(numberSung, synthesis);

      sayNumber(numberSung, synthesis);
      
      // Actualizar el estado con el número cantado
      const updatedBingoNumbersCardBoard = bingoNumbersCardBoard.map((number, index) => {
        if (index === newNumberIndex) {
          return {
            ...number,
            selectedBallSung: true
          };
        }
        return number;
      });
      selectedBingoNumbers = selectedBingoNumbers.filter(number => number.id !== selectedNumber.id);
    
      if (selectedBingoNumbers.length === 0) {
        clearInterval(newIntervalId);
        setTimeout(()=>{
          alert("No has seleccionado todos los números a tiempo!!!!")
          const gameStopped = true;
          dispatch({ type: "STOP", payload: {gameStopped} });
          handleNewCardGame(dispatch)
        },4000)
      }
      
      // Verificar si todos los números han sido cantados
      const allNumbersSelected = updatedBingoNumbersCardBoard.every(number => number.selectedCardBoardBall);
      
      // Devolver un nuevo estado con la información actualizada
      dispatch({
        type: "UPDATE_DISPLAYED_NUMBER_INDEX",
        payload: {
          selectedNumber,
          updatedBingoNumbersCardBoard,
          allNumbersSelected,
          newIntervalId,
          
        }
      });
    }, 2500);
    updatedSelectedBingoNumbers = selectedBingoNumbers
    const gameStopped1 = false;
    const showWinnerModal1 = "";
    const buttonsState1 = {
      play: false,
      pause: true,
      resume: false,
      stop: true,
      newNumbers: false,
    };
    
    dispatch({
      type: "PLAY",
      payload: {
        gameStopped1,
        showWinnerModal1,
        buttonsState1,
        updatedSelectedBingoNumbers
      }
    });
  };
  
  
    //----------------------------------------------------------------

//-------------------------------------------------
export const handlePauseClick = (dispatch) => {
  const isPaused = true
  const buttonsState = {
    play: false,
    pause: false,
    resume: true,
    stop: true,
    newNumbers: false,
  }
    dispatch({type: "PAUSE", payload:{isPaused, buttonsState}});
};
//----------------------------------------------------------------
export 	const handleNewCardGame = (dispatch) => {
  
  const selectedNumbers = getRandomNumbers();
  const newBingoCardBoard2 = selectedNumbers.map((number) => ({
      id: number,
      img: bingoNumbers[number - 1].img,
      selectedCardBoardBall: false,
  }));
   dispatch({type: "NEW_NUMBERS" , payload:{newBingoCardBoard2}})
   checkSynthesis(dispatch)
};

////////////////////////////////////////////////////////////////

export const toggleNumberSelection = (dispatch, bingoNumbersCardBoard, lineSung, lineWins, index) => {
  const updatedBingoNumbersCardBoard2 = [...bingoNumbersCardBoard];
  if (index >= 0 && index < updatedBingoNumbersCardBoard2.length) {
    // Verifica si la propiedad selectedCardBoardBall existe en el objeto
    if (updatedBingoNumbersCardBoard2[index].hasOwnProperty('selectedCardBoardBall')) {
        // Crea una copia del array de bingoNumbersCardBoard
        updatedBingoNumbersCardBoard2[index].selectedCardBoardBall = true;

        // Despacha una acción para actualizar el estado
        dispatch({
            type: "TOGGLE_NUMBER_SELECTION",
            payload: {
              updatedBingoNumbersCardBoard2
            }
        });
    } else {
        console.error(`El objeto en el índice ${index} no tiene la propiedad 'selectedCardBoardBall'.`);
    }
} else {
    console.error(`El índice ${index} está fuera del rango válido.`);
}

// Después de actualizar el estado, puedes realizar otras operaciones como verificar las líneas y el bingo

  checkLineWinner(dispatch, lineSung, lineWins, index);
  if (lineSung){
    checkBingoWinner(dispatch, updatedBingoNumbersCardBoard);
  }
}




 //----------------------------------------------------------------
  export const initializeBingoCardBoard = (dispatch) => {
    handleNewCardGame(dispatch)
    checkSynthesis(dispatch)
    };
//----------------------------------------------------------------
export const checkLineWinner = (dispatch, lineSung, lineWins=[0,0,0], index) => {

  if (!lineSung) {
    const newLineWins = [...lineWins]; // Copia el estado anterior
    if (index <= 4) {
      newLineWins[0] += 1; // Incrementa el contador de la primera línea
    } else if (index <= 9) {
      newLineWins[1] += 1; // Incrementa el contador de la segunda línea
    } else {
      newLineWins[2] += 1; // Incrementa el contador de la tercera línea
    }
    // Actualiza lineWins
    dispatch({ type: "UPDATE_LINE_WINS", lineWins: newLineWins  });
    
    // Verifica si alguna línea ha alcanzado 5 números marcados
    if (newLineWins.some(count => count === 5)) {
      const showWinnerModal3 = "line";
      const gameStopped3 = true;
      const lineSung = true;
      handlePauseClick(dispatch);
      setTimeout(()=>{
        dispatch({ type: "LINE_WINNER", payload: { showWinnerModal3, gameStopped3, lineSung } });
      },200) 
    }
  }
};
export const checkBingoWinner = (dispatch, bingoNumbersCardBoard) => {
    const selectedNumbers = bingoNumbersCardBoard
      .filter((bingoNumber) => bingoNumber.selectedCardBoardBall)
      .map((bingoNumber) => bingoNumber.id);
    
    // Verificar si se han seleccionado todos los números únicos
    const uniqueSelectedNumbers = new Set(selectedNumbers);
    if (uniqueSelectedNumbers.size === 14) {
      setTimeout(()=>{
        const gameStopped4 = true;
        const showWinnerModal4 = "bingo";
        dispatch({type: 'BINGO_WINNER', payload:{gameStopped4,showWinnerModal4} })
      },1000)
      setTimeout(()=>{
        handleStopClick(dispatch); 
      },2000)
      // Detener el juego
    }
  };

//----------------------------------------------------------------
  export const checkSynthesis = (dispatch) =>{
    const synthesis = window.speechSynthesis;
    dispatch({type:"INITIALIZE_SYNTHESIS", payload:{synthesis}})
  }


    



  