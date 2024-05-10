import "./Button.css";

const Button = ({ theme, text, title, onClick ,disabled=false }) => {
  return (
    <>
      <button 
	  className={`color-${theme}`} 
	  title={title} 
	  disabled={disabled}
    onClick={onClick}
	  style={disabled ? { cursor: "not-allowed" } : {}}
	  >
        {text}
      </button>
    </>
  );
};

export default Button;
