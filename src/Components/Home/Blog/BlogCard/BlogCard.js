import React from 'react';
import './BlogCard.css'

const BlogCard = (props) => {
    const { authorImg, author, date, title, description } = props.blog;
    return (
        <div className=" col-md-4 text-center blogCard-container mt-3 mb-3 ">
            <div className="d-flex blogCard mt-2">
                <img className="blogCard-img mr-2 img-fluid" src={authorImg} alt="" />
                <div className="blogCard-top">
                    <p>{author}</p>
                    <small>{date}</small>
                </div>
            </div>
            
            <div className="blogCard-bottom mt-2">
                <h5>{title}</h5>
                <small>{description}</small>
            </div>
        </div>
    );
};

export default BlogCard;