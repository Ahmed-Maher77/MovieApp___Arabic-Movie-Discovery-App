import PropTypes from "prop-types";
import "./StarRating.css";

const StarRating = ({ rating, maxRating = 10, showScore = false }) => {
    // Convert rating to 5-star scale (TMDB uses 10-point scale)
    const starRating = (rating / maxRating) * 5;
    
    // Generate stars
    const stars = [];
    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating % 1 >= 0.5;
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
        stars.push(
            <i key={`full-${i}`} className="star-icon fas fa-star filled"></i>
        );
    }
    
    // Add half star if needed
    if (hasHalfStar) {
        stars.push(
            <i key="half" className="star-icon fas fa-star-half-alt filled"></i>
        );
    }
    
    // Add empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars.push(
            <i key={`empty-${i}`} className="star-icon far fa-star"></i>
        );
    }
    
    return (
        <div className="star-rating">
            <div className="stars">
                {stars}
            </div>
            {showScore && (
                <span className="rating-score">{rating.toFixed(1)}</span>
            )}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    maxRating: PropTypes.number,
    showScore: PropTypes.bool,
};

export default StarRating;