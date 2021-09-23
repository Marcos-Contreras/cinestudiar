import React,  {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { Route,Switch,Link, NavLink,BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

const Search = props => {
        //console.log(useParams());
        const {busqueda} = useParams()

        

        const [data, setData] = useState([]);
        const [isLoading, setLoading] = useState(false);
        useEffect(() => {
            (async () => {
            setLoading(true);
            const response = await Axios.get('../api/getSearch', {
                params: {
                    busqueda: busqueda
                }
              })
                .then(response => {
                    setData(response.data);

                })
            setLoading(false);
            
            })();
        }, []);
        


        return (
            <Container>
            {data.map(dataItem =>(
                <Card className="m-5" style={{ width: '100%' }} key={dataItem.id}>
                    
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
      
export default Search;