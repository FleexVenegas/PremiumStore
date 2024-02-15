
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

const PerfumeMenu = () => {

    // Toda la información del top de perfumes
    const dataFragrance = [
        { id: 1, name: "Nautica Voyage", image: Top1, star: 5 },
        { id: 2, name: "Black Opium V2", image: Top2, star: 4.5 },
        { id: 3, name: "Fresh As Citrus ", image: Top3, star: 4.5 },
        { id: 4, name: "DAVIDOFF Cool Water", image: Top4, star: 4 },
        { id: 5, image: Top5, name: "Louis Vuitton", star: 4 },
    ]

  return (
    <>
        {dataFragrance.map((_, idx) => {
            return (
                <div key={idx} className='PerfumeMenu'>
                    <div className='p-cntImage'>
                        <img src={_.image} alt="" className='p-image'/>
                    </div>
                    <div className='p-cntInfo'>
                        <p className='p-name'>{_.name}</p>
                        <StarRatings numberStar={_.star} />
                    </div>
                    <Button text='See more' submit className='btnTop'/>
                </div>
            )
        })}
    </>
  )
}

export default PerfumeMenu