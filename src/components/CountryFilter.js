import React, { useContext } from "react";
import DataContext from "../store/data-context";
import classes from "../styles/CountryFilter.module.css";

const CountryFilter = () => {

  const { mode, setSelectedRegion, selectedRegion } = useContext(DataContext);

  const dropdownChangeHandler = (event) => {
    setSelectedRegion(event.target.value)
  };


  const customStyle = {
    backgroundColor: mode ?  'hsl(209, 23%, 22%)' : 'white',
    color: mode && 'white'
  }

  return (
    <div className={classes['country-filter']} style={customStyle}>
      <div className={classes['country-filter__control']}>
        <select value={selectedRegion} style={customStyle} onChange={dropdownChangeHandler}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default CountryFilter;