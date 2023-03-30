import MyHome from "../components/pages/MyHome";
import MyFavorites from "../components/pages/MyFavorites";
import MyStartPage from "../components/pages/start_page/MyStartPage";
import MyLostFoundPosts from "../components/pages/lost_found_posts/MyLostFoundPosts";
import MyLostForm from "../components/pages/lost_found_form/MyLostForm";
import MyHotels from "../components/pages/services/MyHotels";
import MyWalking from "../components/pages/services/MyWalking";
import MyFostering from "../components/pages/services/MyFostering";
import MyVethelp from "../components/pages/services/MyVethelp";
import MyPostForm from "../components/pages/post_form/MyPostForm";
import MyProfile from "../components/pages/profile/MyProfile";
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
    profile, startPage,
    vetHelp,
    walking
} from "../constants/paths";

export const privateRoutes = [
    {id: 0, paths: ['', '/', homePage], element: <MyHome/>},
    {id: 1, paths: [newPost], element: <MyPostForm/>},
    {id: 2, paths: [lost, found], element: <MyLostFoundPosts/>},
    {id: 3, paths: [lostForm, foundForm], element: <MyLostForm/>},
    {id: 4, paths: [hotels], element: <MyHotels/>},
    {id: 5, paths: [walking], element: <MyWalking/>},
    {id: 6, paths: [fostering], element: <MyFostering/>},
    {id: 7, paths: [vetHelp], element: <MyVethelp/>},
    {id: 8, paths: [favorites], element: <MyFavorites/>},
    {id: 9, paths: [profile], element: <MyProfile/>}
];

export const publicRoutes = [
    {id: 0, paths: [startPage], element: <MyStartPage/>}
]