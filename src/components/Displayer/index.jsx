import React, { useState } from "react";
import Button from "../Button";
import "./Displayer.css";

export default function Displayer() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("1");

  const setStep = (event) => {
    setValue(event.target.value);
  };

  const Reset = (event) => {
    event.preventDefault();
    setCounter(0);
    setValue("1");
  };

  const Increase = (event) => {
    event.preventDefault();
    setCounter(counter + parseInt(value));
  };

  const Decrease = (event) => {
    event.preventDefault();
    setCounter(counter - parseInt(value));
  };

  return (
    <div className="main-wrapper">
      <section className="counter-wrapper">
        <Button onClick={Increase} type="constructive" children={"+"} />

        <input type="text" classname="displayer-counter" value={counter} disabled/>

        <br />

        <Button onClick={Decrease} type="destructive" children={"-"} />
      </section>

      <br/>

      <section className="set-step-wrapper">
        <input className="set-step" type="text" value={value} onChange={setStep} />

        <br />

        <Button onClick={Reset} type="reset" children={"Reset"} />
      </section>
    </div>
  );
}
