let interval;

export const initGame = (dispatch, allNumbers) => {
  dispatch({ type: "INIT_GAME" });

  const allNumbersCopy = [...allNumbers];

  interval = setInterval(() => {
    let random = Math.floor(Math.random() * allNumbersCopy.length);

    allNumbersCopy.splice(random, 1);

    dispatch({
      type: "GET_NEW_NUMBER",
      payload: { random, array: allNumbersCopy },
    });
  }, 3000);
};

export const pauseGame = (dispatch) => {
  clearInterval(interval);
  dispatch({ type: "PAUSE_GAME" });
};

export const resetGame = (dispatch) => {
  clearInterval(interval);
  dispatch({ type: "RESET_GAME" });
};

export const selectNumber = (dispatch, index, bingoCard) => {
  const bingCardCopy = [...bingoCard];

  bingCardCopy[index] = null;

  dispatch({ type: "SELECT_NUMBER", payload: bingCardCopy });
};
