import {react, useState} from "react";
import '../JobApplication.css'


function PriorExperience({handleJobChange, handleVolunteerChange, formData, setFormData}) {
    
    // Allows user to add multiple job entries
    const handleJobAdd = () => {
        const list = formData.job_experience
        const newList = [...list, {job: ""}]
        setFormData({
            ...formData,
            "job_experience": newList
        })
    }

    //Allows user to delete job entries
    const handleJobDelete = (index) => {
        const list = formData.job_experience
        list.splice(index, 1);
        setFormData({
            ...formData,
            "job_experience": list
        })
    }

    //Allows user to add multiple volunteer entries
    const handleVolunteerAdd = () => {
        const list = formData.volunteer_experience
        const newList = [...list, {volunteer: ""}]
        setFormData({
            ...formData,
            "volunteer_experience": newList
        })
        
    }

    //Allows user to delete volunteer entries
    const handleVolunteerDelete = (index) => {
        const list = formData.volunteer_experience
        list.splice(index, 1);
        setFormData({
            ...formData,
            "volunteer_experience": list
        })
    }

    //Highlight label when use clicks on certain input box
    const focusLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "#8b0000"
        document.querySelector("[for=" + labelId + "]").style.textDecoration = "underlined"
        document.querySelector("[for=" + labelId + "]").style.fontWeight = "550"
    }

    const blurLabel = (labelId) => {
        document.querySelector("[for=" + labelId + "]").style.color = "black"
        document.querySelector("[for=" + labelId + "]").style.textDecoration = ""
        document.querySelector("[for=" + labelId + "]").style.fontWeight = ""
    }

    return(
        <div className="form_container">
            <div className="prev_experience">
                <div className="header">
                    <h3 className="input_header"> Job Experience </h3>
                    <button className="add" onClick={handleJobAdd}> 
                    Add
                    </button>
                </div>
                <div className="input_container">
                {formData.job_experience.map((singleJob, index) => (
                    <div className="experience" key={index}>
                        <div className="experience_input">
                            <textarea className="input_box" 
                            id="job" 
                            onFocus={() => focusLabel("job")}
                            onBlur={() => blurLabel("job")}
                            name="job" 
                            value={singleJob.job}
                            onChange={(e) => handleJobChange(e, index)}
                            required />
        
                        </div>
                        {formData.job_experience.length > 1 && (
                        <button className="remove" onClick={() => handleJobDelete(index)}>
                            Remove
                        </button>
                    )}
                    </div> 
                ))} 
                </div>
                
            </div>
            <div className="prev_experience">
                <div className="header">
                    <h3 className="input_header"> Volunteer Experience </h3>
                    <button className="add" onClick={handleVolunteerAdd}> 
                    Add
                    </button>
                </div>
                <div className="input_container">
                    {formData.volunteer_experience.map((singleVolunteer, index) => (
                        <div className="experience" key={index}>
                            <div className="">
                                {/* <textarea></textarea> */}
                                <textarea className="input_box" 
                                id="volunteer" 
                                onFocus={() => focusLabel("volunteer")}
                                onBlur={() => blurLabel("volunteer")}
                                name="volunteer" 
                                required 
                                value={singleVolunteer.volunteer}  
                                onChange= {(e) => handleVolunteerChange(e, index)}/>
                            </div>
                            {formData.volunteer_experience.length > 1 && (
                                <button className="remove" onClick={() => handleVolunteerDelete(index)}>
                                Remove
                                </button>
                            )}
                        </div>
                ))}
                </div>
                
            </div>
            
        </div>
    );
}

export default PriorExperience;