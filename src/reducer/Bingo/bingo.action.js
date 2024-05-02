import confetti from "canvas-confetti";
import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";
import { sayNumber } from "../../utils/FuntionsBingo/sayNumber";

export const handleStopClick = (dispatch) => {
	const gameStopped = true;
	dispatch({ type: "STOP", payload: { gameStopped }, showWinnerModal: "" });
	dispatch({ type: "CLEAN_FINAL_INTERVAL" });
	handleNewCardGame(dispatch);
};
/*-------------------------------------------------------------------------------------------------------------------- */
export const handleResumeClick = (
  dispatch,
  synthesis,
  bingoNumbersCardBoard,
  selectedBingoNumbers,
  sungNumbers,
  lineSung
) => {
  
  /* dispatch({ type: "IS_PAUSED", isPaused:false });  */

  let updatedSelectedBingoNumbers = [...sungNumbers];

  const newIntervalId = setInterval(() => {

      const allNumbersSung = bingoNumbersCardBoard.every(
          (number) => number.selectedBallSung
      );

      if (!allNumbersSung) {
          let newNumberIndex1;
          let selectedNumber;
          do {
              newNumberIndex1 = Math.floor(
                  Math.random() * selectedBingoNumbers.length
              );
              selectedNumber = selectedBingoNumbers[newNumberIndex1];
          } while (selectedBingoNumbers[newNumberIndex1].selectedBallSung);

          selectedNumber.selectedBallSung = true;
          const numberSung = selectedNumber.id;

          sayNumber(numberSung, synthesis);

          const updatedBingoNumbersCardBoard = bingoNumbersCardBoard.map(
              (number, index) => {
                  if (index === newNumberIndex1) {
                      return {
                          ...number,
                          selectedBallSung: true,
                      };
                  }

                  return number;
              }
          );

          const allNumbersClicked = bingoNumbersCardBoard.every(
              (number) => number.selectedCardBoardBall
          );
          console.log(allNumbersClicked);

          updatedSelectedBingoNumbers = updatedSelectedBingoNumbers.filter(
              (number) => number.id !== selectedNumber.id
          );
          console.log(updatedSelectedBingoNumbers.length);

          if (updatedSelectedBingoNumbers.length === 0 && !lineSung) {
              window.clearInterval(newIntervalId);
              dispatch({ type: "CLEAN_INTERVAL", payload: { intervalId3: null } });
              const buttonsState = {
                  play: false,
                  pause: false,
                  resume: false,
                  stop: true,
                  newNumbers: false,
              };
              dispatch({ type: "PAUSE", payload: { buttonsState } });
              if (!lineSung) {
                  setTimeout(() => {
                      alert("No has seleccionado todos los números a tiempo!!!!");
                      const gameStopped = true;
                      dispatch({
                          type: "STOP",
                          payload: { gameStopped },
                          showWinnerModal: "",
                      });
                  }, 3000);
              }
          }

          dispatch({
              type: "UPDATE_DISPLAYED_NUMBER_INDEX",
              payload: {
                  selectedNumber,
                  updatedBingoNumbersCardBoard,
                  allNumbersSung,
                  newIntervalId,
                  updatedSelectedBingoNumbers,
              },
          });
      }
  }, 3000);
  const buttonsState2 = {
      play: false,
      pause: true,
      resume: false,
      stop: false,
      newNumbers: false,
  };
  const intervalId2 = newIntervalId;
  const isPaused2 = false;
  const gameStopped2 = false;

  dispatch({
      type: "RESUME",
      payload: { buttonsState2, intervalId2, isPaused2, gameStopped2 },
  });
};


//************************************************************************************************ */

export const handlePlayClick = (
	dispatch,
	synthesis,
	bingoNumbersCardBoard,
	selectedBingoNumbers,
	isPaused,
	lineSung
) => {
  console.log(isPaused);
	let updatedSelectedBingoNumbers = [...selectedBingoNumbers];
	const newIntervalId = setInterval(() => {
		if (isPaused === false) {
			let newNumberIndex;
			let selectedNumber;
			do {
				newNumberIndex = Math.floor(
					Math.random() * selectedBingoNumbers.length
				);
				selectedNumber = selectedBingoNumbers[newNumberIndex];
			} while (selectedBingoNumbers[newNumberIndex].selectedBallSung);
			console.log(selectedNumber);

			selectedNumber.selectedBallSung = true;
			const numberSung = selectedNumber.id;
			console.log(numberSung, synthesis);

			sayNumber(numberSung, synthesis);

			// Actualizar el estado con el número cantado
			const updatedBingoNumbersCardBoard = bingoNumbersCardBoard.map(
				(number, index) => {
					if (index === newNumberIndex) {
						return {
							...number,
							selectedBallSung: true,
						};
					}
					return number;
				}
			);
			const allNumbersClicked = bingoNumbersCardBoard.every(
				(number) => number.selectedCardBoardBall
			);
			console.log(allNumbersClicked);

			updatedSelectedBingoNumbers = updatedSelectedBingoNumbers.filter(
				(number) => number.id !== selectedNumber.id
			);
			// Verificar si todos los números han sido cantados
			const allNumbersSung = updatedSelectedBingoNumbers.every(
				(number) => number.selectedCardBoardBall
			);
			console.log(updatedSelectedBingoNumbers.length, allNumbersSung);

			if (updatedSelectedBingoNumbers.length === 0) {
			
				dispatch({
					type: "CLEAN_INTERVAL",
					payload: { intervalId3: null, gameStopped: true },
				});
				const buttonsState = {
					play: false,
					pause: false,
					resume: false,
					stop: true,
					newNumbers: false,
				};
				dispatch({ type: "PAUSE", payload: { buttonsState } });
				if (!lineSung) {
					setTimeout(() => {
						alert("No has seleccionado todos los números a tiempo!!!!");
						const gameStopped = true;
						dispatch({
							type: "STOP",
							payload: { gameStopped },
							showWinnerModal: "",
						});
					}, 3000);
				}
			}

			// Devolver un nuevo estado con la información actualizada

			dispatch({
				type: "UPDATE_DISPLAYED_NUMBER_INDEX",
				payload: {
					selectedNumber,
					updatedBingoNumbersCardBoard,
					allNumbersSung,
					newIntervalId,
					updatedSelectedBingoNumbers,
				},
			});
		}
	}, 3000);

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
		},
	});
};

//----------------------------------------------------------------

//-------------------------------------------------
export const handlePauseClick = (dispatch) => {
	/* window.clearInterval(intervalId);
	window.isPaused = true; */
	dispatch({ type: "CLEAN_INTERVAL" });
	const buttonsState = {
		play: false,
		pause: false,
		resume: true,
		stop: true,
		newNumbers: false,
	};
	dispatch({ type: "PAUSE", payload: { buttonsState, isPaused: true } });
};
//----------------------------------------------------------------
export const handleNewCardGame = (dispatch) => {
	const selectedNumbers = getRandomNumbers();
	const newBingoCardBoard2 = selectedNumbers.map((number) => ({
		id: number,
		img: bingoNumbers[number - 1].img,
		selectedCardBoardBall: false,
	}));
	dispatch({ type: "NEW_NUMBERS", payload: { newBingoCardBoard2 } });
	checkSynthesis(dispatch);
};

////////////////////////////////////////////////////////////////

export const toggleNumberSelection = (
	dispatch,
	bingoNumbersCardBoard,
	lineSung,
	lineWins,
	numIndex,
) => {
	const updatedBingoNumbersCardBoard2 = [...bingoNumbersCardBoard];
	if (numIndex >= 0 && numIndex < updatedBingoNumbersCardBoard2.length) {
		updatedBingoNumbersCardBoard2[numIndex].selectedCardBoardBall = true;

		//  actualizar el estado
		dispatch({
			type: "TOGGLE_NUMBER_SELECTION",
			payload: {
				updatedBingoNumbersCardBoard2,
			},
		});
	}

	checkLineWinner(dispatch, lineSung, lineWins, numIndex);
	if (lineSung) {
		checkBingoWinner(dispatch, bingoNumbersCardBoard);
	}
};

//----------------------------------------------------------------

export const checkLineWinner = (
	dispatch,
	lineSung,
	lineWins = [0, 0, 0],
	index
) => {
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
		dispatch({ type: "UPDATE_LINE_WINS", lineWins: newLineWins });

		// Verifica si alguna línea ha alcanzado 5 números marcados
		if (newLineWins.some((count) => count === 5)) {
			const showWinnerModal3 = "line";
			const gameStopped3 = true;
			const lineSung = true;
			handlePauseClick(dispatch);
			setTimeout(() => {
				dispatch({
					type: "LINE_WINNER",
					payload: { showWinnerModal3, gameStopped3, lineSung },
				});
				confetti();
			}, 200);
		}
	}
};
export const checkBingoWinner = (
	dispatch,
	bingoNumbersCardBoard,
	
) => {
	
		const selectedNumbers = bingoNumbersCardBoard
			.filter((bingoNumber) => bingoNumber.selectedCardBoardBall)
			.map((bingoNumber) => bingoNumber.id);

		
		const uniqueSelectedNumbers = new Set(selectedNumbers);
    console.log(uniqueSelectedNumbers.size);
		if (uniqueSelectedNumbers.size === 15) {
			handlePauseClick(dispatch);
			dispatch({
				type: "RESUME",
				payload: {
					buttonsState2: {
						play: true,
						pause: false,
						resume: false,
						stop: false,
						newNumbers: true,
					},
					intervalId2: null,
					isPaused2: false,
					gameStopped2: false,
				},
			});
			dispatch({
				type: "BINGO_WINNER",
				showWinnerModal: "bingo",
				gameStopped: true,
			});
			confetti();
			setTimeout(() => {
				handleStopClick(dispatch);
        initializeBingoCardBoard(dispatch)
			}, 1000);
		}
	
};

//----------------------------------------------------------------
export const checkSynthesis = (dispatch) => {
	const synthesis = window.speechSynthesis;
	dispatch({ type: "INITIALIZE_SYNTHESIS", payload: { synthesis } });
};

export const initializeBingoCardBoard = (dispatch) => {
	handleNewCardGame(dispatch);
	checkSynthesis(dispatch);
};

export const updateSelectedIndexs = (index, selectedIndexs, dispatch) => {
	const updateSelectedIndexes = [...selectedIndexs, index];
	dispatch({ type: "SELECTED_INDEXES", selectedIndexs: updateSelectedIndexes });
};
