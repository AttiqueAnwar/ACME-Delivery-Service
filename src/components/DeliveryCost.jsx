import { Button, Form, Input } from "antd";
import { graphData } from "../constants";
import { useState } from "react";

const DeliveryCost = () => {
  const calculateDeliveryCost = (route) => {
    const towns = route.delivery_route.split("");
    let totalCost = 0;
    for (let i = 0; i < towns.length - 1; i++) {
      const currentTown = towns[i];
      const nextTown = towns[i + 1];
      const foundRoute = graphData.find(
        (data) => data.route === `${currentTown}${nextTown}`
      );
      if (foundRoute) {
        totalCost += foundRoute.cost;
      } else {
        return "No Such Route";
      }
    }

    return totalCost;
  };

  const [message, setMessage] = useState("");
  const onFinish = (values) => {
    const cost = calculateDeliveryCost(values);
    setMessage(cost);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h2>Delivery Cost</h2>
      <div className="custom-form">
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
            name="delivery_route"
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
      </div>

      <div className="success-msg">
        {message && <p>{`Delivery Cost: ${message}`}</p>}
      </div>
    </>
  );
};

export default DeliveryCost;
