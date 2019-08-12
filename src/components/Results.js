import React from 'react';
import {
    Grid,
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';


const Results = () => (

    <Grid>
        <h1>Result List </h1>
        <h2>
            <ListGroup>
                <ListGroupItem href="#" active>Link 1</ListGroupItem>
                <ListGroupItem href="#">Link 2</ListGroupItem>
                <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
            </ListGroup>
        </h2>

    </Grid>


);

export default Results;