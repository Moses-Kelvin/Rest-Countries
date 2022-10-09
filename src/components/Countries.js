import React, { useContext } from "react";
import classes from '../styles/Countries.module.css';
import DataContext from "../store/data-context";
import { useNavigate } from "react-router-dom";

const Countries = (props) => {
    
    const navigate = useNavigate();

   const { region, capital, population, img, country} = props

    const  { mode } = useContext(DataContext);

    const clickHandler = () => {
        navigate(`${country}`);
    }

    const customStyle = {
        backgroundColor: mode && 'hsl(209, 23%, 22%)',
        color: mode && 'white'
    };

    const Population = (population.toString().split(".")[0] = population.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","));

    return (
             <div className={classes.country} style={customStyle} onClick={clickHandler}>
            <img alt="" src={img}/>
            <div className={classes['country-info']}>
               <h2>{country}</h2>
               <h3><strong>Population:</strong> <span>{Population}</span></h3>
               <h3><strong>Region:</strong> <span>{region}</span></h3>
               <h3><strong>Capital:</strong> <span>{capital}</span></h3>
            </div>
        </div>   
    )
};

export default Countries;