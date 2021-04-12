import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png'

const MakeAppoinment = () => {
    return (
        <div className="appointment-container mt-5 row">

           <div className="col-md-4 offset-md-1 d-none d-md-block">
                <img className="doctor-img" src={doctor} alt="" className="img-fluid"/>
           </div>

           <div className="col-md-6 text-white appointment-head">
              <p className="mt-5 "> APPOINTMENT </p>
              <h3> Make an appointment <br/> Today</h3>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aspernatur optio! Ipsa, distinctio architecto. Consequuntur dolorem consectetur inventore, est quo pariatur in! Ut, quaerat magnam.</small>
              <br/>
              <button className="appointment-btn mt-3">Learn More</button>
           </div>

        </div>
    );
};

export default MakeAppoinment;