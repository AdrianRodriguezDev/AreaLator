import React from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import {Scatter} from 'react-chartjs-2';


const WikiCuadrado = () => {
    return(
        <Container>
            <h3 style = {{textAlign: 'center'}}>Cuadrado</h3>
            <p style = {{textAlign: 'justify'}}>El cuadrado es un polígono con cuatro lados (cuadrilátero) iguales. Sus cuatro ángulos interiores también son iguales y rectos (de 90º cada uno).</p>
            <h4>Elementos y propiedades del rectángulo</h4>         
            <ul>
                <li> <strong>Lados</strong>: el cuadrado tiene cuatro lados (<em>a</em>) iguales y paralelos dos a dos.</li>
                <li> <strong>Ángulos</strong>: tiene cuatro ángulos (&alpha;) iguales y rectos de 90º (&pi;/2 radianes). Los ángulos interiores, como en todo cuadrilátero, suman 360º (2&pi; radianes).</li>
                <li> <strong>Diagonales</strong>: las diagonales son segmentos que unen los vértices opuestos. Tiene dos diagonales (<em>D<sub>1</sub></em> y <em>D<sub>2</sub></em>) iguales y perpendiculares. Se cortan en el centro del cuadrado. Las diagonales son las bisectrices de los ángulos. También son ejes de simetría.</li>
                <li> <strong>Ejes de simetría</strong>: son líneas imaginarias que dividen el cuadrado en dos partes simétricas respecto a dicho eje. Tiene cuatro ejes de simetría (<em>E<sub>1</sub></em>, <em>E<sub>2</sub></em>, <em>E<sub>3</sub></em> y <em>E<sub>4</sub></em>).</li>
            </ul>
            <h4>Area del cuadrado</h4>
            <p style = {{textAlign: 'justify'}}>El área del cuadrado se calcula a partir de uno de sus lados (a). Es el producto de la base por la altura del cuadrado, ya que al ser ambas iguales, el área será un lado al cuadrado.</p>
            <Row style = {{margin: '2%'}}>
                    <Col>
                        <Scatter
                            data={{
                                datasets: [{
                                    label: 'Cuadrado',
                                data: [{
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: 0,
                                    y: 5
                                }, {
                                    x: 5,
                                    y: 5
                                }, {
                                    x: 5,
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
                                </label>
                                    &nbsp;
                                    &nbsp;
                                    X
                                    &nbsp;
                                    &nbsp;
                                <label>
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
                                <Card.Body className='justify-content-md-center'>
                                    {`Area = (5)`}<sup>2</sup><br/>
                                    {`Area = 25 u`}<sup>2</sup>
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