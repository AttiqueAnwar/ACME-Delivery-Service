import { Button, Checkbox, Form, Input } from "antd";
import { graphData } from "../constants";
import { useState } from "react";

const PossibleRoutes = () => {
  const calculatePossibleRoutes = (data) => {
    const countRoutes = (currentTown, currentStops, currentRoute) => {
      if (currentStops > data.max_stops) {
        return 0;
      }
      if (currentTown === data.end_town && currentRoute !== "") {
        return 1;
      }
      let routeCount = 0;
      for (const data of graphData) {
        if (
          data.route.startsWith(currentTown) &&
          (data.allow_same_route || !currentRoute.includes(data.route))
        ) {
          routeCount += countRoutes(
            data.route[1],
            currentStops + 1,
            `${currentRoute}-${data.route}`
          );
        }
      }

      return routeCount;
    };

    return countRoutes(data.start_town, 0, "");
  };
  const [message, setMessage] = useState("");
  const onFinish = (values) => {
    const count = calculatePossibleRoutes(values);
    setMessage(count);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h2>Possible Routes</h2>
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
            label="Start Town"
            name="start_town"
            rules={[
              {
                required: true,
                message: "Please input your start town!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="End Town"
            name="end_town"
            rules={[
              {
                required: true,
                message: "Please input your end town!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Max Stops"
            name="max_stops"
            rules={[
              {
                required: true,
                message: "Please input your max stop!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="allow_same_route"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Allow Same Route</Checkbox>
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

export default PossibleRoutes;
