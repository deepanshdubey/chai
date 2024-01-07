import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import Right from "../../src/static/right.jpg";
import Reset from "../../src/static/reset.png";
import logo from "../../src/static/bpplogo.png";
import toast, { Toaster } from "react-hot-toast";

export default function Finman() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSource = (e) => {
    setSource(e.target.value);
  };

  const handleDestination = (e) => {
    setDestination(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Collect form data
      const formData = {
        amount,
        source,
        destination,
      };

      // Submit the form data as JSON
      await fetch(
        "https://script.google.com/macros/s/AKfycbwy8zBUKH8sF5dLAo81osGSQj0ccRR0qPceOx4DaQ6Z_fTUlqG4-jKSRjW4koTNKdW6-g/exec",
        {
          method: "POST",
          mode: "no-cors", // Set mode to 'no-cors'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      console.log(formData);

      // Handle the response
      toast.success("Data recorded Successfully !");
      // Reset the form after successful submission
      setAmount("");
      setSource("");
      setDestination("");
    } catch (error) {
      toast.error("Error submitting form ! Contact Developer.");
      // Handle general error scenario
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    // Clear the form when the "Clear" button is clicked
    // Clear the form when the "Clear" button is clicked
    setAmount("");
    setSource("");
    setDestination("");
  };

  return (
    <>
      <h1 className="heading white">Welcome Back, Priyansh!</h1>
      <div className="container">
        <div className="logo">
          <Image height={"200px"} width={"200px"} src={logo} />
        </div>

        <form>
          <FloatingLabel controlId="amount" label="Amount" className="mb-3">
            <Form.Control
              type="number"
              placeholder="0000.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FloatingLabel>
          <Form.Select
            aria-label="Source"
            size="lg"
            id="source"
            value={source}
            onChange={handleSource}
          >
            <option>Please select the Source</option>
            <option value="RA">RA</option>
            <option value="BPP">BPP</option>
            <option value="Other">Other</option>
          </Form.Select>
          &nbsp;
          <Form.Select
            aria-label="Destination"
            id="destination"
            size="lg"
            value={destination}
            onChange={handleDestination}
          >
            <option>Please select the Destination</option>
            <option value="BOB">BOB</option>
            <option value="AXIS">AXIS</option>
            <option value="KOTAK">KOTAK</option>
            <option value="CASH">CASH</option>
            <option value="Other">Other</option>
          </Form.Select>
          &nbsp;
          <div className="buttons">
            <Button variant="success" size="lg" onClick={handleSubmit}>
              {!loading ? (
                <>
                  SUBMIT &nbsp;
                  <img src={Right} width={"25px"} alt="" />
                </>
              ) : (
                <>
                  Submitting &nbsp;
                  <Spinner size="sm" animation="border" variant="light" />
                </>
              )}
            </Button>
            &nbsp;
            <Button variant="danger" size="lg" onClick={handleClear}>
              CLEAR &nbsp; <img src={Reset} width={"25px"} alt="" />
            </Button>
          </div>
        </form>
      </div>
      <p className="white">Created with ❣️ for Priyansh Bhardwaj</p>
      <Toaster />
    </>
  );
}
