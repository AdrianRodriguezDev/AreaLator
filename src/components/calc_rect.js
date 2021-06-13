import React, {useState, useEffect} from 'react';
import {Container, Form, Button, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify';

const figTypes = [
  {name: "Cuadrado", value: "cuadrado"},
  {name: "Triangulo", value: "triangulo"},
]

const defParameters = {
  base: 0;
  altura: 0;
}

const CalcRect = () => {

  const [figSelected, setFigSelected] = useState(figTypes[0].value);
  const [eqParameters, setEqParameters] = useState(defParameters);
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
            inp1: Number(base),
            inp2: Number(altura),
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



  return(
    <div>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default CalcRect