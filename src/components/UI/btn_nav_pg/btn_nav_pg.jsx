import React from 'react';
import st from './btn_nav_pg.module.css'
import {Link} from "react-router-dom";
import {useWindowPath} from "../../../hooks/useWindowPath";
import NavIcon from "../../main_body/nav_bar/btns/icons/NavIcon";
import MySubNav from "../../main_body/nav_bar/nav_body/sub_nav_body/MySubNav";
import BtnSubNavPg from "../btn_sub_nav_pg/btn_sub_nav_pg";

const BtnNavPg = ({button}) => {
    const location = useWindowPath();
    const actBtn = button.paths.some((path) => path === location);
    const showSubbtns = button.sub_points ? button.paths.some((path) => path === location) : null;
    return (
        <>
            <div className={showSubbtns ? st.act : undefined}>
                <div className={actBtn ? `${st.base} ${st.base_act}` : st.base}>
                    <Link to={button.paths[0]} className={st.link}>
                        <div className={actBtn ? `${st.normal} ${st.normal_act}` : st.normal}>
                            <NavIcon iconPath={button.icon} act_green={actBtn}/>
                            {button.name}
                        </div>
                    </Link>
                </div>
            </div>
            {showSubbtns &&
                <MySubNav>
                    {button.sub_points.map(subBtn =>
                        <BtnSubNavPg key={subBtn.sub_id} btnPath={subBtn.sub_paths}
                                     icon={subBtn.sub_icon} title={subBtn.sub_name}/>
                    )}
                </MySubNav>
            }
        </>
    );
};

export default BtnNavPg;