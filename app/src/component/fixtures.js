import  React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Container} from "reactstrap";
import {FixtureCard} from "./FixtureCard";


const Fixtures = () => {
    const {store, actions} = useContext(Context);
    return(
        <Container style={{marginTop:10}}>
            <header className="header">
                <div className="header-title"><h3>Omuyindi Wakuffa</h3></div>
            </header>
            <div className="btn-toolbar sort-toolbar mr-2 ">

                <div className="btn-group mr-2">
                    <button
                        type="button"
                        className="btn btn-dark btn-sm sort-btn"
                        onClick={() => {
                           actions.sortByCountryAsc();
                        }}
                    >
                        country
                  </button>
                </div>
                <div className="btn-group mr-2">
                    <button
                        type="button"
                        className="btn btn-dark btn-sm sort-btn"
                        onClick={() => {
                           actions.sortByStartDate();
                        }}
                    >
                        Start date
                  </button>
                </div>
            </div>
            <FixtureCard/>
        </Container>


    )
};

export  default Fixtures;