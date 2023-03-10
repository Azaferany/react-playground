import React, { useRef, useState } from "react";
import { Input, Button, InputRef, Col, Row } from "antd";
import { Space, Typography } from "antd";

const { Text, Title } = Typography;
const CodeVerification = () => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);
  const codeFields = useRef<InputRef[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    // Create a new array with the updated value
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Move the focus to the next or previous code field
    if (value !== "") {
      if (index < codeFields.current.length - 1) {
        codeFields.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && code[index] === "" && index != 0) {
      codeFields.current[index - 1].focus();
      setIsValid(undefined);
    } else if (event.key === "Backspace" && code[index] !== "") {
      setCode((prevState) => {
        prevState[index] = "";
        return prevState;
      });
      setIsValid(undefined);
    } else if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handleVerifyCode = () => {
    // Perform code validation logic here
    const validCode = "1234";
    setIsValid(code.join("") === validCode);
  };

  const handleClearCode = () => {
    setCode(["", "", "", ""]);
    setIsValid(undefined);
    codeFields.current[0].focus();
  };

  return (
    <div>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center" }}
      >
        <Title level={4}>Enter your 4 digits verification code (1,2,3,4)</Title>
      </Space>
      <Row justify={"center"}>
        {code.map((value, index) => (
          <Col sm={{ span: 1 }} key={index}>
            <Input
              style={{
                textAlign: "center",
              }}
              key={index}
              value={value}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              maxLength={1}
              onKeyDown={(event) => handleKeyDown(event, index)}
              ref={(element) =>
                (codeFields.current[index] = element as InputRef)
              }
            />
          </Col>
        ))}
      </Row>
      <Space
        direction="horizontal"
        style={{ width: "100%", justifyContent: "center", margin: "15px 0" }}
      >
        {isValid && <Text type={"success"}>Code is valid!</Text>}
        {isValid === false && code.join("").length === 4 && (
          <Text type={"danger"}>Invalid code, please try again</Text>
        )}
        <></>
      </Space>
      <Row justify={"center"} gutter={5}>
        <Col sm={{ span: 3 }} xs={{ span: 24 }}>
          <Button
            size={"large"}
            type={"primary"}
            onClick={handleVerifyCode}
            block
            htmlType="submit"
          >
            Verify
          </Button>
        </Col>
        <Col sm={{ span: 3 }} xs={{ span: 24 }}>
          <Button size={"large"} danger onClick={handleClearCode} block>
            Clear
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CodeVerification;
