import "./SectionBingo.css";
import { toggleNumberSelection } from "../../../reducer/Bingo/bingo.action";

const SectionBingo = ({ theme, bingoNumbersCardBoard, calledNumbers,
buttonsState, lineSung, lineWins, dispatch }) => {
  const {play} = buttonsState;

/*   useEffect(() => {
    console.log("Valor actual de calledNumber:", calledNumber);
   checkCallNumber(dispatch, calledNumber)
   console.log("Valor actual de calledNumber:", calledNumber);
  }, [calledNumber]);
 */
  return (
    <section className={`game-bingo color-${theme}`}>
     
      {bingoNumbersCardBoard.map((bingoNumber, index) => (
        <div 
          className={`number-wrp ${bingoNumber.selectedCardBoardBall ? "changeGrey" : ""}`}
          key={bingoNumber.id}
          onClick={() => !play && calledNumbers.includes(bingoNumber.id) && 
            toggleNumberSelection(dispatch,bingoNumbersCardBoard, lineSung, lineWins, index, bingoNumber.id)}
        >
          <img src={bingoNumber.img} alt={`Número ${bingoNumber.id}`} />
        </div>
      ))}
    </section>
  ); 

}
export default SectionBingo;
