
import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";

export const INITIAL_STATE = {
    bingoNumbersCardBoard:getRandomNumbers(), //los 15 numeros del carton
    matchingNumbers:[], //los numeros que coinciden
    sungNumbers : [], // los numeros que se van guardando en la cuenta atras, los restantes 
    displayedNumberIndex:null,// el indice de la bola cantada 
    intervalId:null, 
    isPaused:false,
    synthesis:null,
    selectedBingoNumbers:[...bingoNumbers], // un array indention al original para guardar los que sean clicados
    showWinnerModal:"", // para enseñar el modal de premio
    buttonsState:{
        play: true,
        pause: false,
        resume: false,
        stop: false,
        newNumbers: true,
    },
    gameStopped:false, // para controlar el fin o no del juego 
    calledNumber:null, //para guardar la bola cantada
    calledNumbers:[], // almacenar las bolas cantadas
    lineSung:false, // controlar si linea se ha cantado o no
    lineWins:[0, 0, 0], // array con las posiciones de las lineas para cantar linea 
} 

export const bingoReducer = (state = INITIAL_STATE, action={}) => {
    switch(action.type) {
        case "STOP":
           
            const {gameStopped} = action.payload;
            return {
                ...INITIAL_STATE,
                gameStopped: gameStopped,
         
            };
            case "PAUSE":
            const {  buttonsState } = action.payload
            return {
                ...state,
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
            const { gameStopped1, showWinnerModal1, buttonsState1 } = action.payload;
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
              
            };
        case "NEW_NUMBERS":
           
            const {newBingoCardBoard2} = action.payload;
            return {
                ...state,
                bingoNumbersCardBoard: newBingoCardBoard2,
            };
       
            case "TOGGLE_NUMBER_SELECTION":
                const { updatedBingoNumbersCardBoard2 } = action.payload;
                return {
                  ...state,
                  bingoNumbersCardBoard: updatedBingoNumbersCardBoard2
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
                    ...state,
                    gameStopped:gameStopped4,
                    showWinnerModal:showWinnerModal4,
                }

        case "UPDATE_DISPLAYED_NUMBER_INDEX":
            const { selectedNumber, updatedBingoNumbersCardBoard, allNumbersSung, 
                newIntervalId, updatedSelectedBingoNumbers, matchingNumbersCopy} = action.payload;
      
            return {
                ...state,
                calledNumber: selectedNumber.id,
                displayedNumberIndex: selectedNumber.id - 1,
                matchingNumbers:matchingNumbersCopy,
                sungNumbers:updatedSelectedBingoNumbers,
                bingoNumbersCardBoard: updatedBingoNumbersCardBoard,
                showWinnerModal: allNumbersSung ? "bingo" : "",
                intervalId: allNumbersSung ? null : newIntervalId,
                calledNumbers: allNumbersSung ? state.calledNumbers : [...state.calledNumbers, selectedNumber.id],
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
            case"CLEAN_INTERVAL":
            clearInterval(state.intervalId)
            return state;
               
            
        default:
            return state;
    }
};