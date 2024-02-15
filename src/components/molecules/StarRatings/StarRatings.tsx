import StarRatingss from 'react-star-ratings';

interface StarProps{
  numberStar: number
  className?: string
}

const StarRatings = ({ numberStar = 1 }: StarProps) => {

  return (
    <StarRatingss
        rating={numberStar}
        starRatedColor="#e95e7e"
        starEmptyColor="#ffd8e1"
        starDimension='20px'
        starSpacing='1px'
        numberOfStars={5}
        name="rating"
    />
  )
}

export default StarRatings