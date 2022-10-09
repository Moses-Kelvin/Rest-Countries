import React, { useContext } from 'react';
import DataContext from '../store/data-context';
import { useNavigate } from 'react-router-dom';
import classes from '../styles/NotFound.module.css';

const NotFound = () => {

    const navigate = useNavigate();

    const { mode } = useContext(DataContext);

    const customStyle = {
        color: mode && 'white',
    };

    const buttonStyle = {
        backgroundColor: mode ? 'hsl(209, 23%, 22%)' : 'white',
        color: mode && 'white'
    }

    const returnToHome = () => {
        navigate('/home')
    };

    return (
        <div className={classes.NotFound} style={customStyle}>
            <div>
                <h1>page not found!</h1>
                <button style={buttonStyle}
                    onClick={returnToHome}
                >Back to home
                </button>
            </div>
        </div>
    )
};

export default NotFound;