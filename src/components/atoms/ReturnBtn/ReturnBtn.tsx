import { useNavigate } from 'react-router-dom'


//Styles
import "./ReturnBtn.scss"

//Assets
import Return from './iconReturn/arrow.png'
import Skeleton from 'react-loading-skeleton'

interface ReturnBtnProps{
    className?: string
    url?: string
    skeleton?: boolean
}

const ReturnBtn = ({className, url= "", skeleton = false}: ReturnBtnProps) => {
  
    const navigate = useNavigate()

    return (
        <>
            {!skeleton ? (
                <div className={`ReturnBtn ${className}`} onClick={() => navigate(url)}>
                    <img src={Return} alt="" className='img-return'/>
                </div>
            ):(
                <Skeleton className='ReturnBtn' width={60} height={60} circle/>
            )}
        </>
  )
}

export default ReturnBtn