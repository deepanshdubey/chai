import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Right from "../../src/static/right.jpg";
import Reset from "../../src/static/reset.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


// import teaLoaded from "../../src/static/teaLoaded.mov"

export default function Chai() {
  const [loading, setLoading] = useState(false);
  const [cups, setCups] = useState(0);
  const [milk, setMilk] = useState("");
  const navigate = useNavigate();

  var ingredientsData;

  const handleCups = (e) => {
    setCups(e.target.value);
  };

  const handleMilk = (e) => {
    setMilk(e.target.value);
  };

  function makeTea(cups, milk) {
    let cup = Number(cups);

    let waterQuantity, milkQuantity, teaLeaves, cinnamon, cardamom, ginger;

    waterQuantity = 75 * cup;
    teaLeaves = cup;
    cinnamon = 0.5 * cup;
    cardamom = 0.5 * cup;
    ginger = 0.5 * cup;

    if (milk == "Toned") {
      milkQuantity = 37.5 * cup;
    } else if (milk == "Full-Cream") {
      milkQuantity = 25 * cup;
    } else if (milk == "Homogenised") {
      milkQuantity = 25 * cup;
    } else {
      return 404;
    }
    let ingredients = {
      waterQuantity: waterQuantity,
      milkQuantity: milkQuantity,
      teaLeaves: teaLeaves,
      cinnamon: cinnamon,
      cardamom: cardamom,
      ginger: ginger,
    };
    return ingredients;
  }

  const handleSubmit = () => {
    try {
      setLoading(true);
      ingredientsData = makeTea(cups, milk)
      navigate('/display', { state: {ingredientsData} });
    } catch (error) {
      toast.error("Error submitting form ! Contact Developer.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setCups(0);
    setMilk("");
  };

  return (
    <>
      <h1 className="heading ">Welcome Back, Tea Lover!</h1>
      <div className="container">
        <div className="logo">
          <iframe src="https://lottie.host/embed/663424d0-b0aa-4177-9bac-fc254f010543/NmXELA0tSF.json"></iframe>
        </div>

        <form>
          <Form.Select
            aria-label="No. of Cups"
            id="cups"
            size="lg"
            value={cups}
            onChange={handleCups}
          >
            <option>No. of Cups</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Select>
          &nbsp;
          <Form.Select
            aria-label="Type of Milk"
            id="milk"
            size="lg"
            value={milk}
            onChange={handleMilk}
          >
            <option>Type of Milk</option>
            <option value="Toned">Toned</option>
            <option value="Full-Cream">Full-Cream</option>
            <option value="Homogenised">Homogenised</option>
          </Form.Select>
          &nbsp;
          <div className="buttons">

            <Button variant="success" size="sm" onClick={handleSubmit}>
              {!loading ? (
                <>
                  Make my Tea &nbsp;
                  <img src={Right} width={"25px"} alt="" />
                </>
              ) : (
                <>
                  Making &nbsp;
                  <Spinner size="sm" animation="border" variant="light" />
                </>
              )}
            </Button>
            &nbsp;
            <Button variant="danger" size="sm" onClick={handleClear}>
              Make a Fresh &nbsp; <img src={Reset} width={"25px"} alt="" />
            </Button>
          </div>
        </form>
      </div>
      <p className="white">Created with ❣️ by Deepansh</p>
      <Toaster />
    </>
  );
}
