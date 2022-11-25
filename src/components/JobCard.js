import React, {useState} from "react";
import { Link } from "react-router-dom";
import './JobCard.css';

function JobCard({job}) {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="posting">
            <div className='postingBox'>
                <h2>{job.jobTitle}</h2>
                <p>{job.overview}</p>
                <div className='saved' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'} />
                </div>
            </div>
            <div className="postingDetail">
                <h4>{job.salary}</h4>
                <h4>{job.mode}</h4>
                <h4>{job.duration}</h4>
                <Link to='/MUNster/jobs/details'
                state = {{jobDetails: job}}>
                 <button className="more">More</button>
                 </Link>
                
            </div>
        </div>
    );
}

export default JobCard;