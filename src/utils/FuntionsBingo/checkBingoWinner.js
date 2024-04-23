/* export const checkBingoWinner = (bingoNumbersCardBoard, gameStopped,showWinnerModal) => {
    const selectedNumbers = bingoNumbersCardBoard
      .filter((bingoNumber) => bingoNumber.selectedCardBoardBall)
      .map((bingoNumber) => bingoNumber.id);
    
    // Verificar si se han seleccionado todos los números únicos
    
    const uniqueSelectedNumbers = new Set(selectedNumbers);
    console.log(uniqueSelectedNumbers.size);
    if (uniqueSelectedNumbers.size === 14) {
      gameStopped(true)
      showWinnerModal("bingo");
      setTimeout(()=>{
        handleStopClick(); 
      },2000)
      // Detener el juego
    }
  };
 */