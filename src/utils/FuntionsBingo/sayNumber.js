export const sayNumber = (number, synthesis) => {
    console.log(number,synthesis);
    if (synthesis && synthesis.speak) {
        const utterance = new SpeechSynthesisUtterance(number);
        synthesis.speak(utterance);
    }
};
