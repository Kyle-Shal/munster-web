import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateJob.css';
import EmployerDetailsSection from './EmployerDetailsSection';
import JobDetailsSection from './JobDetailsSection';
import ShowSteps from './ShowSteps';

/* Job post creation entries for Employer Details Section*/
const createJobEntries = {
    companyName: "",
    companyLocation: "",
    jobTitle: "",
    jobDesc: "",
    addInfo: "",
    quals: "",
    jobType: "",
    salary: "",
    startDate: "",
    expiry: ""
}

const displaySavedChanges = () => {
    if (localStorage.getItem("Saved Changes")) {
        var savedChange = JSON.parse(localStorage.getItem("Saved Changes"));
        for (var saved in savedChange) {
            createJobEntries[saved] = savedChange[saved];
        }
    }
}

function CreateJobPosting() {

    displaySavedChanges()

    const [step, setStep] = useState(0)

    const [formData, setFormData] = useState(createJobEntries)

    /* Save the entered data as it is being entered */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    /* Render either employer or job details page based on state */
    const jobStep = () => {
        if (step === 0) {
            return <EmployerDetailsSection formData={formData} handleChange={handleChange} />;
        }
        else {
            return <JobDetailsSection formData={formData} handleChange={handleChange} />;
        }
    }

    /* Set the page to the Employer Details page */
    const employerDStep = () => {
        setStep(0);
    }

    /* Set the page to the Job Details page */
    const jobDStep = () => {
        setStep(1);
    }

    /* Store the job to be posted */
    const storePostedJob = (formData) => {
        localStorage.removeItem("Saved Changes");
        localStorage.setItem("Posted Job " + (localStorage.length + 1).toString(), JSON.stringify(formData))
    }

    /* Store the current form progress */
    const storeSavedChanges = (formData) => {
        localStorage.setItem("Saved Changes", JSON.stringify(formData))
    }

    /* Save current form progress */
    const saveChanges = () => {
        console.log(formData);
        storeSavedChanges(formData);
        alert("Your progress has been saved successfully!")
    }

    /* Function to check that all fields are filled and to post job */
    const postJob = () => {
        for (var data in formData) {
            if (formData[data] === "") {
                alert("Please fill out all fields!");
                if (data === "companyName" || data === "companyLocation") {
                    setStep(0);
                }
                else {
                    setStep(1);
                }
                document.getElementById(data).focus();
                return;
            }
            else if (data === "expiry") {
                console.log(formData);
                storePostedJob(formData);
                alert("Job posted successfully!")
                return;
            }
        }
    }

    return (
        <div>
            <form>
                <ShowSteps pageHighlight={step}/>

                <div className='buttonPosition'>
                    <button 
                        className='saveButton'
                        type='button'
                        onClick={saveChanges}>
                        Save Changes
                    </button><br />
                    <button 
                        className='postButton'
                        type='button'
                        onClick={postJob}>
                        Post This Job
                        </button>
                </div>

                <div className="enterJobInfo">
                    {jobStep()}

                    <div className='stepButtons'>
                        <button
                            className='steps'
                            onClick={employerDStep}
                            disabled={step == 0}>
                            Employer Details
                        </button>
                        <button
                            className='steps'
                            onClick={jobDStep}
                            disabled={step == 1}>
                            Job Details
                        </button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default CreateJobPosting;