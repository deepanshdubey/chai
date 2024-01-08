import React from "react";
import Button from "react-bootstrap/Button";
import Reset from "../../src/static/reset.png";
import toast, { Toaster } from "react-hot-toast";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function Display() {
  const location = useLocation();
  const ingredientsData = location.state.ingredientsData ;

  return (
    <>
      <h1 className="heading ">Welcome Back, Tea lover!</h1>
      <div className="container ">
        <div className="logo mb-2">
          <iframe src="https://lottie.host/embed/b1671b1a-3cbb-4ba8-afdc-23158e95281e/ea1VF8Gagt.json"></iframe>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Ingridients</th>
              <th>Quantity</th>
              <th>Unit</th>
            </tr>
          </thead>
          <tbody>
            {ingredientsData ? (
              <>
                <tr>
                  <td>1</td>
                  <td>Water</td>
                  <td>{ingredientsData.waterQuantity}</td>
                  <td>mL</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Milk</td>
                  <td>{ingredientsData.milkQuantity}</td>
                  <td>mL</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Tea Leaves</td>
                  <td>{ingredientsData.teaLeaves}</td>
                  <td>teaspoon(s)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Cinnamon</td>
                  <td>{ingredientsData.cinnamon}</td>
                  <td>pinch</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Cardamom</td>
                  <td>{ingredientsData.cardamom}</td>
                  <td>pc(s)</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Ginger</td>
                  <td>{ingredientsData.ginger}</td>
                  <td>thumb size</td>
                </tr>
              </>
            ) : (
              <tr>
                <td colSpan="4">No ingredients available</td>
              </tr>
            )}
          </tbody>
        </Table>

        <form>
          <div className="buttons">
            <Link to={"/"}>
              <Button variant="success" size="sm">
                Start Over &nbsp; <img src={Reset} width={"25px"} alt="" />
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <p className="white">Created with ❣️ by Deepansh</p>
      <Toaster />
    </>
  );
}
