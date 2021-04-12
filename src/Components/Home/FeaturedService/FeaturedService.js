import React from 'react';
import './FeaturedService.css';
import Featured from '../../../images/Featured.png'

const FeaturedService = () => {
    return (
        <div className="row featured-container mt-5 pt-3">

           <div className="col-md-3 offset-md-1">
              <img className="featured-img" src={Featured} alt="Featured-img" className="img-fluid"/>
           </div>

           <div className="col-md-7 mt-4">
              <h2 className="featured-head">Exceptional Dental <br/> Care,on Your Terms</h2>
              <small className="featured-text text-secondary">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Repellat nobis soluta dolores, <br/> corporis illo eius repellendus debitis placeat suscipit non, <br/>architecto cupiditate blanditiis minus optio fugit accusamus <br/> ipsum quae. Dolores, vel nulla dolore reiciendis aperiam culpa <br/> </small>
              
              <button className="featured-btn mt-3">Learn More</button>
           </div>

        </div>
    );
};

export default FeaturedService;