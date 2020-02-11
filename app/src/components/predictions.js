import React from 'react';


const Predictions = ({ predictions }) => {
    return (
        <div>
            <center><h1>Predictions</h1></center>
            {this.props.predictions.map((prediction) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{prediction.homeTeam.team_name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text"></p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Predictions