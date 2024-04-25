import { useContext, useReducer } from 'react';
import './Bingo.css';
import { ThemeContext } from '../../providers/context/ThemeContext';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';
import GoBack from '../../components/GoBack/GoBack';
import MainBingo from '../../components/bingoComponents/MainBingo/MainBingo';
import { bingoReducer, INITIAL_STATE } from '../../reducer/Bingo/bingo.reducer';

const Bingo = () => {
  const [state, dispatch]=useReducer(bingoReducer,INITIAL_STATE)

  const {bingoNumbersCardBoard,displayedNumberIndex,
    intervalId,showWinnerModal,buttonsState,gameStopped,
    calledNumbers,calledNumber,lineSung,lineWins, synthesis, 
    selectedBingoNumbers, sungNumbers, matchingNumbers}=state;

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App color-${theme} flex-container bingo-container animated slideInLeft`}>
     <ThemeSwitcher/> 
      <MainBingo theme={theme} dispatch={dispatch}  bingoNumbersCardBoard={bingoNumbersCardBoard} 
      displayedNumberIndex={displayedNumberIndex} intervalId={intervalId} showWinnerModal={showWinnerModal}
      buttonsState={buttonsState} gameStopped={gameStopped} 
      calledNumbers={calledNumbers} calledNumber={calledNumber} lineSung={lineSung} lineWins={lineWins} synthesis={synthesis} 
      selectedBingoNumbers={selectedBingoNumbers} sungNumbers={sungNumbers} matchingNumbers={matchingNumbers}/>
     <GoBack to={'/'}/>  
    </div>
  );
};

export default Bingo;