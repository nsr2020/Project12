import { useContext } from "react";
import "./ThemeSwitcher.css";
import { ThemeContext } from "../../providers/context/ThemeContext";

const ThemeSwitcher = ({play=true}) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
            <img
                className="theme-button"
                src={theme === "dark" ? "/assets/sun.png" : "/assets/moon2.png"}
                alt="theme"
                onClick={play && toggleTheme}
            />
        
	)
}

export default ThemeSwitcher;

	/* <button className="theme-button" type="button" onClick={toggleTheme}>
			{theme === "dark" ? "/assets/sun.png" : "/assets/moon.png"}
		</button> */
