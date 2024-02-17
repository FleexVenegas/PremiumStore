//Styles
import "./CommentCard.scss"

//Assets
import Woman from '../../../assets/images/woman.jpg'
import Woman2 from '../../../assets/images/woman2.png'
import Woman3 from '../../../assets/images/woman3.jfif'
import Woman4 from '../../../assets/images/woman4.jfif'
import Woman5 from '../../../assets/images/woman5.jfif'
import Man from '../../../assets/images/man1.jpg'
import Man2 from '../../../assets/images/man2.jpg'
import Man3 from '../../../assets/images/man3.webp'
import Man4 from '../../../assets/images/man4.jfif'

//Components
import StarRatings from "../StarRatings/StarRatings"
import Button from "../../atoms/Button/Button"
import { useState } from "react"

const CommentCard = () => {

    const [seeMorebtn, setSeeMorebtn] = useState<boolean>(false)

    // Información de las reseñas
    const reviews = [
      {
        id: 1,
        image: Woman,
        name: "Karina Rodríguez",
        comment:
          "'Night Serenity' perfume combines floral and woody notes for an elegant and mysterious " +
          "experience. Perfect for special nights, it leaves a lasting impression of sophistication and charm.",
        star: 5,
      },
      {
        id: 2,
        image: Woman2,
        name: "Estefania Sánchez",
        comment:
          "The 'Luz de Luna' perfume awakens the senses with its floral and fruity mix. " +
          "An elegant and seductive fragrance that evokes the magic of starry nights. " +
          "A charming option for special moments.",
        star: 5,
      },
      {
        id: 3,
        image: Man,
        name: "Thomas Smitt",
        comment:
          "The 'Night Elegance' perfume highlights masculinity with notes of leather and spices. " +
          "A captivating fragrance that leaves a lasting impression of sophistication and confidence, " +
          "perfect for the modern man who seeks to stand out on every occasion.",
        star: 4,
      },
      {
        id: 4,
        image: Man2,
        name: "Héctor Gónzalez",
        comment:
          "With its distinctive and powerful aroma, 'Wild Adventure' perfume radiates bold masculinity. " +
          "Notes of wood and spice blend to create an intriguing and long-lasting fragrance. " +
          "Perfect for the intrepid man looking to leave a memorable mark.",
        star: 5,
      },
      {
        id: 5,
        image: Woman3,
        name: "Sofia Garcia",
        comment: "Immerse yourself in the freshness and elegance of this floral perfume. " + 
                "Its notes of jasmine and peony create a radiant and feminine fragrance " + 
                "that lingers throughout the day. Perfect for special occasions " + 
                "or to elevate your everyday style with a touch of floral sophistication.",
        star: 4.5,
      },
      {
        id: 6,
        image: Woman4,
        name: "Isabella Rodriguez",
        comment: "This enveloping perfume transports you to a world of sensuality with " + 
                "its warm notes of amber and vanilla. It's a perfect choice for evenings, " + 
                "as its seductive and long-lasting aroma will make you stand out on " + 
                "any special occasion.",
        star: 5,
      },
      {
        id: 7,
        image: Woman5,
        name: "Valentina Martinez",
        comment: "If you're looking for a vibrant and energizing perfume, this is the one. " + 
                "With its citrusy notes of lemon and orange, this fragrance is refreshing and " + 
                "invigorating. Ideal for those seeking a sense of vitality and freshness " + 
                "throughout the day.",
        star: 4,
      },
      {
        id: 8,
        image: Man3,
        name: "Alejandro Lopez",
        comment: "Discover the contemporary elegance of this oriental-inspired men's " + 
                "perfume. The combination of spices, precious woods, and a touch of " + 
                "vanilla creates a unique fragrance that exudes luxury and modernity. " + 
                "Perfect for those who want to stand out with style and sophistication.",
        star: 3.5,
      },
      {
        id: 9,
        image: Man4,
        name: "Diego Hernandez",
        comment: "This men's perfume takes you on an exotic adventure with its notes of " + 
                "patchouli, sandalwood, and ginger. The blend of earthy and spicy elements " +  
                "creates an intriguing and unique fragrance. Perfect for those who want " + 
                "to express their adventurous spirit through their choice of scent.",
        star: 4,
      },
    ];

  return (
    <div className="CommetCard">
        <div className={`c-cntCommetCard ${seeMorebtn && "co-seeMore"}`}>
            {reviews.map((_, idx) => {
                return(
                    <div key={idx} className='co-card'>
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
        </div>
        <div className="co-button">
            <Button text={`${!seeMorebtn ? "See more" : "See less"}`} submit onClick={() => setSeeMorebtn(!seeMorebtn)}/>
        </div>
    </div>
  )
}

export default CommentCard