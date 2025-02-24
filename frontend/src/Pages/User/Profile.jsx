import React, { useEffect, useState } from "react";
import Header from "../../Components/User/UserHeader/Header";
import ProfileDetailsComponent from "../../Components/User/Profile/ProfileDetails";
import { userHeader } from "../../Services/userApi";

const Profile = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        userHeader().then((response) => {
            console.log(response);
            setUser(response.data.userDetails);
        });
    }, []);

    return (
        <div>
            <Header />
            <ProfileDetailsComponent user={user} />
        </div>
    );
};

export default Profile;
