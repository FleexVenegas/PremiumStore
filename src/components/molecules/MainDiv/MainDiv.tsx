import { ReactNode } from 'react'

//styles
import "./MainDiv.scss"

// Interfaces
interface MainDivProps{
    children: ReactNode
    className?: string 
}

const MainDiv = ({ children, className }: MainDivProps) => {
  return (
    <div className={`MainDiv ${className}`}>
        { children }    
    </div>
  )
}

export default MainDiv