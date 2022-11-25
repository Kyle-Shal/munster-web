import {react, useState} from "react";
import "./JobApplication.css"
import DocumentUpload from './FormComponents/DocumentUpload'
import PersonalDetails from './FormComponents/PersonalDetails'
import PriorExperience from './FormComponents/PriorExperience'
import './JobApplication.css'
import { useLocation, Link } from 'react-router-dom';

const createJobApplication = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone_number: "",
    job_experience: [{job: ""}],
    volunteer_experience: [{volunteer: ""}]
}

function JobApplication() {
    //gets job entry from job card
    const location = useLocation()
    const {jobDetails} = location.state

    //used to switch between steps
    const [page, setPage] = useState(0);
    const titles = ["Upload Documents", "Personal Details", "Prior Experience"]

    const [formData, setFormData] = useState(createJobApplication)

    //debugging
    console.log(formData);

    //handles changes made on personal details page
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }  

    //handles changes made to job experience
    const handleJobChange = (e, index) => {
        const { name, value} = e.target; 
        const list = formData.job_experience;
        list[index][name] = value;
        setFormData({
            ...formData,
            "job_experience": list
        })
    }

    //handles changes made to volunteer experience
    const handleVolunteerChange = (e, index) => {
        const { name, value} = e.target; 
        const list = formData.volunteer_experience;
        list[index][name] = value;
        setFormData({
            ...formData,
            "volunteer_experience": list
        })
    }

    //Saves changes to form in local storage
    const saveChanges = () => {
        console.log(formData)
        storeSavedChanges(formData);
        alert("Your progress has been saved successfully!")
    }
    
    const storeSavedChanges = (formData) => {
        localStorage.setItem("Saved Application" + jobDetails.id, JSON.stringify(formData))
    }

    //Stores submitted form in local storage
    //When working with backend a user id will have to be attached
    const submitApplication = () => {  
        localStorage.removeItem("Saved Application" + jobDetails.id);
        localStorage.setItem("Submitted Application" + jobDetails.id, JSON.stringify(formData));
        alert("Form submitted successfully!")
    }

    //gets saved changes from local storage to display in input boxes
    if (localStorage.getItem("Saved Application" + jobDetails.id)) {
        var savedChanges = JSON.parse(localStorage.getItem("Saved Application" + jobDetails.id));
        for (var saved in savedChanges) {
            createJobApplication[saved] = savedChanges[saved]
        }
    } 

    //used to switch between steps
    const formDisplay = () => {
        if (page === 0) {
            return <DocumentUpload />
        } else if (page === 1) {
            return <PersonalDetails handleChange={handleChange} formData={formData}/>
        } else {
            return <PriorExperience handleJobChange={handleJobChange} handleVolunteerChange={handleVolunteerChange} formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className='main' >
            
            <h1>
                {jobDetails.jobTitle}
            </h1>
            <div className='sections_container' >
                <div className="form" >
                    <h1 className="title"> {titles[page]} </h1>
                    <div className="body">
                        {formDisplay()}
                    </div>
                    <div className="btn">
                        <button 
                        className="progress_button"
                        onClick={() => {setPage((currPage) => currPage - 1)}}
                        disabled={page===0}>
                            Previous
                        </button>
                        
                        <button 
                            className="progress_button"
                            onClick={() => {setPage((currPage) => currPage + 1)}}
                            disabled={page===2}>
                                Next
                        </button>                        
                    </div>
                    
                </div>
                <div className="progress_bar" >
                    <h1 className="title"> Progress </h1>
                    <ul >
                        <li className='progress_bar_list'>
                            <h2> Upload Documents </h2>
                        </li>
                        <li className='progress_bar_list'>
                            <h2> Personal Details </h2>
                            <label className="entry_header_side" htmlFor="first_name"> First Name </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="last_name"> Last Name </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="email"> Email </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="phone_number"> Phone Number </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="address"> Address </label>
                        </li>
                        <li className='progress_bar_list'>
                            <h2> Prior Experience </h2>
                            <label className="entry_header_side" htmlFor="job"> Job Experience </label>
                            <br/>
                            <label className="entry_header_side" htmlFor="volunteer"> Volunteer Experience </label>
                            <br/>
                        </li>
                        <div className="progress_btn">
                            <button className="progress_button" onClick={saveChanges}>
                                Save
                            </button>
                            <Link to='/MUNster'>
                            <button type="submit" className="progress_button" onClick={submitApplication}>
                                Submit
                            </button>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default JobApplication;
