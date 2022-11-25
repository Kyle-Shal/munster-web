import React from "react";
import { Link } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {

    return (
        <>
            <nav className='navBar' >
                <div className="navBar-box" >
                    <Link to='/MUNster' className='logo' id="logo" >
                        MUNster
                    </Link>
                    <ul className='navItems'>
                        <li className='pageItem' >
                            <Link to='/MUNster' className="pageLink" id="jobs">
                                Jobs
                            </Link>
                        </li>
                        <li className='pageItem' >
                            <Link to='/MUNster/people' className="pageLink" id="people">
                                People
                            </Link>
                        </li>
                        <li className='pageItem' >
                            <Link to='/MUNster/jobpost' className="pageLink" id="post-job">
                                Post a Job
                            </Link>
                        </li>
                        <li className='pageItem' >
                            <Link to='/MUNster/applicants' className="pageLink" id="applicants">
                                Applicants
                            </Link>
                        </li>
                    </ul>
                    <ul className="navIcons" >
                        <li className="pageIcon">
                            <Link to='/MUNster/savedjobs' className="pageLink">
                                <i class="fa-regular fa-bookmark"></i>
                            </Link>
                        </li>
                        <li className="pageIcon">
                            <Link to='/MUNster/login' className="pageLink">
                                <i class="fa-regular fa-user"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default NavBar;