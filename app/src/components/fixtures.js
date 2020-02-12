import React from 'react';


const Fixtures = ({ fixtures }) => {

    return (
        <div>
          <h1>Fixtures</h1>
            {fixtures && fixtures.map((fixture, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{fixture.homeTeam.team_name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted"></h6>
                        <p className="card-text"></p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Fixtures