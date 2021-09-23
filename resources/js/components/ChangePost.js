import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';


const ChangePost = props => {
    const {id} = useParams()

    
    const [publi, setPubli] = useState({
        id: '',
        name: '',
        slug: '',
        extract: '',
        body: '',
        status: '',
        user_id: '',
        category_id: ''
    });

    const [isLoading, setLoading] = useState(false);        
        useEffect(() => {
            (async () => {
            setLoading(true);
            const response = await Axios.get('../api/getPost', {
                params: {
                  idPost: id
                }
              })
                .then(response => {
                    setPubli(prevState => ({
                        ...prevState,
                        id: response.data[0].id,
                        name: response.data[0].name,
                        slug: response.data[0].slug,
                        extract: response.data[0].extract,
                        body: response.data[0].body,
                        status: response.data[0].status,
                        user_id: response.data[0].user_id,
                        category_id: response.data[0].category_id
                    }))                    
                })
            setLoading(false);
            })();
        }, []);
    

        
    
  
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        // console.log(post.name)
        setPubli({
            ...publi,
            [event.target.name] : event.target.value
        })
    
    }
   

    //EDIT
    const handleEdit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', publi.id)
        formData.append('name', publi.name)
        formData.append('slug', publi.slug)
        formData.append('extract', publi.extract)
        formData.append('body', publi.body)
        formData.append('status', publi.status )
        formData.append('user_id', publi.user_id )
        formData.append('category_id', publi.category_id )  
          await Axios({
            method: 'post',
            url: '../api/updatePost',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data',
            success: window.location ="/EditPost"
             }}
          })
          .then(response=>{
              
            if (response.data.login== true){
                
              }
          })
          .catch(error => {
            console.log('Error Login', error.response.data )
          })
        }
    
    //GET CATEGORIES
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        (async () => {
        setLoading(true);
        const response = await Axios({
            method: 'get',
            url: '../api/getCategories',
            
            })
            .then(response => {
                setCategories(response.data);
            })
        setLoading(false);
        

        })();
    }, []);

    //GET AUTHOR (USER)
    const [authors, setAuthor] = useState([]);
    useEffect(() => {
        (async () => {
        setLoading(true);
        const response = await Axios({
            method: 'get',
            url: '../api/getAuthors',
            
            })
            .then(response => {
                setAuthor(response.data);
            })
        setLoading(false);
        

        })();
    }, []);

    
            
    return (
        <Container fluid>
            
            <h1 className="mt-5">Editar post</h1>
            <Row xl={1} className=" m-5 " >
                <Form  onSubmit={handleEdit} key={publi.id}>
                        <Form.Group controlId="">
                            <Form.Label>Título del post:</Form.Label>
                            
                            <Form.Control type="text" name="name" placeholder="" onChange={handleInputChange} defaultValue={publi.name}>
                            
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Slug del post:</Form.Label>
                            <Form.Control type="text" name="slug" placeholder="" onChange={handleInputChange} defaultValue={publi.slug}>
                            
                            </Form.Control>
                        </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Extracto:</Form.Label>
                        <Form.Control type="text" name="extract" placeholder="" onChange={handleInputChange} defaultValue={publi.extract}>
                            
                            </Form.Control>
                        </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Contenido:</Form.Label>
                        <Form.Control type="text" name="body" as="textarea" rows={6} onChange={handleInputChange} defaultValue={publi.body}>
                            
                            </Form.Control>
                        </Form.Group>
                    <Form.Row>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Guardar como:</Form.Label>
                            <Form.Control as="select"  name="status"  onChange={handleInputChange} >
                                <option value="0">Seleccione una opción</option>
                                <option value="1">Borrador</option>
                                <option value="2">Publicar</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Autor:</Form.Label>
                                <Form.Control as="select"  name="user_id"  onChange={handleInputChange} >
                                <option value="0">Seleccione un autor</option>
                                {authors.map(dataItem2 =>(
                                <option key={dataItem2.id} value={dataItem2.id}>{dataItem2.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Categoría:</Form.Label>
                            <Form.Control as="select"  name="category_id"  onChange={handleInputChange} >
                                <option value="0">Seleccione una categoría</option>
                                {categories.map(dataItem3 =>(
                                <option key={dataItem3.id} value={dataItem3.id}>{dataItem3.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Editar post
                    </Button>
            
                </Form>
            </Row>
            
        </Container>
        )    
    }
export default ChangePost;