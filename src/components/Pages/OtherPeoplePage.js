import './../OtherPeoplePage.css';
import AssociatedWith from '../AssociatedWith';
import ProfilePage from '../ProfilePage';
import OtherPersonProfile from '../OtherPersonProfile';

function OtherPeoplePage() {

    const getAssociatedWith = () => {
        return <AssociatedWith />
    }

    return (
        <div>
            <div>
                <OtherPersonProfile />
            </div>
            <div>
                {getAssociatedWith()}
            </div>
        </div>
    )
}

export default OtherPeoplePage;