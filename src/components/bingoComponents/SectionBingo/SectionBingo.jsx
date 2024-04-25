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
          key={bingoNumber.id}
          onClick={() => {
            if (!play && bingoNumber.id === calledNumber) {
              toggleNumberSelection(dispatch, bingoNumbersCardBoard, lineSung, lineWins, index, bingoNumber.id);
            }
          }}
          className={`number-wrp ${
            bingoNumber.selectedCardBoardBall ? 'changeGrey' : '' && matchingNumbers.includes(bingoNumber.id)
          }`}
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
