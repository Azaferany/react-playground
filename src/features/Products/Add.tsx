import { useState } from "react";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useDispatch } from "react-redux";
import { add } from "../../app/slices/productSlice";
import { Product } from "../../app/services/ProductStore";

function Add() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (value: Product) => {
    dispatch(add(value));
    form.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New
      </Button>
      <Modal
        title="Add New Product"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            form="add-product"
            key="submit"
            htmlType="submit"
            type="primary"
          >
            Submit
          </Button>,
          <Button onClick={handleCancel} danger>
            Cancel
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="add-product"
          preserve={false}
          labelCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ id: Math.floor(Math.random() * 10000) }}
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
        </Form>
      </Modal>
    </>
  );
}
export default Add;
