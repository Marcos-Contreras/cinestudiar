import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactDOM from 'react-dom';

function PostForm(){
    
    const [data, setData] = useState({
        name: '',
        slug: '',
        extract: '',
        body: '',
        status: '',
        user_id: '',
        category_id: ''
    })
  
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    
    }
   

    //POST
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let formData = new FormData();
       
        formData.append('name', data.name)
        formData.append('slug', data.slug)
        formData.append('extract', data.extract)
        formData.append('body', data.body)
        formData.append('status', data.status)
        formData.append('user_id', data.user_id)
        formData.append('category_id', data.category_id)  
          await Axios({
            method: 'post',
            url: 'api/addPost',
            data: formData,
            config: { headers: {'Content-Type': 'multipart/form-data',
            success: window.location ="/ShowPosts"
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
        const [isLoading, setLoading] = useState(false);
        useEffect(() => {
            (async () => {
            setLoading(true);
            const response = await Axios({
                method: 'get',
                url: 'api/getCategories',
                
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
                url: 'api/getAuthors',
                
                })
                .then(response => {
                    setAuthor(response.data);
                })
            setLoading(false);
            

            })();
        }, []);

    
            
    return (
        <Container fluid>
            <h1 className="mt-5">Agregar nuevo post</h1>
            <Row xl={1} className=" m-5 " >
                <Form  onSubmit={handleSubmit}>
                        <Form.Group controlId="">
                            <Form.Label>Título del post:</Form.Label>
                            <Form.Control type="text" name="name" placeholder="" onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Slug del post:</Form.Label>
                            <Form.Control type="text" name="slug" placeholder="" onChange={handleInputChange}/>
                        </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Extracto:</Form.Label>
                        <Form.Control type="text" name="extract" placeholder="" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Contenido:</Form.Label>
                        <Form.Control type="text" name="body" as="textarea" rows={6} onChange={handleInputChange}/>
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
                                <Form.Control as="select"  name="user_id"  onChange={handleInputChange}>
                                <option value="0">Seleccione un autor</option>
                                {authors.map(dataItem =>(
                                <option key={dataItem.id} value={dataItem.id}>{dataItem.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className=" mr-5" controlId="">
                            <Form.Label>Categoría:</Form.Label>
                            <Form.Control as="select"  name="category_id"  onChange={handleInputChange}>
                                <option value="0">Seleccione una categoría</option>
                                {categories.map(dataItem =>(
                                <option key={dataItem.id} value={dataItem.id}>{dataItem.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Subir post
                    </Button>
            
                    
                    
                </Form>
            </Row>
        </Container>
        )    
    }
export default PostForm;