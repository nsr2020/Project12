import "./SectionBingo.css";
import { toggleNumberSelection } from "../../../reducer/Bingo/bingo.action";

const SectionBingo = ({ theme, bingoNumbersCardBoard, calledNumbers,calledNumber,
buttonsState, lineSung, lineWins, dispatch, matchingNumbers}) => {
  const {play} = buttonsState;
 
console.log(matchingNumbers.length);
  return (
    <section className={`game-bingo color-${theme}`}>
     
      {bingoNumbersCardBoard.map((bingoNumber, index) => (
        <div 
        className={`number-wrp ${
          matchingNumbers.includes(bingoNumber.id) && bingoNumber.id === calledNumber ? 'changeGrey' : ''
        }`}
          key={bingoNumber.id}
          onClick={() => !play && (bingoNumber.id === calledNumber) && 
            toggleNumberSelection(dispatch, bingoNumbersCardBoard, lineSung, lineWins, index, bingoNumber.id)}
            >
          <img 
           
          src={bingoNumber.img} 
          alt={`Número ${bingoNumber.id}`} 
        />
        </div>
      ))}
    </section>
  ); 

}
export default SectionBingo;
