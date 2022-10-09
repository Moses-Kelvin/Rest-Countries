import React, { useContext } from "react";
import arrow from '../assets/images/Left-Arrow.svg';
import { useParams, useNavigate } from "react-router-dom";
import classes from '../styles/CountryDetails.module.css';
import DataContext from "../store/data-context";

const CountryDetails = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const { mode, data } = useContext(DataContext);

    const customStyle = {
        color: mode && 'white',
    };

    const buttonStyle = {
        backgroundColor: mode ? 'hsl(209, 23%, 22%)' : 'white'
    }

    const returnToPrevious = () => {
        navigate(-1)
    };


    const Data = data.find(el => el.name.common.toLowerCase() === id.toLowerCase());

    const native = Object.keys(Data.name.nativeName)[0];

    const nativeName = Data.name.nativeName[native].common;

    const currency = Object.keys(Data.currencies)[0];

    const currencies = Data.currencies[currency].name;

    let Languages = Object.values(Data.languages);

    let hasBorders = Object.keys(Data).includes("borders");

    const displayCountry = (border) => {
       const countryBorder = data.find(el => el.cca3 === border);
       navigate(`/home/${countryBorder.name.common}`)
    };


    const Population = (Data.population.toString().split(".")[0] = Data.population.toString().split(".")[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","));


    return (
        <section className={classes.section} style={customStyle}>
            <button onClick={returnToPrevious} style={buttonStyle}>
                <img alt="" src={arrow} />
                <p className={`${!mode && classes.back}`}>Back</p>
            </button>
            <div>
                <img src={Data.flags.png} alt="" className={classes.flag} />
                <summary>
                    <div className={classes['country-datails']}>
                        <div>
                            <h2>{Data.name.common}</h2>
                            <h3><strong>Native Name:</strong> <span>{nativeName}</span></h3>
                            <h3><strong>Population:</strong> <span>{Population}</span></h3>
                            <h3><strong>Region:</strong> <span>{Data.region}</span></h3>
                            <h3><strong>Sub Region:</strong> <span>{Data.subregion}</span></h3>
                            <h3><strong>Capital:</strong> <span>{Data.capital}</span></h3>
                        </div>
                        <div>
                            <h3><strong>Timezone:</strong> <span>{Data.timezones[0]}</span></h3>
                            <h3><strong>Currencies:</strong> <span>{currencies}</span></h3>
                            <div className={classes['lang-div']}><strong>Languages:</strong>
                                {Languages.map((el, index) =>
                                    <span key={index} className={classes.lang}>{el},</span>)}</div>
                        </div>
                    </div>
                    <div>
                        {hasBorders &&
                            <div className={classes['borders-div']}>
                                <h3>Border Countries:</h3>
                                <div className={classes.borders}>
                                    {Data.borders.map((border, index) =>
                                        <p key={index}
                                            className={classes.border}
                                            onClick={() => displayCountry(border)}>{border}</p>
                                    )}
                                </div>
                            </div>
                        }
                    </div>
                </summary>
            </div>
        </section>
    )
};

export default CountryDetails;