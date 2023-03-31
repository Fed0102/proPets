import {favorites, fostering, found, homePage, hotels, lost, vetHelp, walking} from "../../../../constants/paths";
import iconHome from "../../../../assets/png/home.png";
import iconLost from "../../../../assets/png/lost_black.png";
import iconFound from "../../../../assets/png/paw_black.png";
import iconServices from "../../../../assets/png/megafon.png";
import subIconHotels from "../../../../assets/png/hotels.png";
import subIconWalking from "../../../../assets/png/walking.png";
import subIconFostering from "../../../../assets/png/fostering.png";
import subIconVethelp from "../../../../assets/png/vetHelp.png";
import iconFavorites from "../../../../assets/png/star_full.png";

export const pgBtnsAr = [
    {id: 0, name: 'Home', paths: [homePage, '/', ''], icon: iconHome, sub_points: null},
    {id: 1, name: 'Lost', paths: [lost], icon: iconLost, sub_points: null},
    {id: 2, name: 'Found', paths: [found], icon: iconFound, sub_points: null},
    {
        id: 3, name: 'Services', paths: [hotels, walking, fostering, vetHelp], icon: iconServices, sub_points:
            [
                {sub_id: 0, sub_name: 'Hotels', sub_paths: hotels, sub_icon: subIconHotels},
                {sub_id: 1, sub_name: 'Walking', sub_paths: walking, sub_icon: subIconWalking},
                {sub_id: 2, sub_name: 'Fostering', sub_paths: fostering, sub_icon: subIconFostering},
                {sub_id: 3, sub_name: 'VetHelp', sub_paths: vetHelp, sub_icon: subIconVethelp},
            ]
    },
    {id: 4, name: 'Favorites', paths: [favorites], icon: iconFavorites, sub_points: null},
];