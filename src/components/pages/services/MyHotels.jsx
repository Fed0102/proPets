import React from 'react';
import Avatar from "../../UI/avatar/avatar";
import MyPostsPage from "../../main_body/page/posts_page/MyPostsPage";

const MyHotels = () => {

    return (
        <MyPostsPage
            title={
                <span>
                    <b>Hotels.</b> Go to vacations — we'll take care of your pet!
                </span>
            }
        />
    );
};

export default MyHotels;