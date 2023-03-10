import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { useDispatch } from "react-redux";
import { GetById, User } from "../../app/services/UserStore";
import { edit } from "../../app/slices/userSlice";
import Title from "../Shared/Title";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const onFinish = (value: User) => {
    dispatch(edit(value));
    form.resetFields();
    navigate("/users");
  };

  const handleCancel = () => {
    form.resetFields();
    navigate("/users");
  };
  return (
    <>
      <Title text={"Edit User"}></Title>
      <Form
        form={form}
        name="edit-user"
        preserve={false}
        labelCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        wrapperCol={{ span: 16 }}
        initialValues={GetById(parseInt(id ?? ""))}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Id"
          name="id"
          rules={[{ required: true, message: "Please input user id!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input user name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: "Please input user age!" }]}
        >
          <InputNumber max={100} min={1} />
        </Form.Item>
        <Row>
          <Col sm={{ span: 3, offset: 2 }} xs={{ span: 24 }}>
            <Button danger size="large" onClick={handleCancel} block>
              Cancel
            </Button>
          </Col>
          <Col sm={{ span: 3, offset: 1 }} xs={{ span: 24 }}>
            <Button htmlType="submit" type="primary" size="large" block>
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Edit;
