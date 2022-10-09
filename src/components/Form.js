import React, { useContext, useEffect, useState } from "react";
import search from '../assets/images/Search.svg';
import DataContext from "../store/data-context";
import classes from '../styles/Form.module.css';
import CountryFilter from "./CountryFilter";

const Form = () => {

    const [userInput, setUserInput] = useState('');

    const { mode, countrySearchHandler } = useContext(DataContext);


    const inputChangeHandler = (e) => {
        setUserInput(e.target.value);
    };

    useEffect(() => {
        countrySearchHandler(userInput);
    }, [userInput, countrySearchHandler])

    const submitHandler = (e) => {
        e.preventDefault();
    };

    const customStyle = {
        backgroundColor: mode && 'hsl(209, 23%, 22%)',
    }

    return (
        <section className={classes.section}>
            <form className={classes.form} style={customStyle} onSubmit={submitHandler}>
                <button style={customStyle}><img alt="" src={search} /></button>
                <input
                    type='search'
                    style={customStyle}
                    placeholder="Search for a country..."
                    onChange={inputChangeHandler}
                    value={userInput}
                    className={`${mode && classes.input}`}
                />
            </form>
            <CountryFilter />
        </section>
    )
};

export default Form;