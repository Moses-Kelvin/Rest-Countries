import React, { useEffect, useState } from "react";

import ApiContext from "./data-context";

const DataContextProvider = ({ children }) => {

    const initializer = () => JSON.parse(localStorage.getItem('countries')) || [];

    const [mode, setMode] = useState(false);

    const [data, setData] = useState(initializer);

    const [selectedRegion, setSelectedRegion] = useState('All');

    const [searchData, setSearchData] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const body = document.querySelector('body');

    body.style.backgroundColor = mode ? 'hsl(207, 26%, 17%)' : 'white';


    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setMode(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('countries', JSON.stringify(data))
    }, [data])

    const themeHandler = () => {
        setMode(prev => !prev);
        if (!mode) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.removeItem('theme');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const result = await response.json();
            setData(result);
            setIsLoading(false)
        }
        fetchData();
    }, []);


    const countrySearchHandler = (param) => {
        setSearchData(param.toLocaleLowerCase());
    };


    const getRegion = data.filter(item => item.region === selectedRegion
        && (item.name.common.toLocaleLowerCase().startsWith(searchData)));

    const getSearchAll = data.filter(item => item.name.common.toLocaleLowerCase().startsWith(searchData));


    const Values = {
        mode,
        themeHandler,
        data,
        setSelectedRegion,
        selectedRegion,
        getRegion,
        searchData,
        countrySearchHandler,
        getSearchAll,
        isLoading
    }

    return (
        <ApiContext.Provider value={Values}>
            {children}
        </ApiContext.Provider>
    )
};

export default DataContextProvider;