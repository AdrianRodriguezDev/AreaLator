import React, {useState, useEffect} from 'react';
import {Container, Form, Button, Col, Row, Accordion, Card} from 'react-bootstrap';
import {Chart} from 'chart.js';
import axios from 'axios';

import XMLParser from 'react-xml-parser';
import {toast} from 'react-toastify'



/*const graficarFigura = () => {
  const [figParameters, setFigParameters] = useState(defParameters);
  const [data, setData] = useState({});

  useEffect(() => {
    if(Object.keys(data).length > 0){
      const
    }
  })
}
*/

const CalculadoraAreas = () => {
  const [altura, setAltura] = useState(0.5);
  const [base, setBase] = useState(0.5);
  const [area, setArea] = useState(base*altura);
  const [figura, setFigura] = useState('');

  const aumentarAltura = () =>{
      setAltura(altura + 0.1)
      setArea(base*(altura+0.1))
  }

  const reducirAltura = () => {
      setAltura(altura - 0.1)
      setArea(base*(altura-0.1))
  }

  const aumentarBase = () =>{
      setBase(base + 0.1)
      setArea((base+0.1)*altura)
  }

  const reducirBase = () => {
      setBase(base - 0.1)
      setArea((base-0.1)*altura)
  }

  
  const cotejarFigura = (event) => {
    if(event.target.value === ''){
      setArea('Seleccione figura en el option');
      setFigura('')
    }
      if(event.target.value === 'cuadrado'){
          setArea(base*altura);
          setFigura('cuadrado')
      }else if(event.target.value === 'rectangulo'){
          setArea(base*altura);
          setFigura('rectangulo')
      }else if(event.target.value === 'triangulo'){
          setArea((base*altura)/2)
          setFigura('triangulo')          
      } 
  };

    //Interfaz
    return(
        <Container>
            <h2 className= "centerContentHorizontal marginTop-12">
                Calculadora de areas decimales
            </h2>

            <h5>Introduzca los parametros de la figura deseada</h5>
            <div style = {{margin: '2%'}}>
                <Form>
                    <Form.Group controlId='exampleForm.ControlSelect1'>
                        <Form.Label>Seleccione la figura deseada</Form.Label>
                       <Form.Control as = 'select' onChange={cotejarFigura}>
                            <option value='cuadrado'>Cuadrado</option>
                            <option value = 'rectangulo'>Rectangulo</option>
                            <option value = 'triangulo'>Triangulo equilatero</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <Row style = {{margin: '2%'}}>
                    <Col></Col>
                    <Col>
                        <Accordion defaultActiveKey="0">
                            <Card className='justify-content-md-center'>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Dimensiones
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                <label style={{alignContent: 'center'}}>
                                    <Button onClick = {reducirBase}>-</Button>
                                    <label style={{fontSize: '30px'}}>&nbsp;{`${base.toFixed(1)}`}&nbsp;</label>
                                    <Button onClick = {aumentarBase}>+</Button>
                                </label>
                                    &nbsp;
                                    &nbsp;
                                    X
                                    &nbsp;
                                    &nbsp;
                                <label>
                                    <Button className= 'btn btn-danger' onClick = {reducirAltura}>-</Button>
                                    <label style={{fontSize: '30px'}}>&nbsp;{`${altura.toFixed(1)}`}&nbsp;</label>
                                    <Button className = 'btn btn-danger' onClick = {aumentarAltura}>+</Button>
                                </label>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                            <Accordion defaultActiveKey="0">
                            <Card className = "justify-content-md-center">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Area total del modelo:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body className='justify-content-md-center'>
                                    {`Area = ${area.toFixed(2)}`}
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default CalculadoraAreas;