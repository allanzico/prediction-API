import  React, {useContext} from "react";
import {Context} from "../store/appContext";
import { Container} from "reactstrap";
import {FixtureCard} from "./FixtureCard";


const Fixtures = () => {
    const {store, actions} = useContext(Context);
    return(
        <Container style={{marginTop:10}}>
            <FixtureCard/>
        </Container>


    )
};

export  default Fixtures;