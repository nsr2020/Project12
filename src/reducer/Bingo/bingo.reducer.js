import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { checkBingoWinner, checkLineWinner } from "./bingo.action";

export const INITIAL_STATE = {
    bingoNumbersCardBoard:[],
    selectedNumbers:[],
    displayedNumbersIndex:null,
    intervalId:null,
    isPaused:false,
    synthesis:null,
    selectedBingoNumbers:[],
    showWinnerModal:"",
    bingoCalled:false,
    buttonsState:{
        play: true,
        pause: false,
        resume: false,
        stop: false,
        newNumbers: true,
    },
    gameStopped:false,
    calledNumber:null,
    calledNumbers:[],
    lineSung:false,
    lineWins:[0, 0, 0],
}

export const bingoReducer = (state, action) => {
    switch(action.type) {
        case "STOP":
            return {
                ...state,
                gameStopped: true,
                isPaused: false,
                buttonsState: {
                    play: true,
                    pause: false,
                    resume: false,
                    stop: false,
                    newNumbers: true,
                },
                displayedNumbersIndex: null,
                intervalId: null,
            };
        case "PAUSE":
            return {
                ...state,
                isPaused: true,
                buttonsState: {
                    play: false,
                    pause: true,
                    resume: false,
                    stop: false,
                    newNumbers: true,
                },
            };
        case "RESUME":
            return {
                ...state,
                gameStopped: false,
                isPaused: false,
                buttonsState: {
                    play: false,
                    pause: true,
                    resume: false,
                    stop: false,
                    newNumbers: false,
                },
            };
        case "PLAY":
            const id = setInterval(() => {
                const selectedNumbers = getRandomNumbers();
                const newBingoCardBoard = selectedNumbers.map((number) => ({
                    id: number,
                    img: bingoNumbers[number - 1].img,
                    selectedCardBoardBall: false,
                }));
                setBingoNumbersCardBoard(newBingoCardBoard);
            }, 2500);
            return {
                ...state,
                intervalId: id,
                gameStopped: false,
                showWinnerModal: "",
                buttonsState: {
                    play: false,
                    pause: true,
                    resume: false,
                    stop: true,
                    newNumbers: false,
                },
            };
        case "INITIALIZE_BOARD":
            initializeBingoCardBoard(setBingoNumbersCardBoard);
            return {
                ...state,
                // Aquí puedes actualizar otras propiedades del estado si es necesario
            };
            case "TOGGLE_NUMBER_SELECTION":
                const { number, index } = action.payload;
                const updatedBingoNumbersCardBoard = state.bingoNumbersCardBoard.map((bingoNumber) => {
                    if (bingoNumber.id === number) {
                        return {
                            ...bingoNumber,
                            selectedCardBoardBall: true
                        };
                    }
                    return bingoNumber;
                });
                checkLineWinner(index, state.lineSung, state.setLineWins);
                checkBingoWinner(updatedBingoNumbersCardBoard, state.setGameStopped, state.setShowWinnerModal);
                return {
                    ...state,
                    bingoNumbersCardBoard: updatedBingoNumbersCardBoard
                };
        default:
            return state;
    }
};
