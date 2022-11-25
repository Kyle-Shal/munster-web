import React from 'react';
import './DetailedPosting.css'
import { useLocation, Link } from 'react-router-dom';



function DetailedPosting() {
    const location = useLocation()
    const {jobDetails} = location.state

    
    return(
        <div className='main' >
            <h1>
                {jobDetails.jobTitle}
            </h1>
            
            <div className='detailed_posting_container' >
                <div className="detailed_description_text" >
                    <h1> Detailed Description </h1>
                    <p> <NewLine text={jobDetails.summary} />
                    </p>
                    <Link to="/MUNster/jobs/apply"
                    state = {{jobDetails: jobDetails}}>
                    <button className='apply_button'>
                        Apply
                    </button>
                    </Link>
                </div>
                <div className="side_bar" >
                    <h1> Job Description </h1>
                    <ul >
                        <li className='side_bar_list'>
                            <h2> Salary </h2>
                            <h3> {jobDetails.salary} </h3>
                        </li>
                        <li className='side_bar_list'>
                            <h2> Job Type </h2>
                            <h3> {jobDetails.mode} </h3>
                            <h3> {jobDetails.duration} </h3>
                            <h3> {jobDetails.hours} </h3>
                        </li>
                        <li className='side_bar_list'>
                            <h2> Job Address </h2>
                            <h3> {jobDetails.streetAddress} </h3>
                            <h3> {jobDetails.town} </h3>
                        </li>
                        <li className='side_bar_list'>
                            <h2> Contact Name </h2>
                            <h3> {jobDetails.contactName} </h3>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

function QualificationList({props}) {
    const qual = props.qual;
    return (
        <ul>
            {qual.map(q => (
                <li>{q}</li>
            ))}
        </ul>
    );
}



function NewLine(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
}

export default DetailedPosting;
