import { TURNS } from "../../utils/DataTicTacToe/data";
import { checkEndGame } from "../../utils/FuntionsTicTacToe/checkEndGame";
import { checkWinner } from "../../utils/FuntionsTicTacToe/checkWinner";
import confetti from "canvas-confetti";


export const resetGame = (dispatch) => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
    if(typeof dispatch === 'function'){
        dispatch({type:"RESTART"})
    }
    
};

export const updateBoard = (dispatch,index, board, winner, turn) => {
    //si hay algo en la posición, no se sobreescribe o haya ganador
    if (!board || board[index] || winner) return;
  
    //Actualizamos el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    /* setBoard(newBoard); */
  
    //Cambiamos el nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    //vamos a guardar la partida con lo que tenga el tablero y el turno
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));

    // Enviamos las acciones al reducer
    dispatch({ type: 'UPDATE_BOARD', board: newBoard });
    dispatch({ type: 'UPDATE_TURN', turn: newTurn });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
        //aqui pongo el setTimeout para que de tiempo a ver el tablero con la jugada ganadora medio segundo
        //antes de que se informe por el modal de sweetalert2
        confetti()
            dispatch({ type: 'UPDATE_WINNER', winner: newWinner });  
   
    } else if (checkEndGame(newBoard)) {
        dispatch({ type: 'UPDATE_WINNER', winner: false });
    }
    //Para ver si el juego ha terminado o empate
  };

  export const handleUpdateBoard = (index, dispatch, board, turn, winner) => {
    if(board[index]) return
    
    updateBoard(dispatch, index, board, winner, turn);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    dispatch({ type: 'UPDATE_TURN', turn: newTurn });
  };