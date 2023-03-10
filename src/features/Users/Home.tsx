import { Row, Col } from "antd";
import AddUser from "./Add";
import Table from "./Table";
import Title from "../Shared/Title";

function Home() {
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col>
          <Title text={"Users"} />
        </Col>
        <Col>
          <AddUser />
        </Col>
      </Row>
      <Table />
    </>
  );
}

export default Home;
