import React, { useContext } from "react";
import { ReactComponent as Sun } from '../assets/images/icon-sun.svg';
import { ReactComponent as Moon } from '../assets/images/icon-moon.svg';
import classes from '../styles/Header.module.css';
import DataContext from "../store/data-context";

const Header = () => {

    const { mode, themeHandler } = useContext(DataContext);

    const customStyle = {
        backgroundColor: mode && 'hsl(209, 23%, 22%)'
    }

    return (
        <header className={classes.header} style={customStyle}>
            <h4 style={{ color: mode && 'white' }}>Where in the world?</h4>
            <div>
                {mode ? <Sun alt="" onClick={themeHandler}
                    className={`${mode && classes.moon}`} /> :
                    <Moon onClick={themeHandler} />}
            </div>
        </header>
    )
};

export default Header;