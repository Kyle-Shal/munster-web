import React from "react";
import { Link } from "react-router-dom";
import './AssociatedPeopleCard.css';

function AssociatedPeopleCard({ person }) {

    const connectProfile = {
        connectId: person.id,
        connectName: person.name,
        connectJob: person.job,
        connectImg: person.imgPath
    }

    const goToProfile = () => {
        localStorage.setItem("connectProfile", JSON.stringify(connectProfile));
        window.location.reload();
    }

    return (
        <div className='asscProfileBox'>
            <div>
            <img className="asscProfilePic" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
            </div>
            <div>
            <h3 className="asscName">{person.name}</h3>
            <h5 className="asscJob">{person.job}</h5>
            </div>
            <div>
            <button className="asscConnect" onClick={goToProfile}>
                <Link to='/MUNster/otherPersonProfile' className="asscConnectLink">Connect</Link>
            </button>
            </div>
        </div>
    );
}

export default AssociatedPeopleCard;