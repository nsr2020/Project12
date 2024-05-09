import { useReducer } from "react";
import Button from "../../Button/Button";
import DivBallSung from "../DivBallSung/DivBallSung";
import SectionBingo from "../SectionBingo/SectionBingo";
import "./MainBingo.css";
import WinnerModal from "../../WinnerModal/WinnerModal";
import {
  INITIAL_STATE,
  bingoReducer,
} from "../../../reducer/Bingo/bingo.reducer";
import {
  initGame,
  pauseGame,
  resetGame,
} from "../../../reducer/Bingo/bingo.action";

const MainBingo = ({ theme }) => {
  const [state, dispatch] = useReducer(bingoReducer, INITIAL_STATE);

  const { isPlaying, bingoCard, sungNumbers, allNumbers } = state;

  return (
    <main className={`color-${theme} flex-container board-bingo`}>
      <h1 className={`color-${theme}`}>Bingo</h1>
      <div className={`color-${theme} flex-container div-btns`}>
        {!isPlaying && (
          <Button
            theme={theme}
            text="▶"
            game="bingo"
            onClick={() => {
              initGame(dispatch, allNumbers);
            }}
            title="Play"
          />
        )}
        {isPlaying && (
          <Button
            theme={theme}
            text="⏸"
            game="bingo"
            onClick={() => {
              pauseGame(dispatch);
            }}
            title="Pause"
          />
        )}
        <Button
          theme={theme}
          text="🎲"
          game="bingo"
          onClick={() => {
            resetGame(dispatch);
          }}
          title="Reset"
        />
      </div>
      <SectionBingo
        theme={theme}
        bingoCard={bingoCard}
        sungNumbers={sungNumbers}
		dispatch={dispatch}
      />
      <DivBallSung sungNumbers={sungNumbers} />

      {/* <WinnerModal game="bingo" show={gameStopped && showWinnerModal} /> */}
    </main>
  );
};

export default MainBingo;
