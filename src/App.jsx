import { useState } from 'react'
import { Button } from 'antd'
import './App.css'
import DeliveryCost from './components/DeliveryCost'
import PossibleRoutes from './components/PossibleRoutes'

function App() {
 
  const [toggle , setToggle] = useState("delivery_cost")

  return (
    <>
    <h1>ACME Delivery Service</h1>
      <Button onClick={() => setToggle("delivery_cost")}>Delivery Cost</Button>
      <Button onClick={() => setToggle("possible_routes")}>Possible Routes</Button>
      <Button onClick={() => setToggle("cheapest_route")}>Cheapest Route</Button>
    
    {
     <PossibleRoutes /> 

    }
      
    </>
  )
}

export default App
