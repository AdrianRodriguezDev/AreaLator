import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { withCookies } from "react-cookie";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";

import NavBar from "./components/navbar";
import CalculadoraAreas from "./components/calc_rect";
import Login from "./components/login";
import Register from "./components/register";
import About from './components/about';
import WikiCuadrado from './components/wikiCuadrado';
import WikiRectangulo from './components/wikiRectangulo';
import WikiTriangulo from './components/wikiTriangulo';


const FallBack = () => {
  return (
    <div
      style={{
        margin: "12px",
        textAlign: "center",
      }}
    >
      <h1>Recurso no encontrado</h1>
    </div>
  );
};

const PATH = "/AreaLatorApi";

const App = ({ cookies }) => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setIsLogged(
      Object.keys(cookies.cookies).length !== 0 && cookies.cookies.name !== ""
    );
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
      />{" "}
      {isLogged ? <NavBar /> : null}
      <Switch>
        <Route exact path={`${PATH}/`}>
          <Login />
        </Route>
        <Route exact path={`${PATH}/register`}>
          <Register />
        </Route>
        <Route exact path={`${PATH}/calculadora`}>
          <CalculadoraAreas/>
        </Route>
        <Route exact path = {`${PATH}/about`}>
          <About/>
        </Route>
        <Route exact path = {`${PATH}/wiki/cuadrado`}>
          <WikiCuadrado/>
        </Route>
        <Route exact path = {`${PATH}/wiki/rectangulo`}>
          <WikiRectangulo/>
        </Route>
        <Route exact path = {`${PATH}/wiki/triangulo`}>
          <WikiTriangulo/>
        </Route>
        <Route path="*">
          <FallBack />
        </Route>
      </Switch>
    </div>
  );
};

export default withCookies(App);
