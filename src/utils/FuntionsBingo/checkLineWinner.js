/* export  const checkLineWinner = (index, lineSung, lineWins) => {
    if (!lineSung) {
      lineWins(prevLineWins => {
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
  }; */