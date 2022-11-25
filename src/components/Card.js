import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

function Card({ person }) {

    const connectProfile = {
        connectId: person.id,
        connectName: person.name,
        connectJob: person.job,
        connectImg: person.imgPath
    }

    const goToProfile = () => {
        localStorage.setItem("connectProfile", JSON.stringify(connectProfile));
    }

    return (
        <div className='profileBox'>
            <img className="profilePic" alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
            <div className="name">
                <h2>{person.name}</h2>
                <h4>{person.job}</h4>
            </div>
            <button className="connect" onClick={goToProfile}>
                <Link to='/MUNster/otherPersonProfile' className="connectLink">Connect</Link></button>
        </div>
    );
}

export default Card;