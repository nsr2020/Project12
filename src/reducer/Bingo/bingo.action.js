import confetti from "canvas-confetti";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";
import { sayNumber } from "../../utils/FuntionsBingo/sayNumber";

let interval = null
let synthesis = window.speechSynthesis;
let lineSung= false
let lineWins= [0, 0, 0]

export const handleResetClick = (dispatch) => {
  clearInterval(interval);
  lineSung = false;
  lineWins = [0, 0, 0];
  const randomIndexes = getRandomNumbers(); 
  const newBingoCardBoard2 = randomIndexes.map(({ id, img }) => ({ id, img }));
  dispatch({ type: "NEW_NUMBERS", payload: { newBingoCardBoard2 } });
  dispatch({type:"RESET"})
 
};
export const handlePlayClick = (dispatch,allNumbers, paused) => {
          if(paused ===0) {
            dispatch({type:"PLAY"})
          }else{
            dispatch({type:"RESUME"})
          }
        let updatedBingoNumbers = [...allNumbers];
        interval = setInterval(() => {
        let newNumberIndex;
        let selectedNumber
				newNumberIndex = Math.floor(
					Math.random() * updatedBingoNumbers.length
				);
				selectedNumber = updatedBingoNumbers[newNumberIndex];
        dispatch({type: "UPDATE_SUNG_NUMBER", payload: {actualNumber:selectedNumber.id}})
        sayNumber(selectedNumber.id, synthesis)
        updatedBingoNumbers.splice(newNumberIndex, 1);
        dispatch({type:"REMOVE_NUMBER_FROM_ALLNUMBERS", payload:{allNumbers:[...updatedBingoNumbers]}})
        if(updatedBingoNumbers.length === 0 ){
          clearInterval(interval);
          dispatch({type:"NOT_ALL_NUMBERS_SELECTED"})
        }
	     }, 4000);
};

export const handlePauseClick = (dispatch) => {
  dispatch({ type: "PAUSE" });
  clearInterval(interval);

};

export const toggleNumberSelection = (dispatch, index, selectedNumbers) => {
  const updatedSelectedNumbers = [...selectedNumbers];
  updatedSelectedNumbers[index] = !updatedSelectedNumbers[index]; 
  console.log(updatedSelectedNumbers[index]);

  dispatch({ type: "UPDATE_SELECTED_NUMBERS", payload: { selectedNumbers: updatedSelectedNumbers } });

	checkLineWinner(dispatch, index);

  checkBingoWinner(dispatch);
};

export const checkLineWinner = (	dispatch,
	index,
  
) => {
		if (index >= 0 && index <= 4) {
			lineWins[0] += 1; // Incrementa el contador de la primera línea
			
		} 
		if (index >= 5 && index <= 9) {
			lineWins[1] += 1; // Incrementa el contador de la segunda línea
			
		} 
		if (index >= 10 && index <= 14) {
			lineWins[2] += 1; // Incrementa el contador de la tercera línea
			
		} 
		if (lineWins.some((count) => count === 5) && lineSung === false) {
			clearInterval(interval)
      dispatch({ type: "PAUSE" });
			setTimeout(() => {
				dispatch({
					type: "LINE_WINNER",
				});
				confetti();
        lineSung = true
			}, 200);
      
		}
  setTimeout(()=>{
    dispatch({type:"CLEAN_MODAL"})
  },1000)
};

export const checkBingoWinner = (dispatch) => {
  let lineWinsSum = lineWins[0] + lineWins[1] + lineWins[2]
 
  if (lineWinsSum === 15) {
    dispatch({
      type: "BINGO_WINNER",
    });
    confetti();
    setTimeout(() => {
      handleResetClick(dispatch);
    }, 500);
  }
};
export const handleInfoGame = (dispatch) =>{
  dispatch({type:"INFO_GAME"})
  setTimeout(()=>{
    dispatch({type:"CLEAN_MODAL"})
  },200)
}


