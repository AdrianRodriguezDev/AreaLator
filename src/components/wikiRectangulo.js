import React from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import {Scatter} from 'react-chartjs-2';


const WikiRectangulo = () => {
    return(
        <Container>
            <h3 style = {{textAlign: 'center'}}>Rectangulo</h3>
            <p style = {{textAlign: 'justify'}}>Un rectángulo es un polígono con cuatro lados (cuadrilátero) siendo éstos iguales dos a dos. Además, sus cuatro ángulos interiores son rectos (de 90º).</p>
            <h4>Elementos y propiedades del rectángulo</h4> 
            <ul>
                <li> <strong>Lados</strong>: tiene cuatro lados, siendo cada lado igual a su opuesto (<em>a</em> y <em>b</em>), es decir, dos a dos.</li>
                <li> <strong>Ángulos</strong>: sus cuatro ángulos (&alpha;) son iguales y rectos de 90º (&pi;/2 radianes). Los ángulos interiores, como en todo cuadrilátero, suman 360º (2&pi; radianes).</li>
                <li> <strong>Diagonales</strong>: las diagonales son segmentos que unen los vértices opuestos. Tiene dos diagonales (<em>D<sub>1</sub></em> y <em>D<sub>2</sub></em>) iguales y que se cortan en el centro del rectángulo. </li>
                <li> <strong>Ejes de simetría</strong>: son líneas imaginarias que dividen el rectángulo en dos partes simétricas respecto a dicho eje. Tiene dos ejes de simetría (<em>E<sub>1</sub></em>, <em>E<sub>2</sub></em>) paralelos a los lados <em>a</em> y <em>b</em> y pasan por el centro del rectángulo.</li>
            </ul>
            <h4>Area del rectangulo</h4>
            <p style = {{textAlign: 'justify'}}>El área del rectángulo se calcula a partir de los dos lados diferentes (a y b). Es el producto de los dos lados contiguos del rectángulo.</p>
            <Row style = {{margin: '2%'}}>
                    <Col>
                        <Scatter
                            data={{
                                datasets: [{
                                    label: 'Rectangulo',
                                data: [{
                                    x: 0,
                                    y: 0
                                },
                                {
                                    x: 0,
                                    y: 3
                                }, {
                                    x: 5,
                                    y: 3
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
                                        suggestedMax: 4
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
                                    <label style={{fontSize: '30px'}}>&nbsp;{`3`}&nbsp;</label>
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
                                    {`Area = (3)(5)`}<br/>
                                    {`Area = 15 u`}<sup>2</sup>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                    </Col>
            </Row>
        </Container>
    );
}

export default WikiRectangulo;