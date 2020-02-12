import React from 'react';


const Fixtures = ({ fixtures }) => {

    return (
        <div>
          <h1>Fixtures</h1>
            {fixtures && fixtures.map((fixture, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="cart-title ">
                            {fixture.home_team} VS {fixture.away_team}
                        </h5 >
                        <h6 className="card-subtitle mb2 text-muted ">
                            Date time: {fixture.start_date}
                        </h6>
                        <p className="card-text">
                        <p>
                            Prediction: {fixture.prediction}
                        </p>
                            <p>

                              <b>Odds: 1 X 2 </b>
                              <p>{fixture.odds[1]} | {fixture.odds["X"]} | {fixture.odds[2]}</p>
                            </p>

                        </p>
                    </div>
                </div>

            ) )}
        </div>
    )
};

export default Fixtures