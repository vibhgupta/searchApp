import React from 'react';
import {
    Form,
    FormGroup,

    FormControl,
    Button
    
} from  'react-bootstrap';

const SearchFrom = () => (

    <Form inline>
       
           
        <FormGroup controlId="formInlineEmail">
           
            <FormControl type="search" placeholder="type spomething to search" />
        </FormGroup>
        {' '}
        <Button type="submit">
            Search
    </Button>
    </Form>


);



export default SearchFrom;