import { TURNS } from "../../utils/DataTicTacToe/data";

const getInitialGameState = () => {
    const boardFromStorage = window.localStorage.getItem('board');
    const turnFromStorage = window.localStorage.getItem('turn');
    return {
        turn: turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X,
        winner: null,
        board: boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    };
};
export const INITIAL_STATE = getInitialGameState();

export const tictactoeReducer = (state,action) =>{
    switch(action.type){
        case 'UPDATE_TURN':
            return {
               ...state,
                turn: action.turn
            }
            
        case 'UPDATE_WINNER':
            return {
               ...state,
                winner: action.winner
            }
        case 'UPDATE_BOARD':
            return {
               ...state,
                board: action.board
            }
         case "RESTART" :
            window.localStorage.removeItem('turn');
            window.localStorage.removeItem('board');
            const newState = getInitialGameState()
            window.localStorage.setItem('turn', JSON.stringify(newState.turn));
            window.localStorage.setItem('board', JSON.stringify(newState.board));
            return newState;
        default:
            return state;
    }
}