import './CreateJob.css';

function JobDetailsSection({formData, handleChange}) {

    const focusLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "#8b0000";
        document.querySelector("[for=" + labelId + "]").style.textDecoration = "underline";
        document.querySelector("[for=" + labelId + "]").style.fontWeight = "550";
    }

    const blurLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "black";
        document.querySelector("[for=" + labelId + "]").style.textDecoration = "";
        document.querySelector("[for=" + labelId + "]").style.fontWeight = "";
    }

    return (
        <div>
            <h2 className='sectionHeader'>Job Details</h2>
            <label className='entryHeader' htmlFor="jobTitle">Job Title</label><br />
            <textarea
                className='inputsCreateJob'
                name="jobTitle"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                onFocus={() => focusLabel("jobTitle")}
                onBlur={() => blurLabel("jobTitle")}
                required
            /><br />
            <label className='entryHeader' htmlFor="jobDesc">Job Description</label><br />
            <textarea
                className='inputsCreateJob'
                name="jobDesc"
                id="jobDesc"
                value={formData.jobDesc}
                onChange={handleChange}
                onFocus={() => focusLabel("jobDesc")}
                onBlur={() => blurLabel("jobDesc")}
                required
            /><br />
            <label className='entryHeader' htmlFor="addInfo">Additional Information</label><br />
            <textarea
                className='inputsCreateJob'
                name="addInfo"
                id="addInfo"
                value={formData.addInfo}
                onChange={handleChange}
                onFocus={() => focusLabel("addInfo")}
                onBlur={() => blurLabel("addInfo")}
            /><br />
            <label className='entryHeader' htmlFor="quals">Applicant Qualifications</label><br />
            <textarea
                className='inputsCreateJob'
                name="quals"
                id="quals"
                value={formData.quals}
                onChange={handleChange}
                onFocus={() => focusLabel("quals")}
                onBlur={() => blurLabel("quals")}
                required
            /><br />
            <label className='entryHeader' htmlFor="jobType">Job Type</label><br />
            <textarea
                className='inputsCreateJob'
                name="jobType"
                id="jobType"
                value={formData.jobType}
                onChange={handleChange}
                onFocus={() => focusLabel("jobType")}
                onBlur={() => blurLabel("jobType")}
                required
            /><br />
            <label className='entryHeader' htmlFor="salary">Salary Information</label><br />
            <textarea
                className='inputsCreateJob'
                name="salary"
                id="salary"
                value={formData.salary}
                onChange={handleChange}
                onFocus={() => focusLabel("salary")}
                onBlur={() => blurLabel("salary")}
                required
            /><br />
            <label className='entryHeader' htmlFor="startDate">Expected Start Date</label><br />
            <textarea
                className='inputsCreateJob'
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                onFocus={() => focusLabel("startDate")}
                onBlur={() => blurLabel("startDate")}
            /><br />
            <label className='entryHeader' htmlFor="expiry">Posting Expiry Date</label><br />
            <textarea
                className='inputsCreateJob'
                name="expiry"
                id="expiry"
                value={formData.expiry}
                onChange={handleChange}
                onFocus={() => focusLabel("expiry")}
                onBlur={() => blurLabel("expiry")}
            /><br />
        </div>
    )
}

export default JobDetailsSection;