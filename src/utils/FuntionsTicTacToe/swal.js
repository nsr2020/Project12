
import Swal from "sweetalert2";
import { resetGame } from "../../reducer/TicTacToe/tictactoe.action";
import confetti from "canvas-confetti";

export const checkSwal = ({ title, text, imgUrl }, dispatch) => {
    Swal.fire({
        title: title,
        text: text,
        imageUrl: imgUrl,
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: "Custom image",
        customClass: {
            popup: 'custom-modal-class', // Clase CSS personalizada para la ventana modal
            image: 'transparent-image'
        },
        heightAuto: false, // Deshabilita la altura automática para que puedas establecerla manualmente
    }).then(() => {
        if(dispatch){
            resetGame(dispatch);
            confetti()
        }
        
    });
};