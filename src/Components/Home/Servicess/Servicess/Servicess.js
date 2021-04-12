import React from 'react';
import './Servicess.css';
import Fluoride from '../../../../images/Fluoride.png';
import Cavity from '../../../../images/Cavity.png';
import Whitening from '../../../../images/Whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const ServiceData = [
    {
        name: 'Fluoride Treatment',
        image: Fluoride
    },
    {
        name: 'Cavity Filling',
        image: Cavity
    },
    {
        name: 'Teath Whitening',
        image:  Whitening
    }
]

const Servicess = () => {
    return (
        <section className=" serviced-container ">

            <div className="text-center services-text ">
                <h5>OUR SERVICES</h5>
                <h2> Services We Provide </h2>
            </div>

            <div className="d-flex justify-content-center mt-4 pt-4">
                <div className="w-75 row">
                    {
                        ServiceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Servicess;