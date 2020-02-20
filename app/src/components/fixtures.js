import React from 'react';
import {Badge, Button, Card, CardBody, CardText, CardTitle, Col, Row} from "reactstrap";



const Fixtures = ({ fixtures }) => {
    if (!fixtures) {
        return (
            <div className="container">
                <header className="card">
                    <div className="header-title"><h3>Omuyindi Wakuffa</h3></div>
                </header>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="cart-title mb2 text-muted ">
                            Just a money problem....
                        </h5 >
                        <h6 className="card-text ">
                            Sorry! Nothing to display at this moment! Exceeded daily FREE quota
                        </h6>

                    </div>
                </div>
            </div>

        );
    }
    return (
        <div>
            <header className="header">
                <div className="header-title"><h3>Omuyindi Wakuffa</h3></div>
            </header>


            {fixtures && fixtures.map((fixture, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <p className="league-country card-title ">
                            {fixture.competition_name} | {fixture.competition_cluster}
                        </p >
                        <hr className="spacer"/>
                        <h5 className="fixture-name card-title mb-2 ">
                            {fixture.home_team} VS {fixture.away_team}
                        </h5 >
                        <h6 className="match-date card-text mb2 text-muted ">
                      {new Date(fixture.start_date).toUTCString()}
                        </h6>
                        <p className="card-text">
                            <p>
                                <span className="prediction-badge badge badge-info ">
                                    <b>Prediction: {fixture.prediction}</b>
                                </span>

                            </p>
                            <p>
                                <div className="card small-card">
                                    <div className="odds-text">
                                        <b>Odds: 1 X 2</b>
                                        <p>{fixture.odds[1]} | {fixture.odds["X"]} | {fixture.odds[2]}</p>
                                    </div>
                                </div>
                                <div className="card small-card">
                                    <div className="odds-text">
                                        <b>Odds: 12 X2 1X</b>
                                        <p>{fixture.odds[12]} | {fixture.odds["1X"]} | {fixture.odds["X2"]}</p>
                                    </div>
                                </div>

                            </p>

                        </p>
                    </div>
                </div>

            ))}
        </div>
    )
};

export default Fixtures