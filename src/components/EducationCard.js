import React from "react";
import './EducationCard.css';

function EducationCard({person}) {
    return (
            <div className='educationPostingBox'>
                <h2>{person.schoolName}</h2>
                <h3>{person.schoolAddress}</h3>
                <p>{person.programName}</p>
                <p>{person.schoolStartDate} - {person.schoolEndDate}</p>
            </div>
    );
}

export default EducationCard;