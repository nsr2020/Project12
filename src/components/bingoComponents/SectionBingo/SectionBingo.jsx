import { selectNumber } from "../../../reducer/Bingo/bingo.action";
import "./SectionBingo.css";

const SectionBingo = ({ theme, bingoCard, sungNumbers, dispatch }) => {
  return (
    <section className={`game-bingo color-${theme}`}>
      {bingoCard.map((bingoNumber, index) => (
        <div
          key={index}
          onClick={() => {
            sungNumbers.find((number) => number.id === bingoNumber?.id) &&
              selectNumber(dispatch, index, bingoCard);
          }}
          className={`number-wrp`}
        >
          {bingoNumber ? (
            <img src={bingoNumber.img} alt={`Número ${bingoNumber.id}`} />
          ) : (
            <img src="https://static.wixstatic.com/media/f1f438_4521bbb521ad46bfa221288397ae3788~mv2.jpg/v1/fill/w_480,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f1f438_4521bbb521ad46bfa221288397ae3788~mv2.jpg" />
          )}
        </div>
      ))}
    </section>
  );
};

export default SectionBingo;
