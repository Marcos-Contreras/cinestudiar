import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

const EditPost = props => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        (async () => {
        setLoading(true);
        const response = await Axios({
            method: 'get',
            url: 'api/postAC'
            
            })
            .then(response => {
                console.log('response.data',response.data)
                setData(response.data);
            })
        setLoading(false);
        

        })();
    }, []);

        //BORRAR POST        
        const handleDelete = (iddelete) => async (e) =>{
            e.preventDefault();
              await Axios.get('../api/deletePost', {
                params: {
                  id: iddelete
                  
                }
                
              })
              .then(response=>{
                window.location = '/EditPost'
              })
              .catch(error => {
                console.log('Error Login', error.response.data )
              })
            }


            //CAMBIAR STATUS DE POST
            const changeStatus = (id, status) => async (e) =>{
                e.preventDefault();
                console.log(id)
                console.log(status)
                  await Axios.post('../api/updateStatus', {
                      id: id,
                      status: status
                    
                  })
                  .then(response=>{
                    window.location = '/EditPost'
                  })
                  .catch(error => {
                    console.log('Error Login', error.response.data )
                  })
                }
    
            
        return (
            <Container >
                <h1 className="mt-5">Posts</h1>
                <Link as ={Link} to={'/PostForm'}><Button className="mt-3" variant="warning">Agregar nuevo post</Button></Link>
                <Table striped bordered hover variant="dark" className=" mr-5 my-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Categoría</th>
                        <th>Estado</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(dataItem =>(
                        <tr key={dataItem.id}>
                            <td>{dataItem.id}</td>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.userName}</td>
                            <td>{dataItem.categoryName}</td>
                            <td><DropdownButton id="dropdown-basic-button" title={dataItem.status==1 ? 'Borrador' : 'Publicado'}>
                                    <Dropdown.Item onClick={changeStatus(dataItem.id, 1)}>Borrador</Dropdown.Item>
                                    <Dropdown.Item onClick={changeStatus(dataItem.id, 2)}>Publicar</Dropdown.Item>
                                </DropdownButton>
                            </td>
                            <td><Button variant="danger" onClick={handleDelete(dataItem.id)} name="iddelete" value={dataItem.id}>Borrar</Button></td>
                            <td><Link as ={Link} to={`/ChangePost/${dataItem.id}`}><Button variant="light"  value={dataItem.id}>Editar</Button></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Container>
            )    
    }
export default EditPost;