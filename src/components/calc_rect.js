import React, {useState, useEffect} from 'react';
import {Container, Form, Button, Col, Row, Accordion, Card, ButtonGroup, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import {Scatter} from 'react-chartjs-2';
import TeX from "@matejmazur/react-katex";

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

const figTypes = [
    {name: 'Cuadrado', value: 'cuadrado'},
    {name: 'Rectangulo', value: 'rectangulo'},
    {name: 'Triangulo', value: 'triangulo'},
];

const defParameters = {
    base: 0,
    altura: 0,

};

const CalculadoraAreas = () => {
  const [altura, setAltura] = useState(0.5);
  const [base, setBase] = useState(0.5);
  const [area, setArea] = useState(base*altura);
  const [figura, setFigura] = useState("");

  //Persistencia XML
  const [figSelected, setFigSelected] = useState(figTypes[0].value);
  const [figParameters, setFigParameters] = useState(defParameters);
  const [data, setData] = useState({});
  const [exList, setExList] = useState([]);
  const [isExample, setIsExample] = useState(false);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/AreaLatorApi/Figuras?type=figuras",
    })
      .then((response) => {
        const xmlData = new XMLParser().parseFromString(response.data);
        if (xmlData.name === "error") toast.error(xmlData.value);
        else {
          const items = xmlData.children;
          var exItems = [];
          items.forEach((item) => {
            const { id, base, altura, type} = item.attributes;
            const { value } = item;
            exItems.push({
              id: Number(id),
              altura: Number(altura),
              base: Number(base),
              type,
              text: value,
            });
          });
          setExList(exItems);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ha ocurrido un error al obtener los ejemplos");
      });
  }, []);

  const calcularArea = () =>{
      {figura==='triangulo'?setArea((base*altura)/2):setArea(base*altura); }
  }

  const aumentarAltura = () =>{
      setAltura(altura + 0.1)
      setArea(base*(altura+0.1))
  }

  const proximamente = () => {
      toast.warning('Funcion no soportada');
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

  function onSelectExample(data) {
    setFigura(data.type);
    setIsExample(true);
    setAltura(data.altura);
    setBase(data.base);
  }
  
  const cotejarFigura = (event) => {
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

  function renderExampleList() {
    return (
      <ListGroup className="marginTop-12">
        {exList.map((ex) => {
          return (
            <ListGroup.Item
              key={ex.id}
              action
              onClick={() => onSelectExample(ex)}
            >
              <p  style={{ fontSize: "22px" }}> {`${ex.text}`} </p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }

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
                    <Col>
                        {figura==='triangulo' ? <Scatter
                            data={{
                                datasets: [{
                                    label: 'Figura seleccionada',
                                data: [{
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: base.toFixed(2),
                                    y: 0
                                }, {
                                    x: (base.toFixed(2))/2,
                                    y: altura.toFixed(2)
                                }, {
                                    x: 0,
                                    y: 0
                                }],
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(255, 99, 132)',
                                showLine: true,
                                fill: true,
                                borderColor: 'black',
                                borderWidth: 2,
                                backgroundColor: 'red'
                                }]
                            }}
                            options={{
                                maintainAspectRatio: true,
                                scales:{
                                    y:{
                                        suggestedMin: 0,
                                        suggestedMax: 5
                                    },
                                    x: {
                                        suggestedMin: 0,
                                        suggestedMax:5
                                    },

                                }
                            }}
                            width ={20}
                            height ={20}
                        /> : 
                        <Scatter
                            data={{
                                datasets: [{
                                    label: 'Figura seleccionada',
                                data: [{
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: 0,
                                    y: altura.toFixed(2)
                                }, {
                                    x: base.toFixed(2),
                                    y: altura.toFixed(2)
                                }, {
                                    x: base.toFixed(2),
                                    y: 0
                                }, {
                                    x: 0,
                                    y: 0
                                }],
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: 'rgb(255, 99, 132)',
                                showLine: true,
                                fill: true,
                                borderColor: 'black',
                                borderWidth: 2,
                                backgroundColor: 'red'
                                }]
                            }}
                            options={{
                                maintainAspectRatio: true,
                                scales:{
                                    y:{
                                        suggestedMin: 0,
                                        suggestedMax: 5
                                    },
                                    x: {
                                        suggestedMin: 0,
                                        suggestedMax:5
                                    },

                                }
                            }}
                            width ={20}
                            height ={20}
                        />}
                    </Col>
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
                            <Card className = "justify-content-md-center mt-3">
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                Area total del modelo:
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body className='justify-content-md-center'>
                                    <h3 style = {{textAlign: 'center'}}>
                                        {`Area = ${area.toFixed(2)} u`}<sup>2</sup>
                                    </h3>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                            <ButtonGroup className = 'mt-3'>
                                  <Button variant = "outline-primary" className = 'ml-3 mr-3' onClick = {calcularArea}>Calcular</Button>{'  '}
                                  <Button variant = "outline-success" className = 'ml-3 mr-3' onClick = {proximamente}>Guardar</Button>
                                  <Button variant = "outline-warning" className = 'ml-3 mr-3' onClick = {proximamente}>Modificar</Button>
                                  <Button variant = "outline-danger" className = 'ml-3 mr-3' onClick = {proximamente}>Eliminar</Button>
                            </ButtonGroup>
                            <div className="marginTop-12">
                                <h3>Ejemplos</h3>
                                {renderExampleList()}
                            </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default CalculadoraAreas;