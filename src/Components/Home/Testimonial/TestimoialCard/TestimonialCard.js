import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = (props) => {
    const {quote , name, from ,img} =props.testimonial
    return (
        <div className="card-container col-md-3 offset-md-1">
            <small>{quote}</small>
            <div className="d-flex align-items-center justify-content-center mt-4">
                <div className=" test-img">
                    <img  src={img} alt=""/>
                </div>
                <div className="card-text">
                    <h5>{name}</h5>
                    <p>{from}</p> 
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;