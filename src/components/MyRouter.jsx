import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes} from "../system/routes";
import MyError from "./pages/MyError";

const MyRouter = () => {
    return (
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
    );
};

export default MyRouter;