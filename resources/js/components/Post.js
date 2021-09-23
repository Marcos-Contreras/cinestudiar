import React,  {useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';

const Post = props => {
        //console.log(useParams());
        const {id} = useParams()
        const [isLoading, setLoading] = useState(false);
        /*const {id2} = useParams()

        const [author, setAuthor] = useState([]);
        
        useEffect(() => {
            (async () => {
            setLoading(true);
            const response = await Axios.get('../api/getAuthor', {
                params: {
                  idAuthor: id2
                }
              })
                .then(response => {
                    setAuthor(response.data);
                })
            setLoading(false);
            
            })();
        }, []);*/

        

        const [data, setData] = useState([]);
        
        useEffect(() => {
            (async () => {
            setLoading(true);
            const response = await Axios.get('../api/getPost', {
                params: {
                  idPost: id
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
                    <div className="py-5" key={dataItem.id}>
                        <h1>{dataItem.name}</h1>
                        <p className="text-lg" >{dataItem.body}</p>
                    </div>
                ))}
            </Container>
        );
    }
      
export default Post;