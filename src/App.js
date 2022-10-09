import React from 'react';
import { useRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import NotFound from "./pages/NotFound";

const App = () => {

    const element = useRoutes([
        { path: '/', element: <Navigate to='home' /> },
        { path: '/home', element: <Home /> },
        { path: 'home/:id', element: <CountryDetails /> },
        { path: '*', element: <NotFound /> }
    ]);

    return element;

};

export default App;