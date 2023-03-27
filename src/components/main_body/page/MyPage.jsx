import React from 'react';
import st from './page.module.css'
// import {useSelector} from "react-redux";
// import MyLostFoundForm from "../../pages/lost_found_form/MyLostFoundForm";

const MyPage = ({children}) => {
    return (
        <div className={st.base}>
            {children}
        </div>
    );
};

export default MyPage;





// const mainBody = useSelector(state => state.mainBody)
//
// switch (mainBody) {
//     case 'LostFoundForm':
//         return (
//             <div>
//                 <MyLostFoundForm/>
//             </div>
//         )
//     default:
//         return (
//             <div>
//                 {children}
//             </div>
//         )
// }