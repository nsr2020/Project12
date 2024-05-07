import { useContext } from "react";
import "./ThemeSwitcher.css";
import { ThemeContext } from "../../providers/context/ThemeContext";

const ThemeSwitcher = ({paused = 0}) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
            <img
                className="theme-button"
                src={theme === "dark" ? "/assets/sun.png" : "/assets/moon2.png"}
                alt="theme"
                onClick={paused === 0 && toggleTheme}
            />
        
	)
}

export default ThemeSwitcher;
