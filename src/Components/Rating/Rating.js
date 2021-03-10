import StarRating from 'react-star-ratings';
import './Rating.scss';

const Rating = ({ starPoints, starColor }) => {
    const convertPointsToStar = (point = 0) => point / 3;

    return (
        <StarRating
            name="rating"
            rating={ convertPointsToStar(starPoints) }
            totalStars={ 15 }
            starRatedColor={ starColor }
            starEmptyColor='gray'
            starDimension='20'
            starSpacing={ '5px' }
        />
    )
}

export default Rating
