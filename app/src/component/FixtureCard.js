import  React, {useState, useEffect,useContext} from "react";

import {Context} from "../store/appContext";
import  PropTypes from "prop-types";
import _ from 'lodash';


export  const FixtureCard = props =>{
    const {store, actions} = useContext(Context);

    let predict = store.predictions;
    const  sorted = Object.values(predict).sort((a,b)=>a.id-b.id)
    const sortingAlgorithms = {
        "byCountryAsc": (a,b) => a - b,
        "byCountryDesc": (a,b) => b.competition_cluster - a.competition_cluster,
       // / "byYearDesc": (a,b) => b.year_produced - a.year_produced
    };

    console.log(sorted);
    console.log(predict);


    return(
        <div>
            <header className="header">
                <div className="header-title"><h3>Omuyindi Wakuffa</h3></div>
            </header>
            {store.predictions.data && store.predictions.data.sort(((a, b) =>a.id-b.id )).map((prediction, index) => (

                <div className="card" key={index}>

                    <div className="card-body">
                        <span className="league-country card-title ">
                            {prediction.competition_name} | {prediction.competition_cluster}
                        </span >
                        <hr className="spacer" />
                        <h5 className="fixture-name card-title mb-2 ">
                            {prediction.home_team} VS {prediction.away_team}
                        </h5 >
                        <h6 className="match-date card-text mb2 text-muted ">
                            {new Date(prediction.start_date).toUTCString()}
                        </h6>
                        <span className="card-text">
                            <p>
                                <span className="prediction-badge badge badge-info ">
                                    <b>Prediction: {prediction.prediction}</b>
                                </span>

                            </p>
                            <span>
                                <div className="card small-card">
                                    <div className="odds-text">
                                        <b>Odds: 1 X 2</b>
                                        <p>{prediction.odds[1]} | {prediction.odds["X"]} | {prediction.odds[2]}</p>
                                    </div>
                                </div>
                                <div className="card small-card">
                                    <div className="odds-text">
                                        <b>Odds: 12 X2 1X</b>
                                        <p>{prediction.odds[12]} | {prediction.odds["1X"]} | {prediction.odds["X2"]}</p>
                                    </div>
                                </div>

                            </span>

                        </span>
                    </div>
                </div>

            ))}
        </div>
    )
};

//Define the data-types for the component's properties

FixtureCard.propTypes ={
    match: PropTypes.object,
    history: PropTypes.object,
    onDelete: PropTypes.func
};

//Define default values for the component's properties

FixtureCard.defaultProps = {
    onDelete: null
}