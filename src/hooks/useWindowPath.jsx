import {useLocation} from "react-router-dom";

export const useWindowPath = () => {
    return useLocation().pathname;
}