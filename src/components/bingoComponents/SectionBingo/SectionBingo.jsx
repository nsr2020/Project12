
import "./SectionBingo.css";
import { toggleNumberSelection, updateSelectedIndexs } from "../../../reducer/Bingo/bingo.action";

const SectionBingo = ({ theme, bingoNumbersCardBoard, calledNumber,
  buttonsState, lineSung, lineWins, dispatch, selectedIndexs }) => {
  const { play } = buttonsState;

  const handleClick = (index, id) => {
    if (!play && id === calledNumber) {
      updateSelectedIndexs(index, selectedIndexs, dispatch);
      toggleNumberSelection(dispatch, bingoNumbersCardBoard, lineSung, lineWins, index);
    }
  };
  console.log(selectedIndexs);

  return (
    <section className={`game-bingo color-${theme}`}>
      {bingoNumbersCardBoard.map((bingoNumber, index) => (
        <div
          key={index}
          onClick={() => {
            handleClick(index, bingoNumber.id);
    }}
            
          className={`number-wrp ${(selectedIndexs.includes(index) || bingoNumber.selectedCardBoardBall) && "changeGrey"  }`}

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



