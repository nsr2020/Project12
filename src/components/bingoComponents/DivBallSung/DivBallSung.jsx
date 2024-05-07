import "./DivBallSung.css";
import bingoNumbers from "../../../utils/DataBingo/dataBingo";

const DivBallSung = ({ actualNumber }) => {
  return (
    <div className="divBallSung flex-container">
       {actualNumber !== null ? ( 
        <>
        <img src={bingoNumbers[actualNumber - 1].img} alt={`Número ${actualNumber + 1}`} />
       </>
      ) : (
        // Si actualNumber no es válido, mostrar la imagen del bombo
        <img src="/assets/bingobombo.png" alt="bingoBombo" />
      )}
    </div>
  );
};

export default DivBallSung;

