import { InputProps } from '../../../interface/interface'


//Styles
import "./TextArea.scss"

const TextArea = ({ className, text, name, placeholder, onChange }: InputProps) => {
  return (
    <div className={`TextArea ${className}`}>
        {text && <label>{text}</label>}
        <textarea 
          className='text-area' 
          name={name}
          placeholder={placeholder} 
          onChange={onChange} 
          required 
        />
    </div>
  )
}

export default TextArea