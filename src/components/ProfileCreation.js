import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./ProfileCreation.css";

const createdProfile = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    province: "",
    country: "",
    companyName: "",
    jobStartDate: "",
    jobEndDate: "",
    jobDescription: "",
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
    jobTitle: "",
    volunteerTitle: "",
};

function ProfileCreation(){

    const [formData, setFormData] = useState(createdProfile);

     /* Save the entered data as it is being entered */
     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    /* Store the job to be posted */
    const storeCreatedProfile = (formData) => {
        localStorage.setItem("CreatedProfile", JSON.stringify(formData))
    }

    /* Function to check that all fields are filled and to post job */
    const createProfile = () => {
        if (localStorage.getItem("Created Profile")){
            localStorage.removeItem("Created Profile");
        }
        storeCreatedProfile(formData);
        alert("Profile Created successfully!")
        return;
    }

    return(
    <div className="whiteBox">
        <div className="insideBox">
          <div >
            <p className="titles"> Email </p>
            <br></br>
            <input className="inputs" name="email" id="email" value={formData.email} onChange={handleChange}></input>
            <br></br>
            <p className="titles"> First Name </p>
            <br></br>
            <input className="inputs" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange}></input>
            <br></br>
            <p className="titles"> Address (line 1) </p>
            <br></br>
            <input className="inputs" name="addressLine1" id="addressLine1" value={formData.addressLine1} onChange={handleChange}></input>
            <br></br>
            <p className="titles"> Province/State </p>
            <br></br>
            <input className="inputs" name="province" id="province" value={formData.province} onChange={handleChange}></input>

          </div>
        </div>
        
        <div className="insideBox">
          <div >
            <p className="titles"> Password </p>
            <br></br>
            <input className="inputs" name="password" id="password" value={formData.password} onChange={handleChange}></input>
            <br></br>
            <p className="titles"> Last Name </p>
            <br></br>
            <input className="inputs" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange}></input>
            <br></br>
            <p className="titles"> Address Line 2 (Apartment/ Suite Number) </p>
            <br></br>
            <input className="inputs" name="addressLine2" id="addressLine2" value={formData.addressLine2} onChange={handleChange}></input>
            <br></br>
            <p className="titles"> Country </p>
            <br></br>
            <input className="inputs" name="country" id="country" value={formData.country} onChange={handleChange}></input>
          </div>
        </div>

        <div className="jobExperienceBox">
            <p className="experienceTitles">Job Experience</p>
            <div className="insideExperienceBox">
                <p className="titles"> Company Name </p>
                <br></br>
                <input className="experienceInputs" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Start Date </p>
                <br></br>
                <input className="experienceInputs" name="jobStartDate" id="jobStartDate" value={formData.jobStartDate} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Job Title </p>
                <br></br>
                <input className="descriptionInputs" name="jobTitle" id="jobTitle" value={formData.jobTitle} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Job Description </p>
                <br></br>
                <input className="descriptionInputs" name="jobDescription" id="jobDescription" value={formData.jobDescription} onChange={handleChange}></input>
            
            </div>
            <div className="insideExperienceBox">
                <p className="titles"> Company Address</p>
                <br></br>
                <input className="experienceInputs" name="companyAddress" id="companyAddress" value={formData.companyAddress} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> End Date </p>
                <br></br>
                <input className="experienceInputs" name="jobEndDate" id="jobEndDate" value={formData.jobEndDate} onChange={handleChange}></input>
            </div>
        </div>

        <div className="volunteerExperienceBox">
            <p className="experienceTitles">Volunteer Experience</p>
            <br></br>
            <div className="insideExperienceBox">
                <p className="titles"> Organization Name </p>
                <br></br>
                <input className="experienceInputs" name="volunteerOrgName" id="volunteerOrgName" value={formData.volunteerOrgName} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Start Date </p>
                <br></br>
                <input className="experienceInputs" name="volunteerStartDate" id="volunteerStartDate" value={formData.volunteerStartDate} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Position Title </p>
                <br></br>
                <input className="descriptionInputs" name="volunteerTitle" id="volunteerTitle" value={formData.volunteerTitle} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Overview </p>
                <br></br>
                <input className="descriptionInputs" name="volunteerOverview" id="volunteerOverview" value={formData.volunteerOverview} onChange={handleChange}></input>
            
            </div>
            <div className="insideExperienceBox">
                <p className="titles"> Organization Address</p>
                <br></br>
                <input className="experienceInputs" name="volunteerOrgAddress" id="volunteerOrgAddress" value={formData.volunteerOrgAddress} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> End Date </p>
                <br></br>
                <input className="experienceInputs" name="volunteerEndDate" id="volunteerEndDate" value={formData.volunteerEndDate} onChange={handleChange}></input>
            </div>
        </div> 

        <div className="educationBox">
            <p className="experienceTitles">Education</p>
            <br></br>
            <div className="insideExperienceBox">
                <p className="titles"> School Name </p>
                <br></br>
                <input className="experienceInputs" name="schoolName" id="schoolName" value={formData.schoolName} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Start Date </p>
                <br></br>
                <input className="experienceInputs" name="schoolStartDate" id="schoolStartDate" value={formData.schoolStartDate} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> Program Name </p>
                <br></br>
                <input className="descriptionInputs" name="programName" id="programName" value={formData.programName} onChange={handleChange}></input>
            </div>
            <div className="insideExperienceBox">
                <p className="titles"> School Address</p>
                <br></br>
                <input className="experienceInputs" name="schoolAddress" id="schoolAddress" value={formData.schoolAddress} onChange={handleChange}></input>
                <br></br>
                <p className="titles"> End Date </p>
                <br></br>
                <input className="experienceInputs" name="schoolEndDate" id="schoolEndDate" value={formData.schoolEndDate} onChange={handleChange}></input>
            </div>
        </div> 
        <button type="Submit" className="submitButton"><Link to="/MUNster/profile" onClick={createProfile}>Submit</Link></button>
    </div>
    )
}

export default ProfileCreation;