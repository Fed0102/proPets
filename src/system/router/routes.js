import MyHome from "../../components/pages/MyHome";
import MyFavorites from "../../components/pages/MyFavorites";
import MyStartPage from "../../components/pages/start_page/MyStartPage";
import MyLostFoundPosts from "../../components/pages/lost_found_posts/MyLostFoundPosts";
import MyLostFoundForm from "../../components/pages/lost_found_form/MyLostFoundForm";
import MyHotels from "../../components/pages/services/MyHotels";
import MyWalking from "../../components/pages/services/MyWalking";
import MyFostering from "../../components/pages/services/MyFostering";
import MyVethelp from "../../components/pages/services/MyVethelp";
import MyPostForm from "../../components/pages/post_form/MyPostForm";
import {
    favorites,
    fostering,
    found,
    foundForm,
    homePage,
    hotels,
    lost,
    lostForm,
    newPost,
    profile, start,
    vetHelp,
    walking
} from "../../constants";

export const privateRoutes = [
    {id: 0, paths: ['', '/', homePage], element: <MyHome/>},
    {id: 1, paths: [newPost], element: <MyPostForm/>},
    {id: 2, paths: [lost, found], element: <MyLostFoundPosts/>},
    {id: 3, paths: [lostForm, foundForm], element: <MyLostFoundForm/>},
    {id: 4, paths: [hotels], element: <MyHotels/>},
    {id: 5, paths: [walking], element: <MyWalking/>},
    {id: 6, paths: [fostering], element: <MyFostering/>},
    {id: 7, paths: [vetHelp], element: <MyVethelp/>},
    {id: 8, paths: [favorites], element: <MyFavorites/>},
    // {id: 9, paths: [profile], element: <MyProfile/>}
];

export const publicRoutes = [
    {id: 0, paths: [start], element: <MyStartPage/>}
]