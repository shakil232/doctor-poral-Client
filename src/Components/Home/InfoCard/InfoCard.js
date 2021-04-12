import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = (props) => {
    const { title, description, icon, background } = props.info;
    return (
        <div className=" info-container col-md-4 text-white">

            <div className={`info-card d-flex justify-content-center Bg-color-${background}`}>

                <div className="mr-3">
                    <FontAwesomeIcon className="info-icons" icon={icon}></FontAwesomeIcon>
                </div>

                <div>
                    <h6>{title}</h6>
                    <small>{description}</small>
                </div>

            </div>

        </div>
    );
};

export default InfoCard;