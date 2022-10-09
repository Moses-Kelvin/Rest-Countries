import React, { useContext } from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import classes from '../styles/Home.module.css';
import Countries from "../components/Countries";
import ApiContext from '../store/data-context';
import Spinner from '../components/UI/Spinner';


const Home = () => {

    const { selectedRegion, getSearchAll, mode, getRegion, isLoading } = useContext(ApiContext);

    let result, regions;

    selectedRegion === 'All' ? regions = getSearchAll : regions = getRegion;


    if (getSearchAll.length === 0 || (getRegion.length === 0 && selectedRegion !== 'All')) {
        result = <p className={`${mode && classes.result}`}>No Result found</p>
    } else {
        result = regions.map((el, index) =>
            <Countries key={index}
                region={el.region}
                capital={el.capital}
                population={el.population}
                img={el.flags.png}
                country={el.name.common}
            />);
    }

    const addClass = getSearchAll.length === 0 || (getRegion.length === 0 && selectedRegion !== 'All')

    return (
        <React.Fragment>
            <Header />
            <Form />
            {isLoading ? <Spinner /> : (<main className={addClass ? classes.noResult : undefined}>
                {result}
            </main>)}
        </React.Fragment>
    )
}

export default Home;