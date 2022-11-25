import React from 'react';
import applicants from "../../data/applicants";
import Search from '../Search';


function Applicants() {
  return (
    <>
        <Search details={applicants} type="applicant" id="search-applicants"/>    
    </>
  );
}

export default Applicants;