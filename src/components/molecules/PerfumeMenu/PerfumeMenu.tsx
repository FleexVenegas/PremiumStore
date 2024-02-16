import { useNavigate } from 'react-router-dom'

//Assets
import Top1 from '../../../assets/images/top1.jpg'
import Top2 from '../../../assets/images/black_opium.jpg'
import Top3 from '../../../assets/images/fresh.png'
import Top4 from '../../../assets/images/davidoff.png'
import Top5 from '../../../assets/images/Louis.jpg'
import Button from '../../atoms/Button/Button'
import StarRatings from '../StarRatings/StarRatings'

//Styles
import "./PerfumeMenu.scss"

interface PerfumeMenuProps{
    className?: string
    classTop?: string
    scroll?: boolean
}

const PerfumeMenu = ({ className, classTop, scroll = false }: PerfumeMenuProps) => {

    const navigate = useNavigate()

    // Toda la información del top de perfumes
    const dataFragrance = [
        { id: "4a89c354-9e78-42e1-a6d7-f2c3b1f5d8a2", name: "Nautica Voyage", image: Top1, star: 5, total: 155 },
        { id: "f7d2a1b8-5eac-4c61-8b5a-3e9d0f8c6a94", name: "Black Opium V2", image: Top2, star: 4.5, total: 150 },
        { id: "c8f6d97b-2fe9-4d8d-aa7c-651e8abf3a61", name: "Fresh As Citrus ", image: Top3, star: 4.5, total: 130 },
        { id: "1b3e6f80-80a3-432d-bd88-ebf0a5a72f9f", name: "DAVIDOFF Cool Water", image: Top4, star: 4, total: 125 },
        { id: "e2a4cfab-36c1-4a5e-8156-927db146e91d", image: Top5, name: "Louis Vuitton", star: 4, total: 120 },
    ]


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }

    const handleNavigate = (id: string, name: string, image: string) => {
        if(scroll){
            scrollTop()
        }

        const path = image.replace(/\//g, '-')
        navigate(`/fragrance/${id}/${name}/${path}`)
    }

  return (
    <>
        {dataFragrance.map((_, idx) => {
            return (
                <div key={idx} 
                    className={`PerfumeMenu ${className}`}
                    onClick={() => handleNavigate(_.id, _.name, _.image)}>
                    <div className={`p-cntImage ${classTop}`}>
                        <img src={_.image} alt="" className='p-image'/>
                        <div className='p-hover'></div>
                    </div>
                    <div className='p-cntInfo'>
                        <p className='p-name'>{_.name}</p>
                        <div className='p-cntStar'>
                            <StarRatings numberStar={_.star} />
                            <label className='label-total'>({_.total})</label>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default PerfumeMenu