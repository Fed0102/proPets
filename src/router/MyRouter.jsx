import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import MyError from "../components/pages/MyError";
import {auth} from "../firebase/firebase-config";
import MyStartPage from "../components/pages/start_page/MyStartPage";

const MyRouter = () => {

    return auth ?
        (
            <Routes>
            {privateRoutes.map(route =>
                route.paths.map(p =>
                    <Route
                        key={p}
                        element={route.element}
                        path={p}
                    />
                )
            )}
            <Route element={<MyError/>} path='*'/>
        </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(route =>
                    route.paths.map(p =>
                        <Route
                            key={p}
                            element={route.element}
                            path={p}
                        />
                    )
                )}
                <Route element={<MyStartPage/>} path='*'/>
            </Routes>
        )
};

export default MyRouter;

// <Routes>
//     {privateRoutes.map(route =>
//         route.paths.map(p =>
//             <Route
//                 key={p}
//                 element={route.element}
//                 path={p}
//             />
//         )
//     )}
//     <Route element={<MyError/>} path='*'/>
// </Routes>