import React from 'react';



const Fixtures = ({ fixtures }) => {
    if (!fixtures) {
        return (
            <div>
                <div className="heading"><h1>Omuyindi Wakuffa</h1></div>
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
            <div className="heading"><h1>Omuyindi Wakuffa</h1></div>
            {fixtures && fixtures.map((fixture, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="cart-title ">
                            {fixture.home_team} VS {fixture.away_team}
                        </h5 >
                        <h6 className="card-subtitle mb2 text-muted ">
                            Date time: {toString(fixture.start_date)}
                        </h6>
                        <p className="card-text">
                            <p>
                                <span style={{ width: '100%' }}>
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