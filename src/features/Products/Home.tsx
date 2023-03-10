import React from "react";
import { Row, Col } from "antd";
import AddProduct from "./Add";
import Table from "./Table";
import Title from "../Shared/Title";

function Home() {
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col>
          <Title text={"Products"} />
        </Col>
        <Col>
          <AddProduct />
        </Col>
      </Row>
      <Table />
    </>
  );
}

export default Home;
