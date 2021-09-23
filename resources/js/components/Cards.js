import React,  {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

    const Cards = props => {
        const [data, setData] = useState([]);
        const [isLoading, setLoading] = useState(false);
        useEffect(() => {
            (async () => {
            setLoading(true);
            const response = await Axios({
                method: 'get',
                url: 'api/getPosts'
                
                })
                .then(response => {
                    console.log('response.data',response.data)
                    setData(response.data);
                })
            setLoading(false);
            
            console.log(data)
            })();
        }, []);
    
    
      /*GET SPECIFIC POST
      const handlePost = async (e) =>{
        e.preventDefault()
        let formData = new FormData();
        formData.append('id', data.id)
          await Axios({
            method: 'get',
            url: 'api/posts/{id}',
            data: formData
          })
          .then(response=>{
              console.log('response.data',response.data)
              setCard(response.data)
              
          })
          .catch(error => {
            console.log('Error Login', error )
          })
    }*/
      
      
    return (
        <Container>
            {data.map(dataItem =>(
                <Card className="m-5" xl={1} key={dataItem.id}>
                    
                    <Card.Body>
                        <Card.Title>{dataItem.name}</Card.Title>
                            <Card.Text>
                                {dataItem.extract}
                            </Card.Text>
                            <Link as ={Link} to={`/Post/${dataItem.id}`}><Button variant="primary" >Ir al post</Button></Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
    }
export default Cards;