import React from "react";
import './ApplicantCard.css';

function ApplicantCard({person}) {
    return (
        <div className="applicant">
            <div className='applicantBox'>
                <h3>Applied For</h3>
                <div className="jobBox">
                    <h3>{person.job}</h3>
                </div>
                <button className="viewApplication">View Application</button>
            </div>
            <div className="applicantPic">
                <img alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
                <h2>{person.name}</h2>
            </div>
        </div>
    );
}

export default ApplicantCard;