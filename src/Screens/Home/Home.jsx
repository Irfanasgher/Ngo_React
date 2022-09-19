import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LogoSection from "../../Components/LogoSection";
import ProjectTitleCard from "../../Components/ProjectTitleCard";

import "./Home.scss";
const Home = () => {
  const state = [
    {
      id: 1,
      title: "Project title 1 (selected in backend) => simple donation project",
      image: "/images/title-1.png",
      to: "/form_c1_monthly",
    },
    {
      id: 2,
      title: "Project title 2 (selected in backend) => simple donation project",
      image: "/images/title-2.png",
      to: "/form_c2_monthly",
    },
    {
      id: 3,
      title: "Project title 3 (selected in backend) => simple donation project",
      to: "/form_c1_monthly",
    },
    {
      id: 4,
      title: "Project title 4 (selected in backend) => simple donation project",
      to: "/form_c1_monthly",
    },
    {
      id: 5,
      title: "Project title 5 (selected in backend) => simple donation project",
      to: "/form_c1_monthly",
    },
    {
      id: 6,
      title: "Project title 6 (selected in backend) => simple donation project",
      to: "/form_c1_monthly",
    },
  ];
  return (
    <div id="home">
      <Row noGutters>
        <Col className="pl-0" md={5}>
          <LogoSection img={"/images/elephent.png"} />
        </Col>
        <Col className="pl-5" md={6}>
          <h1 className="title">
            Here comes the form titel (selected in backend)
          </h1>
          <p className="description pr-4">
            Here comes the form description (selected in backend). This is a
            placeholder full of content and surprises for our donors. This is a
            placeholder full of content and surprises for our donors.{" "}
          </p>
          <h5 className="donate">For what do you want to donate?</h5>

          <Row className="scroll" noGutters>
            {state.map((item, index) => {
              return (
                <Col lg={6} md={12} key={index} className="mt-4">
                  <ProjectTitleCard item={item} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
