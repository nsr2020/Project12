import { useContext } from "react";
import "./Bingo.css";
import { ThemeContext } from "../../providers/context/ThemeContext";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher";
import GoBack from "../../components/GoBack/GoBack";
import MainBingo from "../../components/bingoComponents/MainBingo/MainBingo";

const Bingo = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`App color-${theme} flex-container bingo-container animated slideInLeft`}
    >
      <ThemeSwitcher />
      <MainBingo theme={theme}/>
      <GoBack to={"/"} />
    </div>
  );
};

export default Bingo;
