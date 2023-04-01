import MyHome from "../components/pages/MyHome";
import MyFavorites from "../components/pages/MyFavorites";
import MyStartPage from "../components/pages/start_page/MyStartPage";
import MyLostFoundForm from "../components/pages/lost_found_form/MyLostFoundForm";
import MyHotels from "../components/pages/services/MyHotels";
import MyWalking from "../components/pages/services/MyWalking";
import MyFostering from "../components/pages/services/MyFostering";
import MyVethelp from "../components/pages/services/MyVethelp";
import MyPostForm from "../components/pages/post_form/MyPostForm";
import MyProfile from "../components/pages/profile/MyProfile";
import {
    favorites, fostering,
    found, foundForm,
    homePage, hotels,
    lost, lostForm,
    newPostHome, newPostHotels,
    previewFound, previewLost,
    profile, startPage,
    vetHelp, walking
} from "./paths";
import PreviewLostFoundForm from "../components/pages/preview_lost_found_form/PreviewLostFoundForm";
import MyLost from "../components/pages/lost_found_posts/MyLost";
import MyFound from "../components/pages/lost_found_posts/MyFound";

export const privateRoutes = [
    {id: 0, paths: ['', '/', homePage], element: <MyHome/>},
    {id: 1, paths: [newPostHome, newPostHotels], element: <MyPostForm/>},
    {id: 2, paths: [lost], element: <MyLost/>},
    {id: 11, paths: [found], element: <MyFound/>},
    {id: 3, paths: [lostForm, foundForm], element: <MyLostFoundForm/>},
    {id: 4, paths: [hotels], element: <MyHotels/>},
    {id: 5, paths: [walking], element: <MyWalking/>},
    {id: 6, paths: [fostering], element: <MyFostering/>},
    {id: 7, paths: [vetHelp], element: <MyVethelp/>},
    {id: 8, paths: [favorites], element: <MyFavorites/>},
    {id: 9, paths: [profile], element: <MyProfile/>},
    {id: 10, paths: [previewLost, previewFound], element: <PreviewLostFoundForm/>}
];

export const publicRoutes = [
    {id: 0, paths: [startPage], element: <MyStartPage/>}
]