import React from "react";
import ApplicantCard from './ApplicantCard';

function SearchApplicants({ filteredApplicants }) {
    const filtered = filteredApplicants.map(person => <ApplicantCard key={person.id} person={person} />);
    return ( 
        <div>
            {filtered}
        </div>
    );
}

export default SearchApplicants;