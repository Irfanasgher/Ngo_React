import React, { useState, useRef } from "react";

import { Radio, Input } from "antd";

import "./MonthlyOneTime.scss";

const MonthlyOneTime = () => {
  const [display, setDisplay] = useState(false);
  const inputFocus = useRef(null);

  const handleInput = () => {
    setDisplay(!display);
    console.log("hello");
  };
  return (
    <div id="monthlyOneTime">
      <h2 className="choose-amount mb-3">Choose the amount of your donation</h2>
      <Radio.Group defaultValue="large" buttonStyle="solid">
        <Radio.Button value="large">monthly</Radio.Button>
        <Radio.Button value="default">one-time</Radio.Button>
      </Radio.Group>
      <div className="currency mt-4 pt-2">
        <Radio.Group defaultValue="large" buttonStyle="solid">
          <Radio.Button value="large">10 €</Radio.Button>
          <Radio.Button value="default">25 €</Radio.Button>
          <Radio.Button value="default1">50 €</Radio.Button>
          <Radio.Button value="default2">100 €</Radio.Button>

          <Radio.Button
            value="default3"
            style={{ display: display ? "inline-block" : "none" }}
            className="inputRadio"
          >
            <Input placeholder="Write Custom Amount" className="customInput" />
          </Radio.Button>
          <Radio.Button value="default4" onClick={handleInput}>
            anderer Betrag €
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};
export default MonthlyOneTime;
