
import bingoNumbers from "../DataBingo/dataBingo";

export const getRandomNumbers = () => {
    const selectedNumbers = [];
    while (selectedNumbers.length < 15) {
      const randomNumber = bingoNumbers[Math.floor(Math.random() * bingoNumbers.length)];
      if (!selectedNumbers.includes(randomNumber)) {
        selectedNumbers.push(randomNumber);
      }
    }
    return selectedNumbers;
  };