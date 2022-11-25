import React from "react";
import Card from './Card';

function SearchProfiles({ filteredProfiles }) {
    const filtered = filteredProfiles.map(person => <Card key={person.id} person={person} />);
    return ( 
        <div>
            {filtered}
        </div>
    );
}

export default SearchProfiles;