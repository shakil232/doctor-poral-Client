import React from 'react';
import './Doctors.css';
import Doctores from '../../../../images/doctor.png'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import Doctor from '../../Doctors/Doctor/Doctor'


const doctorData = [
    {
        name: 'Dr.Caudi',
        phone: '+1233442',
        icon: faPhoneAlt,
        Images: Doctores
    },
    {
        name: 'Dr.Caudi',
        phone: '+1233442',
        icon: faPhoneAlt,
        Images: Doctores
    },
    {
        name: 'Dr.Caudi',
        phone: '+1233442',
        icon: faPhoneAlt,
        Images: Doctores
    },
]
const Doctors = () => {
    return (
        <section className=" doctors-container mt-4 pt-4">

            <div className="text-center doctors-text">
                
                <h3 > Our Doctors </h3>
            </div>

            <div className=" mt-3 pt-3">
                <div className="  row">
                    {
                       doctorData.map( doctor => <Doctor doctor={doctor}></Doctor> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;