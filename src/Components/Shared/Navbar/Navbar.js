import React from 'react';

import './Navbar.css'

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-3">
                        <li class="nav-item">
                            <a class="nav-link mr-4 active menu-list" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 active menu-list" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 active menu-list" href="#">Dental Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white active menu-list" href="#">Reviews</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white active menu-list" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-4 text-white active menu-list" href="#">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;