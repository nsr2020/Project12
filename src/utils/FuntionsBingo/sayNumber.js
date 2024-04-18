const sayNumber = (number, synthesis) => {
    if (synthesis && typeof synthesis.speak === 'function') { // Verifica si synthesis es válido y tiene el método speak
        const utterance = new SpeechSynthesisUtterance(number);
        synthesis.speak(utterance);
    } else {
        console.error('Error: No se pudo hablar el número. Synthesis no es válido o no tiene el método speak.');
    }
};