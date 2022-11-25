import React from "react";
import "./Profile.css";
import JobExperienceCard from "./JobExperienceCard";
import VolunteerCard from "./VolunteerCard";
import EducationCard from "./EducationCard";

function OtherPersonProfile() {
    const otherProfile = {
        connectName: "",
        connectImg: "",
        connectJob: "",
        companyAddress: "",
        volunteerOrgName: "",
        volunteerStartDate: "",
        volunteerEndDate: "",
        volunteerOverview: "",
        volunteerOrgAddress: "",
        schoolName: "",
        schoolStartDate: "",
        schoolEndDate: "",
        schoolAddress: "",
        programName: "",
    };

    if (localStorage.getItem("connectProfile")) {
        var currentProfile = JSON.parse(localStorage.getItem("connectProfile"));
        for (var entry in currentProfile) {
            otherProfile[entry] = currentProfile[entry];
        }
    }

    return (

        <div>
            <div className='mainProfileBox'>
                <img className='otherProfilePicture' alt={otherProfile.connectName} src={otherProfile.connectImg} />
                <button className="otherConnectButton">Connect</button>
                <div className='otherDescription'>
                    <center>
                        <p className='otherHeader'>{otherProfile.connectName}</p>
                        <p className='otherJobDes'>{otherProfile.connectJob}</p>
                    </center>
                </div>
                <br></br>
                <br></br>
                <div className="otherExperienceBoxes">
                    <p className="otherTitle">Job Experience</p>
                    <JobExperienceCard person={otherProfile} />
                </div>
                <br></br>
                <br></br>
                <div className="otherExperienceBoxes">
                    <p className="otherTitle">Volunteer Work </p>
                    <VolunteerCard person={otherProfile} />
                </div>
                <br></br>
                <br></br>
                <div className="otherExperienceBoxes">
                    <p className="otherTitle">Education </p>
                    <EducationCard person={otherProfile} />
                </div>
            </div>
        </div>
    )
}

export default OtherPersonProfile;