
import "./SectionBingo.css";
import { toggleNumberSelection,} from "../../../reducer/Bingo/bingo.action";

const SectionBingo = ({ theme, dispatch, ourRandomNumbers, actualNumber, selectedNumbers }) => {
 
  return (
    <section className={`game-bingo color-${theme}`}>
      {ourRandomNumbers.map((bingoNumber, index) => (
        <div
          key={index}
          onClick={() => {
            if (bingoNumber.id === actualNumber) {
              toggleNumberSelection(dispatch, index, selectedNumbers);
            }
    }}      
          className={`number-wrp ${ selectedNumbers[index] && "changeGrey"  }`}
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



