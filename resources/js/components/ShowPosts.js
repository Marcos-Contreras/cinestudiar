import React ,{Fragment,useState,useEffect,Componet} from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

import Cards from './Cards';

function ShowPosts() {


    return (
        
        <Container fluid>
            <h1 className="mt-5">Nuestras publicaciones</h1>
            <Cards/>
        </Container>
           
            
    );
}

export default ShowPosts;

if (document.getElementById('showposts')) {
    ReactDOM.render(<ShowPosts />, document.getElementById('showposts'));
}
