import { Button, Checkbox, Form, Input } from "antd";
import { ROUTE_VALUES } from "../constants";

const onFinish = (values) => {
  alert(JSON.stringify(values));
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const TestForm = () => {
  console.log(ROUTE_VALUES);
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Delivery Route"
          name="DeliveryRoute"
          rules={[
            {
              required: true,
              message: "Please input your Delivery Route!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Starting Point"
          name="StartingPoint"
          rules={[
            {
              required: true,
              message: "Please input your Details!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ending Point"
          name="EndingPoint"
          rules={[
            {
              required: true,
              message: "Please input your Details!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Max Stop"
          name="MaxStop"
          rules={[
            {
              required: true,
              message: "Please input your Details!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TestForm;
