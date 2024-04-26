
import "./SectionBingo.css";
import { toggleNumberSelection, updateSelectedIndexs } from "../../../reducer/Bingo/bingo.action";

const SectionBingo = ({ theme, bingoNumbersCardBoard, calledNumber,
  buttonsState, lineSung, lineWins, dispatch, matchingNumbers, intervalId, selectedIndexs }) => {
  const { play } = buttonsState;

  const handleClick = (index, id) => {
    if (!play && id === calledNumber) {
      updateSelectedIndexs(index, selectedIndexs, dispatch);
      toggleNumberSelection(dispatch, bingoNumbersCardBoard, lineSung, lineWins, index, id, intervalId, matchingNumbers);
    }
  };

  return (
    <section className={`game-bingo color-${theme}`}>

      {bingoNumbersCardBoard.map((bingoNumber, index) => (
        <div
          key={bingoNumber.id}
          onClick={() => handleClick(index, bingoNumber.id)}
          style={{
            filter: selectedIndexs.includes(index) && bingoNumber.selectedCardBoardBall ? 'grayscale(100%)' : '',
            transform: selectedIndexs.includes(index) && bingoNumber.selectedCardBoardBall ? 'scale(0.6)' : '',
            pointerEvents: selectedIndexs.includes(index) && bingoNumber.selectedCardBoardBall ? 'none' : '',
            cursor: selectedIndexs.includes(index) && bingoNumber.selectedCardBoardBall ? 'auto' : 'pointer'
          }}
          className="number-wrp"
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



