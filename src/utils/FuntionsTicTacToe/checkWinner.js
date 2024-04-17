import { WINNER_COMBOS } from "../DataTicTacToe/data";

export const checkWinner = (boardToCheck) => {
    //se revisan las combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    //en caso de que no hay ganador
    return null;
};