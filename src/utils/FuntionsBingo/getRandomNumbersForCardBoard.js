import bingoNumbers from "../DataBingo/dataBingo";


export const getRandomNumbers = () => {
    const selectedNumbers = [];
    while (selectedNumbers.length < 15) {
      const randomNumber = Math.floor(Math.random() * bingoNumbers.length) + 1;
      if (!selectedNumbers.includes(randomNumber)) {
        selectedNumbers.push(randomNumber);
      }
    }
    return selectedNumbers;
  };