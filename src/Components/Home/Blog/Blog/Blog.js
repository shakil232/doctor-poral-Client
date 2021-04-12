import React from 'react';
import BlogCard from '../BlogCard/BlogCard';
import './Blog.css';
import wilson from '../../../../images/Wilson Harry.png'

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2021'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '23 April 2021'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2021'
    },
]

const Blog = () => {
    return (
        <section className=" blog-container mt-5 pt-5">

            <div className="text-center blog-text">
                <p>OUR BLOG</p>
                <h3>From Our Blog News </h3>
            </div>

            <div className="d-flex justify-content-center mt-4 pt-4">
                <div className="w-75  row">
                    {
                        blogData.map( blog=> <BlogCard blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;