
interface ButtonProps {
  text: string;
  className?: string;
  submit?: boolean
  cancel?: boolean
  onClick?: () => void
}

//Styles
import "./Button.scss";

const Button = ({ text, className, submit = false, cancel = false, onClick }: ButtonProps) => {
  return (
    <button
      className={`Button ${className} ${submit && "submit"} ${
        cancel && "cancel"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
