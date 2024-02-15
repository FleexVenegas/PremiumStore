import { InputProps } from "../../../interface/interface";

//Styles    
import "./Input.scss";

const Input = ({ className, text, name, placeholder, type = "text", onChange }: InputProps) => {
  return (
    <div className={`Input ${className}`}>
      {text && <label>{text}</label>}
      <input 
          className="input" 
          type={type} 
          name={name}
          placeholder={placeholder} 
          onChange={onChange} 
          required 
      />
    </div>
  );
};

export default Input;
