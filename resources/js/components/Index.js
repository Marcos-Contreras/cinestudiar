import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Home from './Home';
import ShowPosts from './ShowPosts';
import PostForm from './PostForm';
import Post from './Post';
import EditPost from './EditPost';
import Search from './Search';
import ChangePost from './ChangePost';
import Login from './Login';
import { Route,Switch,Link, NavLink,BrowserRouter} from 'react-router-dom';
import { post } from 'jquery';

import image1 from '/images/LogoSF.png';


const Index = props => {
    const [data, setData] = useState({busqueda: ''})

      const handleChange = (event) => {
        
        
        setData({
            
            [event.target.name] : event.target.value
        })

    }
    console.log(data.busqueda)
    /*const handleSubmit = async (e) =>{
        e.preventDefault();
        const {query} = e.target.value
        setData({
            query: query
        })
        }*/
    /*const [data, setData] = useState({
        query: ''
    })

    /*const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    console.log(data.getData(query))
    }*/
    
    /*const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setData({

            query: event.target.value
        })
        
    }*/
    
    

    return (
        
        
        <Container fluid>
            
            <BrowserRouter>
                <Navbar bg="light" variant="light" sticky='top'>
                    <Navbar.Brand as ={Link} to="/"><img src={image1} width="40" height="40"/></Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as ={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as ={Link} to="/ShowPosts">Publicaciones</Nav.Link>
                            <Nav.Link as ={Link} to="/Login">Iniciar sesión</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Texto" className="mr-sm-2" name='busqueda' onChange={handleChange}/>
                            
                                <Button as ={Link} to={`/Search/${data.busqueda}`} variant="outline-primary" >Buscar</Button>
                            
                        </Form>
                </Navbar>
                

                <Switch>
                    <Route exact path='/Search/:busqueda' component= {Search} />
                    <Route exact path='/Post/:id' component= {Post} />
                    <Route exact path='/ChangePost/:id' component= {ChangePost} />
                    <Route exact path='/Login' component= {Login} />
                    <Route exact path='/EditPost' component= {EditPost} />
                    <Route exact path='/PostForm' component= {PostForm} />
                    <Route exact path='/ShowPosts' component= {ShowPosts} />
                    <Route exact path='' component= {Home} />
                </Switch>

            
            </BrowserRouter>


            <div className="main-footer bg-dark">
                <div className="container">
                    <div className="row text-white justify-content-center">
                        <div className="m-5 col-lg-3 col-sm-6 ">
                            <h4>Redes sociales</h4>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/cinestudiar1" style={{color:"white"}}>Facebook</a></li>
                                <li><a href="https://www.instagram.com/cinestudiar/" style={{color:"white"}}>Instagram</a></li>
                                <li><a href="https://www.facebook.com/cinestudiar1" style={{color:"white"}}>Twitter</a></li>
                                <li><a href="https://twitter.com/Cinestudiar1" style={{color:"white"}}>YouTube</a></li>
                            </ul>
                        </div>
                        <div className="m-5 col-lg-3 col-sm-6">
                            <h4>Contacto</h4>
                            <ul className="list-unstyled">
                                <li>Teléfono: 449-406-74-57</li>
                                <li>Correro: cinestudiar@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>

           

        </Container>
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}
