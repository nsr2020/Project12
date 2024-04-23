import bingoNumbers from "../../utils/DataBingo/dataBingo";

export const INITIAL_STATE = {
    bingoNumbersCardBoard:[],
  /*   selectedNumbers:[], */
    displayedNumberIndex:null,

    intervalId:null,
    isPaused:false,
    synthesis:null,
    selectedBingoNumbers:[...bingoNumbers],
    showWinnerModal:"",
  /*   bingoCalled:false, */
    buttonsState:{
        play: true,
        pause: false,
        resume: false,
        stop: false,
        newNumbers: true,
    },
    gameStopped:false,
/*     calledNumber:null, */
    calledNumbers:[],
    lineSung:false,
    lineWins:[0, 0, 0],
}

export const bingoReducer = (state = INITIAL_STATE, action={}) => {
    switch(action.type) {
        case "STOP":
            clearInterval(state.intervalId);
            const {gameStopped} = action.payload;
            return {
                ...INITIAL_STATE,
                gameStopped: gameStopped,
         
            };
            case "PAUSE":
            const { isPaused, buttonsState } = action.payload;
            clearInterval(state.intervalId);
            return {
                ...state,
                isPaused: isPaused,
                buttonsState: {
                    play: buttonsState.play,
                    pause: buttonsState.pause,
                    resume: buttonsState.resume,
                    stop: buttonsState.stop,
                    newNumbers: buttonsState.newNumbers,
                },
            };
        case "RESUME":
            const { buttonsState2, intervalId2, isPaused2, gameStopped2 } = action.payload;
            return {
                ...state,
                buttonsState: {
                    play: buttonsState2.play,
                    pause: buttonsState2.pause,
                    resume: buttonsState2.resume,
                    stop: buttonsState2.stop,
                    newNumbers: buttonsState2.newNumbers,
                },
                intervalId: intervalId2,
                isPaused: isPaused2,
                gameStopped: gameStopped2,
            };
        case "PLAY":
            const { gameStopped1, showWinnerModal1, buttonsState1, updatedSelectedBingoNumbers } = action.payload;
            return {
                ...state,
                gameStopped: gameStopped1,
                showWinnerModal: showWinnerModal1,
                buttonsState: {
                    play: buttonsState1.play,
                    pause: buttonsState1.pause,
                    resume: buttonsState1.resume,
                    stop: buttonsState1.stop,
                    newNumbers: buttonsState1.newNumbers,
                },
                selectedBingoNumbers: updatedSelectedBingoNumbers
            };
        case "NEW_NUMBERS":
            const {newBingoCardBoard2} = action.payload;
            return {
                ...state,
                bingoNumbersCardBoard: newBingoCardBoard2,
            };
       
            case "TOGGLE_NUMBER_SELECTION":
                const {updatedBingoNumbersCardBoard2}= action.payload;
                return {
                    ...state,
                    bingoNumbersCardBoard:updatedBingoNumbersCardBoard2,
                    
                };
                
              
      
        case "LINE_WINNER":
            const { showWinnerModal3, gameStopped3, lineSung, lineWins } = action.payload;
            return {
                ...state,
                showWinnerModal: showWinnerModal3,
                gameStopped: gameStopped3,
                lineSung: lineSung,
                lineWins: lineWins,
            };

            case "BINGO_WINNER":
                const {gameStopped4, showWinnerModal4} = action.payload;
                return{
                    ...INITIAL_STATE,
                    gameStopped:gameStopped4,
                    showWinnerModal:showWinnerModal4,
                }

        case "UPDATE_DISPLAYED_NUMBER_INDEX":
            const { selectedNumber, updatedBingoNumbersCardBoard, allNumbersSelected, newIntervalId } = action.payload;
            if (allNumbersSelected) {
                clearInterval(state.intervalId);
            }
         
            return {
                ...state,
                calledNumber: selectedNumber.id,
                bingoNumbersCardBoard: updatedBingoNumbersCardBoard,
                showWinnerModal: allNumbersSelected ? "bingo" : "",
                intervalId: allNumbersSelected ? null : newIntervalId,
                calledNumbers: allNumbersSelected ? state.calledNumbers : [...state.calledNumbers, selectedNumber.id],
                displayedNumberIndex: selectedNumber.id - 1
            };
        case "INITIALIZE_SYNTHESIS":
            const { synthesis } = action.payload;
            return {
                ...state,
                synthesis: synthesis,
            };
            case"UPDATE_LINE_WINS":
            return {
                ...state,
                lineWins: action.lineWins,
            };
        default:
            return state;
    }
};