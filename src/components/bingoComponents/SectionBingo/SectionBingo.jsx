import "./SectionBingo.css";
import { toggleNumberSelection } from "../../../reducer/Bingo/bingo.action";
import classNames from 'classnames';

const SectionBingo = ({ theme, bingoNumbersCardBoard, calledNumbers, calledNumber,
  buttonsState, lineSung, lineWins, dispatch, matchingNumbers, intervalId }) => {
  const { play } = buttonsState;



  return (
    <section className={`game-bingo color-${theme}`}>

      {bingoNumbersCardBoard.map((bingoNumber, index) => (
        <div
          key={bingoNumber.id}
          onClick={() => {
            if (!play && bingoNumber.id === calledNumber) {
              toggleNumberSelection(dispatch, bingoNumbersCardBoard, lineSung, lineWins, index, bingoNumber.id, intervalId);
            }
          }}
          className={classNames('number-wrp', {
            'changeGrey': bingoNumber.selectedCardBoardBall || matchingNumbers.includes(bingoNumber.id)
          })}
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
