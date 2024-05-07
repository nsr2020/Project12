import bingoNumbers from "../DataBingo/dataBingo";

export const getRandomNumbers = () => {
  if (!bingoNumbers || bingoNumbers.length === 0) {
      // Manejar el caso en que bingoNumbers esté vacío o no esté definido
      return [];
  }

  const selectedNumbers = [];
  while (selectedNumbers.length < 15) {
      const randomNumber = Math.floor(Math.random() * bingoNumbers.length);
      const randomBingoNumber = bingoNumbers[randomNumber];
      if (!selectedNumbers.includes(randomBingoNumber)) {
          selectedNumbers.push(randomBingoNumber);
      }
  }
  return selectedNumbers;
};