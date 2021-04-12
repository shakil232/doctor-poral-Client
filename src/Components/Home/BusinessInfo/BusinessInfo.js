import React from 'react';
import './BusinessInfo.css';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import InfoCard from '../InfoCard/InfoCard';

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Tangail, Dhaka 222112 Bd',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call Us Now',
        description: '+1027475484',
        icon: faPhoneAlt,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </div>
    );
};

export default BusinessInfo;