import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import image1 from '/images/BladeRunner2049.jpg';
import image2 from '/images/Apocalypse.jpg';
import image3 from '/images/2247166.jpg';
import image4 from '/images/BR2049.jpg';
import Cards from './Cards';


function Home() {
    return (
        
        <Container fluid>
           <Carousel fade>
                <Carousel.Item style={{'height':"615px"}} > 
                
                    <img
                    className="d-block w-100"
                    src={image4}
                    alt="First slide"
                    />
                    <Link as ={Link} to={`/Post/${36}`}><Carousel.Caption>
                    <h3>Blade Runner 2049</h3>
                    <p>Lee ahora nuestra reseña.</p>
                    </Carousel.Caption></Link>
                </Carousel.Item>
                <Carousel.Item style={{'height':"615px"}} >
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                    />

                    <Link as ={Link} to={`/Post/${37}`}><Carousel.Caption>
                    <h3>Apocalypse Now</h3>
                    <p>Lee ahora nuestra reseña.</p>
                    </Carousel.Caption></Link>
                </Carousel.Item>
                <Carousel.Item  style={{'height':"615px"}}>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />

                    <Link as ={Link} to={`/Post/${38}`}><Carousel.Caption>
                    <h3>Once Upon A Time In America</h3>
                    <p>Lee ahora nuestra reseña.</p>
                    </Carousel.Caption></Link>
                </Carousel.Item>
            </Carousel>
            
            <Cards/>

        </Container>
    );
}

export default Home;


