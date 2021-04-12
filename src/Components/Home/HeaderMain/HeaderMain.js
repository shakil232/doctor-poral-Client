import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
  return (
    <main className=" main-container row mt-4 d-flex align-items-center">

      <div className="col-md-4 offset-md-1 main-left">
        <h1 className=""> Your New Smile <br /> Starts Here </h1>
        <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dignissimos rem itaque quibusdam aspernatur atque!</p>
        <br />
        <button className=" appointment-btn" >GET APPOINTMENT </button>

      </div>

      <div className="col-md-6">
        <img src={chair} alt="chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;