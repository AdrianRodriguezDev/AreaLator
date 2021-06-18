import React from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import {Scatter} from 'react-chartjs-2';


const WikiCuadrado = () => {
    return(
        <Container>
            <h3 style = {{textAlign: 'center'}}>Triangulo equilatero</h3>
            <p style = {{textAlign: 'justify'}}>Un <strong>triángulo</strong> es un <strong>polígono</strong> de <strong>tres lados</strong> (<em>a</em>, <em>b</em> y <em>c</em>). Los lados confluyen dos a dos en tres puntos, llamados <strong>vértices</strong> (<em>A</em>, <em>B</em> y <em>C</em>). </p>
            <p> Los tres <strong>ángulos</strong> interiores del triángulo suman 180&deg; (&pi; radianes). </p>
            <h4>Area del triangulo</h4>
            <p style = {{textAlign: 'justify'}}>El <strong>área</strong> de un <strong>triángulo</strong> se calcula por diferentes procedimientos según el tipo de triángulos de que se trate o de los elementos que se conozcan de ese <strong>triángulo.</strong></p>
            <p style = {{textAlign: 'justify'}}>La <strong>formula general</strong> para calcular el <strong>area</strong> de un triangulo es:</p>
            <Row style = {{margin: '2%'}}>
                <Col>
                    <Scatter
                        data={{
                            datasets: [{
                                label: 'Triangulo',
                            data: [{
                                x: 0,
                                y: 0
                            },
                            {
                                x: 5,
                                y: 0
                            }, {
                                x: 2.5,
                                y: 5
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
                                    suggestedMin:-1,
                                    suggestedMax: 6
                                },
                                x: {
                                    suggestedMin: -1,
                                    suggestedMax:6
                                },

                            }
                        }}
                        width ={20}
                        height ={20}
                    />
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
                                <label style={{fontSize: '30px'}}>&nbsp;{`5`}&nbsp;</label>
                                &nbsp;
                                &nbsp;
                                X
                                &nbsp;
                                &nbsp;
                                <label style={{fontSize: '30px'}}>&nbsp;{`5`}&nbsp;</label>
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
                            <Card.Body style = {{alignContent: 'center'}}>
                                <h3>
                                {`Area = ((5)(5))/2`}<br/>
                                {`Area = 12.5 u`}<sup>2</sup>
                                </h3>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default WikiCuadrado;