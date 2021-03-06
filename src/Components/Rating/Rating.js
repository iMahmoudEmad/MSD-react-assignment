import { useState } from 'react'
import StarRating from 'react-star-ratings'

const Rating = () => {
    const [ rating, setRating ] = useState(0);

    const handleRatingClick = (rating) => setRating(rating);

    return (
        <div>
            <h2>Filter by stars</h2>
            <StarRating
                name="handler"
                caption="Use onClick Handlers!"
                rating={ rating }
                totalStars={ 5 }
                changeRating={ handleRatingClick }
                starRatedColor={ 'red' }
                starEmptyColor='gray'
                starDimension={ 20 }
                starSpacing={ '10px' }
            />
        </div>
    )
}

export default Rating
