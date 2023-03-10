import React from "react";
import { useState } from "react";
import { Button, Form, Input, InputNumber, Modal } from "antd";
import { useDispatch } from "react-redux";
import { add } from "../../app/slices/userSlice";
import { User } from "../../app/services/UserStore";

function Add() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (value: User) => {
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
        title="Add New User"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button form="add-user" key="submit" htmlType="submit" type="primary">
            Submit
          </Button>,
          <Button key={"cancel"} onClick={handleCancel} danger>
            Cancel
          </Button>,
        ]}
      >
        <Form
          form={form}
          name="add-user"
          preserve={false}
          labelCol={{ span: 24 }}
          style={{ maxWidth: 600 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ id: Math.floor(Math.random() * 1000) }}
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
        </Form>
      </Modal>
    </>
  );
}
export default Add;
