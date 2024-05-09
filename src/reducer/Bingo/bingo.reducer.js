import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";

export const INITIAL_STATE = {
  isPlaying: false,
  bingoCard: [...getRandomNumbers()],
  sungNumbers: [],
  allNumbers: [...bingoNumbers],
};

export const bingoReducer = (state, action) => {
  switch (action.type) {
    case "INIT_GAME":
      return { ...state, isPlaying: true };
    case "GET_NEW_NUMBER":
      return {
        ...state,
        sungNumbers: [
          ...state.sungNumbers,
          { ...state.allNumbers[action.payload.random] },
        ],
        allNumbers: [...action.payload.array],
      };
    case "PAUSE_GAME":
      return { ...state, isPlaying: false };
    case "RESET_GAME":
      return {
        ...state,
        isPlaying: false,
        sungNumbers: [],
        allNumbers: [...bingoNumbers],
        bingoCard: [...getRandomNumbers()],
      };
    case "SELECT_NUMBER": 
      return { ...state, bingoCard: [...action.payload] }
    default:
      return state;
  }
};
