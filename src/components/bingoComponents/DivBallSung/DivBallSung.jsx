import bingoNumbers from "../../../utils/DataBingo/dataBingo";
import "./DivBallSung.css"

const DivBallSung = ({index}) => {
    const isValidIndex = index !== null && index >= 0 && index < bingoNumbers.length;
    return (
        <div className={`divBallSung flex-container `}>
            {isValidIndex && bingoNumbers[index] && bingoNumbers[index].img && (
        <>
          <img src={bingoNumbers[index].img} alt={`Número ${index + 1}`} />
        </>
      )}
        {!isValidIndex || !bingoNumbers[index]?.img && (
        <img src="/assets/bingobombo.png" alt="bingoBombo" />
      )}
        </div>
      );
}

export default DivBallSung