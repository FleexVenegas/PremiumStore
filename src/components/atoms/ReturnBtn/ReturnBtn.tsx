import { useNavigate } from 'react-router-dom'


//Styles
import "./ReturnBtn.scss"

//Assets
import Return from './iconReturn/arrow.png'

interface ReturnBtnProps{
    className?: string
    url?: string
}

const ReturnBtn = ({className, url= ""}: ReturnBtnProps) => {
  
    const navigate = useNavigate()

    return (
    <div className={`ReturnBtn ${className}`} onClick={() => navigate(url)}>
        <img src={Return} alt="" className='img-return'/>
    </div>
  )
}

export default ReturnBtn