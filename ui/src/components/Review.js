import React from 'react';

const Review = ({ value: review }) => {
    return (
        <div className="alert alert-info">
            <span className="badge badge-dark">{review.stars}</span>  &mdash; {review.author}
            <hr />
            {review.body}
        </div>
    );
};

export default Review;