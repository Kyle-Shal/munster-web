import React from "react";
import './JobExperienceCard.css';

function JobExperienceCard({person}) {
    return (
            <div className='jobExperiencePostingBox'>
                <h2>{person.jobTitle}</h2>
                <h3>{person.companyName}</h3>
                <p>{person.companyAddress}</p>
                <p>{person.jobStartDate} - {person.jobEndDate}</p>
                <p>{person.jobDescription}</p>
            </div>
    );
}

export default JobExperienceCard;