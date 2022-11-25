import './OtherPeoplePage.css';
import profiles from './../data/profiles.js';
import AssociatedPeopleCard from './AssociatedPeopleCard.js';

let jobSplit = []
let commonEmployer = ""

const getPersonJob = () => {
    if (localStorage.getItem("connectProfile")) {
        jobSplit = (JSON.parse(localStorage.getItem("connectProfile")))["connectJob"].split("at ");
        commonEmployer = jobSplit.at(-1);
        localStorage.setItem("commomEmp", commonEmployer);
    };
}

let othersJobs = []
let othersProfiles = [];

const getOthersJobs = () => {
    othersJobs.length = 0;
    othersProfiles.length = 0;
    for (var i = 0; i < profiles.length; i++) {
        if ((JSON.parse(localStorage.getItem("connectProfile")))["connectId"] != profiles[i].id) {
            othersJobs.push(profiles[i].job);
            othersProfiles.push(profiles[i]);
        }
    };
}

let associatedProfiles = []

const checkAssociated = () => {
    getOthersJobs();
    associatedProfiles.length = 0;
    for (var i=0; i<othersJobs.length; i++) {
        if (commonEmployer === othersJobs[i].split("at ").at(-1)) {
            associatedProfiles.push(othersProfiles[i]);
        }
    };
}

function AssociatedWith() {

    getPersonJob()

    checkAssociated()

    const filtered = associatedProfiles.map(person => <AssociatedPeopleCard key={person.id} person={person} />);

    return (
        <div className="mainAssociationBox">
            <h3 className="otherPeopleLine">Other people associated with:</h3>
            <p className="employerLine">{commonEmployer}</p>
            <div className='associationBoxPink'>{filtered}</div>
        </div>
    )
}

export default AssociatedWith;