const predictionUrl = "https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic";


const getState = ({ getStore,  setStore }) => {

    return {

        store: {
            predictions: {},
            predictionsSortAlgorithm: "byStartDate"

        },
        actions: {
            fetchPredictions(){
                fetch(predictionUrl, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "football-prediction-api.p.rapidapi.com",
                        "x-rapidapi-key": "6c2959b2d1msh898657065a254ecp107e42jsn7f3f1e40fa18"
                    }
                }).then(Response => Response.json())
                    .then((data) => {
                        setStore({ predictions: data })
                    }).catch(console.log)
            },

            sortByCountryAsc(){
                setStore({
                    predictionsSortAlgorithm: "byCountryAsc"
                })
            } ,
            sortByStartDate(){
                setStore({
                    predictionsSortAlgorithm: "byStartDateAsc"
                })
            }
        }

    };
};

export default getState;
