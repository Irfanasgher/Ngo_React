import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./Button.scss";

const Button1 = ({ text, to, ...rest }) => {
  return (
    <div id="button" className="mt-4">
      <Link to={to}>
        <Button className="arrow-button" type="submit" {...rest}>
          {text} <RightOutlined />
        </Button>
      </Link>
    </div>
  );
};
export default Button1;
