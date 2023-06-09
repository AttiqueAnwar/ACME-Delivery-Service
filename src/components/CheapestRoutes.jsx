import { Button, Form, Input } from "antd";
import { graphData } from "../constants";
import { useState } from "react";

const CheapestRoutes = () => {
  const findCheapestRoute = (formData) => {
    const exploredRoutes = new Set();
    const routeCosts = {};
    const queue = [];
    queue.push({ currentTown: formData.start_town, currentCost: 0 });

    for (const data of graphData) {
      routeCosts[data.route[0]] = Infinity;
      routeCosts[data.route[1]] = Infinity;
    }
    routeCosts[formData.start_town] = 0;

    while (queue.length > 0) {
      const { currentTown, currentCost } = queue.shift();

      if (currentTown === formData.end_town) {
        routeCosts[currentTown] = Math.min(
          routeCosts[currentTown],
          currentCost
        );
      }

      for (const data of graphData) {
        if (data.route[0] === currentTown) {
          const nextTown = data.route[1];
          const newCost = currentCost + data.cost;

          if (
            !exploredRoutes.has(data.route) &&
            newCost < routeCosts[nextTown]
          ) {
            queue.push({ currentTown: nextTown, currentCost: newCost });
            exploredRoutes.add(data.route);
            routeCosts[nextTown] = newCost;
          }
        }
      }
    }

    const cheapestCost = routeCosts[formData.end_town];
    return cheapestCost === Infinity ? "No Such Route" : cheapestCost;
  };
  const [message, setMessage] = useState("");
  const onFinish = (values) => {
    const cost = findCheapestRoute(values);
    setMessage(cost);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h2>Cheapest Routes</h2>
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

export default CheapestRoutes;
