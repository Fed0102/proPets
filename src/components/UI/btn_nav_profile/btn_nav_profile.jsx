import React from 'react';
import st from './btn_nav_profile.module.css'
import {Link} from "react-router-dom";
import {useWindowPath} from "../../../hooks/useWindowPath";
import Avatar from "../avatar/avatar";
// import {useSelector} from "react-redux";


const BtnNavPrfl = ({btnPath}) => {
    // const userLoaded = useSelector(state => state.user.loaded);
    // const [name, setName] = useState('');
    // const [photo, setPhoto] = useState('')
    let user = localStorage.getItem('userInfo');
    let initial = JSON.parse(user);
    const location = useWindowPath();
    const actBtn = btnPath.some((path) => path === location);

    // useEffect(() => {
    //     setName(initial.name);
    //     setPhoto(initial.photo);
    // }, [userLoaded]);

    return (
        <div className={actBtn ? `${st.base} ${st.base_act}` : st.base}>
            <Link to={btnPath[0]} className={st.link}>
                <div className={actBtn ? `${st.normal} ${st.normal_act}` : st.normal}>
                    <Avatar photo={initial.photo}/>
                    <div className={st.text}>
                        {initial.name}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BtnNavPrfl;