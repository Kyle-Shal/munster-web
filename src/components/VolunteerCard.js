import React from "react";
import './VolunteerCard.css';

function VolunteerCard({person}) {
    return (
            <div className='volunteerPostingBox'>
                <h2>{person.volunteerTitle}</h2>
                <h3>{person.volunteerOrgName}</h3>
                <p>{person.volunteerStartDate} - {person.volunteerEndDate}</p>
                <p>{person.volunteerOverview}</p>
            </div>
    );
}

export default VolunteerCard;