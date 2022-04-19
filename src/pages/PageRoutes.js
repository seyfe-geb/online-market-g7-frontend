import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Users from "../containers/Users/Users";

const PageRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/users"/>}/>
            <Route path="users" element={<Users/>}/>
        </Routes>
    );
};

export default PageRoutes;