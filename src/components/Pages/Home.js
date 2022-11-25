import React from 'react';
import jobs from "../../data/jobs";
import Search from '../Search';


function Home() {
  return (
    <>
      <Search details={jobs} type="jobs" id="search-jobs"/>
    </>
  );
}

export default Home;