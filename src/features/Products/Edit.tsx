import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { useDispatch } from "react-redux";
import { GetById, Product } from "../../app/services/ProductStore";
import { edit } from "../../app/slices/productSlice";
import Title from "../Shared/Title";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const onFinish = (value: Product) => {
    dispatch(edit(value));
    form.resetFields();
    navigate("/products");
  };

  const handleCancel = () => {
    form.resetFields();
    navigate("/products");
  };
  return (
    <>
      <Title text={"Edit Product"}></Title>
      <Form
        form={form}
        name="edit-product"
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
          rules={[{ required: true, message: "Please input product id!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input product name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input product description!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Count"
          name="count"
          rules={[{ required: true, message: "Please input count age!" }]}
        >
          <InputNumber max={1000} min={1} />
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
