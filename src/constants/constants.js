import {useLocation} from "react-router-dom";

export const windowPath = useLocation().pathname.substring(1);