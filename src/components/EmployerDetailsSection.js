import './CreateJob.css';

function EmployerDetailsSection({formData, handleChange}) {

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
            <h2 className='sectionHeader'>Employer Details</h2>
            <label className='entryHeader' htmlFor="companyName">Company Name</label><br />
            <textarea
                className='inputsCreateJob'
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onFocus={() => focusLabel("companyName")}
                onBlur={() => blurLabel("companyName")}
                required
            /><br />
            <label className='entryHeader' htmlFor="companyLocation">Company Location</label><br />
            <textarea
                className='inputsCreateJob'
                name="companyLocation"
                id="companyLocation"
                value={formData.companyLocation}
                onChange={handleChange}
                onFocus={() => focusLabel("companyLocation")}
                onBlur={() => blurLabel("companyLocation")}
                required
            /><br />
        </div>
    )
}

export default EmployerDetailsSection;