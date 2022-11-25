import React from "react";
import JobCard from './JobCard';

function SearchJobs({ filteredJobs }) {
    const filtered = filteredJobs.map(job => <JobCard key={job.id} job={job} />);
    return ( 
        <div>
            {filtered}
        </div>
    );
}

export default SearchJobs;