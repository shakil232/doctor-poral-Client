import React from 'react';
import './ServiceDetails.css'

const ServiceDetails = (props) => {
    const { name, image } = props.service;
    return (
        <div className=" col-md-4 text-center details-container">

            <img className="service-img" src={image} alt="service-images" />
            <h5 className="mt-3 mb-3 service-name">{name}</h5>
            <small className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, nihil.</small>

        </div>
    );
};

export default ServiceDetails;