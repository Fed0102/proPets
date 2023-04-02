import React, {useState} from 'react';
import st from "./profile.module.css";
import MyData from "./states/data/MyData";
import MyActivities from "./states/activities/MyActivities";

const MyProfile = () => {
    const [prflState, setPrflState] = useState(true)

    const profileOrActivities = (state) => {
        if (state) {
            return <MyData/>
        } else {
            return <MyActivities/>
        }
    }
    return (
        <>
            <div className={st.title}>
                <b>Your profile. </b> Change, edit and manage your data.
            </div>
            <div className={st.data_card}>
                <button className={prflState ? `${st.button} ${st.active}` : `${st.button}`}
                        onClick={() => setPrflState(true)}>
                    <b>My profile</b>
                </button>
                <button className={prflState ? `${st.button}` : `${st.button} ${st.active}`}
                        onClick={() => setPrflState(false)}>
                    <b>Activities</b>
                </button>
                {profileOrActivities(prflState)}
            </div>
        </>
    );
};

export default MyProfile;