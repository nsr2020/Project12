import React, { useEffect, useState } from "react";
import { getRandomNumbers } from "../../../utils/FuntionsBingo/getRandomNumbersForCardBoard";
import "./SectionBingo.css";
import bingoNumbers from "../../../utils/DataBingo/dataBingo";


const SectionBingo = ({ theme, 
  bingoNumbersCardBoard, 
  setBingoNumbersCardBoard, 
  setShowWinnerModal, 
  calledNumber,
  calledNumbers,
  setCalledNumbers,
  buttonsState,
  handleStopClick,
  handlePauseClick,
  lineSung,
  setLineSung,
  lineWins,
  setLineWins,
  gameStopped,
  setGameStopped,
 }) => {
  const {play} = buttonsState;

  // Estados para las líneas y el bingo




  useEffect(() => {
    // Inicializar el tablero de bingo al montar el componente
    initializeBingoCardBoard();
  }, []);

  const initializeBingoCardBoard = () => {
    const selectedNumbers = getRandomNumbers();
    const newBingoCardBoard = selectedNumbers.map((number) => ({
      id: number,
      img: bingoNumbers[number - 1].img,
      selectedCardBoardBall: false,
    }));
    setBingoNumbersCardBoard(newBingoCardBoard);
  };


  const toggleNumberSelection = (number, index) => {
   
    const updatedBingoNumbersCardBoard = bingoNumbersCardBoard.map((bingoNumber) => {
      if (bingoNumber.id === number) {
        return {
          ...bingoNumber,
          selectedCardBoardBall: true
        };
      }
      return bingoNumber;
    });
    setBingoNumbersCardBoard(updatedBingoNumbersCardBoard);
  
    // Verificar si se ha cantado una línea ganadora
   
      checkLineWinner(index);
    
    // Verificar si se ha cantado un bingo
    checkBingoWinner();
  };

  const checkLineWinner = (index) => {
    if (!lineSung) {
      setLineWins(prevLineWins => {
        const newLineWins = [...prevLineWins]; // Copia el estado anterior
        if (index <= 4) {
          newLineWins[0] += 1; // Incrementa el contador de la primera línea
        } else if (index <= 9) {
          newLineWins[1] += 1; // Incrementa el contador de la segunda línea
        } else {
          newLineWins[2] += 1; // Incrementa el contador de la tercera línea
        }
        return newLineWins; // Devuelve el nuevo estado actualizado
      });
    }
  };
  

  useEffect(() => {
    if (!lineSung) {
      if (lineWins.some(count => count === 5)) {
        setShowWinnerModal("line");
        handlePauseClick()
        setLineSung(true);
        setLineWins([0, 0, 0]);
        setGameStopped(true);
        return; 
      }else{
        setGameStopped(false)
      }
    }
  }, [lineWins, lineSung]);
  
  const checkBingoWinner = () => {
    const selectedNumbers = bingoNumbersCardBoard
      .filter((bingoNumber) => bingoNumber.selectedCardBoardBall)
      .map((bingoNumber) => bingoNumber.id);
    
    // Verificar si se han seleccionado todos los números únicos
    
    const uniqueSelectedNumbers = new Set(selectedNumbers);
    console.log(uniqueSelectedNumbers.size);
    if (uniqueSelectedNumbers.size === 14) {
      setGameStopped(true)
      setShowWinnerModal("bingo");
      setTimeout(()=>{
        handleStopClick(); 
      },2000)
      // Detener el juego
    }
  };

  useEffect(() => {
    if (calledNumber !== null) {
      setCalledNumbers([...calledNumbers, calledNumber]);
    }
  }, [calledNumber]);

  return (
    <section className={`game-bingo color-${theme}`}>
      {bingoNumbersCardBoard.map((bingoNumber, index) => (
        <div 
          className={`number-wrp ${bingoNumber.selectedCardBoardBall ? "changeGrey" : ""}`}
          key={bingoNumber.id}
          onClick={() => !play && calledNumbers.includes(bingoNumber.id) && toggleNumberSelection(bingoNumber.id, index)}
        >
          <img src={bingoNumber.img} alt={`Número ${bingoNumber.id}`} />
        </div>
      ))}
    </section>
  );
}

export default SectionBingo;
