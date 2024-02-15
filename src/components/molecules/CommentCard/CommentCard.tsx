//Styles
import "./CommentCard.scss"

//Assets
import Woman from '../../../assets/images/woman.jpg'
import Woman2 from '../../../assets/images/woman2.png'
import Man from '../../../assets/images/man1.jpg'
import Man2 from '../../../assets/images/man2.jpg'

//Components
import StarRatings from "../StarRatings/StarRatings"

const CommentCard = () => {

    // Información de las reseñas
    const reviews = [
        {
            id: 1,
            image: Woman,
            name: "Karina Rodríguez",
            comment: "'Night Serenity' perfume combines floral and woody notes for an elegant and mysterious " + 
                    "experience. Perfect for special nights, it leaves a lasting impression of sophistication and charm.",
            star: 5,
        },
        {
            id: 2,
            image: Woman2,
            name: "Estefania Sánchez",
            comment: "The 'Luz de Luna' perfume awakens the senses with its floral and fruity mix. " + 
                    "An elegant and seductive fragrance that evokes the magic of starry nights. " + 
                    "A charming option for special moments.",
            star: 5,
        },
        {
            id: 3,
            image: Man,
            name: "Thomas Smitt",
            comment: "The 'Night Elegance' perfume highlights masculinity with notes of leather and spices. " +  
                    "A captivating fragrance that leaves a lasting impression of sophistication and confidence, " + 
                    "perfect for the modern man who seeks to stand out on every occasion.",
            star: 5,
        },
        {
            id: 1,
            image: Man2,
            name: "Héctor Gónzalez",
            comment: "With its distinctive and powerful aroma, 'Wild Adventure' perfume radiates bold masculinity. " + 
                    "Notes of wood and spice blend to create an intriguing and long-lasting fragrance. " + 
                    "Perfect for the intrepid man looking to leave a memorable mark.",
            star: 5,
        },
    ]

  return (
    <>
        {reviews.map((_, idx) => {
            return(
                <div key={idx} className='CommentCard'>
                    <div className="c-header">
                        <img src={_.image} alt="" className="c-image"/>
                        <div className="c-cntStarName">
                            <p className="c-name">{_.name}</p>
                            <StarRatings numberStar={_.star}/>
                        </div>
                    </div>
                    <div className="c-comment">{_.comment}</div>
                </div>
            )
        })}
    </>
  )
}

export default CommentCard