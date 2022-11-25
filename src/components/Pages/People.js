import React from 'react';
import profiles from "../../data/profiles";
import Search from '../Search';


function People() {
  return (
    <>
      <Search details={profiles} type="profile" id="search-people"/>
    </>
  );
}

export default People;