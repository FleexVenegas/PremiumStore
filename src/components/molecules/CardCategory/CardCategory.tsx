//Styles
import "./CardCategory.scss"

//assets
import Woman from '../../../assets/images/woman_perfumes.png'
import Man from '../../../assets/images/man_perfume.jpg'
import Child from '../../../assets/images/child_perfume.png'

const CardCategory = () => {

    const cards = [
        { id: 1, image: Woman, name: "Woman" },
        { id: 2, image: Man, name: "Man" },
        { id: 3, image: Child, name: "Child" },
    ]

  return (
    <>
        {cards.map((_, idx) => {
            return(
                <div key={idx} className='CardCategory'>
                    <img src={_.image} alt="" className='c-image' />
                    <h2 className='c-title'>{_.name}</h2>
                </div>
            )
        })}
    </>
  )
}

export default CardCategory