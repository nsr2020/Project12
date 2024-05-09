
import bingoNumbers from "../../utils/DataBingo/dataBingo";
import { getRandomNumbers } from "../../utils/FuntionsBingo/getRandomNumbersForCardBoard";

export const INITIAL_STATE = {
    paused: 0,
    ourRandomNumbers: [...getRandomNumbers()],
    allNumbers: [...bingoNumbers],
    actualNumber: null,
    showModal: "",
    selectedNumbers: Array(bingoNumbers.length).fill(false)
}

export const bingoReducer = (state = INITIAL_STATE, action={}) => {
    switch(action.type) {
        case "RESET":
            return {
                paused: 0,
                ourRandomNumbers: [...getRandomNumbers()],
                allNumbers: [...bingoNumbers],
                actualNumber: null,
                showModal: "",
                selectedNumbers: Array(bingoNumbers.length).fill(false)
            };

            case "PAUSE":
        
            return {
                ...state,
                paused:0
                       };
    
        case "PLAY":
            
            return {
                ...state,
                paused:1
              
            };
            case "UPDATE_SUNG_NUMBER":
                const {actualNumber} = action.payload
            return {
               ...state,
                actualNumber:actualNumber
                
            };
            case "REMOVE_NUMBER_FROM_ALLNUMBERS":
                const {allNumbers} = action.payload
                return{
                    ...state,
                    allNumbers:allNumbers
                }

           
        
        case "NEW_NUMBERS":
            const {newBingoCardBoard2} = action.payload;
            return {
                ...state,
                ourRandomNumbers: newBingoCardBoard2,
            };
       
        case "LINE_WINNER":
            return {
                ...state,
                showModal:"line"
            } 

            case "BINGO_WINNER":
                return{
                    ...state,
                    showModal:"bingo"
                    
                    
                }   
                case"NOT_ALL_NUMBERS_SELECTED":
                return{
                    ...state,
                    paused:2
                }
                case"UPDATE_SELECTED_NUMBERS":
                const {selectedNumbers} = action.payload
                return{
                    ...state,
                    selectedNumbers:selectedNumbers
                }
                case "CLEAN_MODAL":
                    return{
                       ...state,
                        showModal:""
                    }
                    case "INFO_GAME":
                    return {
                        ...state,
                        showModal:"info"
                    }
                

        default:
            return state;
    }
};