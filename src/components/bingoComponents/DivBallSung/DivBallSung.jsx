import { useEffect } from "react";
import "./DivBallSung.css";

const DivBallSung = ({ sungNumbers }) => {

  useEffect(() => {
    let synthesis = window.speechSynthesis;
    const numberToSing = new SpeechSynthesisUtterance(sungNumbers.at(-1)?.id);
    synthesis.speak(numberToSing);
  }, [sungNumbers]);

  return (
    <div className={`divBallSung flex-container `}>
      {sungNumbers.length > 0 ? (
        <img src={sungNumbers.at(-1).img} alt={sungNumbers.at(-1).id} />
      ) : (
        <img src="/assets/bingobombo.png" alt="bingoBombo" />
      )}
    </div>
  );
};

export default DivBallSung;
