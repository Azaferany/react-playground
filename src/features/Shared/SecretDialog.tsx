import React, { useState, useRef, useEffect } from "react";
import { Modal, Input, InputRef, message, Space, Divider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTextFieldValue,
  setTextFieldValue,
} from "../../app/slices/dialogSlice";

const SecretDialog = () => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const dispatch = useDispatch();
  const text = useSelector(selectTextFieldValue);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.shiftKey && event.key === "F2") {
      setVisible(true);
      event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.key === "F3") {
      inputRef.current?.focus();
      event.preventDefault();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (visible) {
      inputRef.current?.focus();
    }
  }, [visible]);

  const handleOk = () => {
    setVisible(false);
    dispatch(setTextFieldValue(""));
    message.success("you did it but at what cost ?!! :)");
  };

  const handleChange = () => {
    dispatch(setTextFieldValue(inputRef.current?.input?.value || ""));
  };

  const handleCancel = () => {
    setVisible(false);
    dispatch(setTextFieldValue(""));
    message.info("that was nice!! ");
  };

  return (
    <div tabIndex={0}>
      <Modal
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        title={"back door ?! ... :)"}
      >
        <Input ref={inputRef} onChange={handleChange} value={text} />
        <Space>
          <Divider />
          <a>{text}</a>
        </Space>
      </Modal>
    </div>
  );
};

export default SecretDialog;
