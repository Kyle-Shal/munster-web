import './CreateJob.css';

function ShowSteps(pageHighlight) {

    return (

        <div className='createJobSteps'>
            <h1 className='stepsHeader'>Post a Job</h1>
            <div id="div1">
                <h2 className='stepsSections'>Employer Details</h2>

                <h3 className='stepsSubsections'>
                    <label htmlFor="companyName">Company Name</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="companyLocation">Company Location</label>
                </h3>
            </div>
            <div id="div2">
                <h2 className='stepsSections'>Job Details</h2>

                <h3 className='stepsSubsections'>
                    <label htmlFor="jobTitle">Job Title</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="jobDesc">Job Description</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="addInfo">Additional Information</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="quals">Applicant Qualifications</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="jobType">Job Type</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="salary">Salary Information</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="startDate">Expected Start Date</label>
                </h3>
                <h3 className='stepsSubsections'>
                    <label htmlFor="expiry">Posting Expiry Date</label>
                </h3>
            </div>
        </div>
    )
}

export default ShowSteps;