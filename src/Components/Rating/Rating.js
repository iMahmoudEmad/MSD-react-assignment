import StarRating from 'react-star-ratings'

const Rating = ({ starPoints }) => {
    const convertPointsToStar = (point = 0) => point / 3;

    return (
        <StarRating
            name="rating"
            rating={ convertPointsToStar(starPoints) }
            totalStars={ 15 }
            starRatedColor={ 'red' }
            starEmptyColor='gray'
            starDimension='20'
            starSpacing={ '10px' }
        />
    )
}

export default Rating
