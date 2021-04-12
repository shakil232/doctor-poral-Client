import React from 'react';
import './Doctor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Doctor = (props) => {
    const { name, phone, Images, icon } = props.doctor;

    return (
        <div className=" col-md-4 text-center doctorCard-container mt-1 mb-3 ">
            <div className=" doctor-card mt-2">
                <img className="doctorCard-img mr-2 img-fluid" src={Images} alt="" />
                <p>{name}</p>
            </div>

            <div className="DoctorCard-number mt-1">
                <FontAwesomeIcon className="doctor-icon mr-1" icon={icon}></FontAwesomeIcon>
                <small>{phone}</small>
            </div>
        </div>
    );
};

export default Doctor;