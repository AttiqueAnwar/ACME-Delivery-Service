# ACME-Delivery-Service

# Running the App
To run the app, first clone the repository and install dependencies:

`git clone https://github.com/AttiqueAnwar/ACME-Delivery-Service.git`

`cd ACME-Delivery-Service`

`npm install`

`npm run dev `

The app will be running on http://localhost:5173 .

## Deployment
This webapp is deployed on Netlify  [https://acmedelivery.netlify.app/](https://acmedelivery.netlify.app/).

# Technologies Used
- Vite + React.js
- Ant Design

## Problem Description:
ACME decides to introduce a new grocery delivery service to the market to support the growth of their e-commerce business in Sweden. Due to the innovative nature ofthe company, the ways to use their service are very innovative.
To use ACME Delivery Service, their customers have to define the delivery route by themselves. They can construct it by choosing multiple routes between two towns that ACME provided.
The delivery cost is equal to the summation of these routes that they chose.
Simply the existence of a route from town B to town A. Even if both of these routes do exist, they are distinct and are not necessarily have the same cost.
The purpose of this assignment is to help ACME build a system that provides its customers with information about the delivery route. You will compute the delivery cost of a certain route, the number of possible delivery routes between two towns, and the cost of the cheapest delivery route between two towns.



## Directed Graph:
### --> AB1,    AC4, AD10, BE3, CD4, CF2, DE1, EB3, EA2, FD1
![Routes](https://github.com/AttiqueAnwar/ACME-Delivery-Service/assets/55598039/8f31baa0-9dad-4a35-80a0-6ce8fde196cb)


## Test Cases:
### Case 1: Delivery Cost
| Input | Example Output |
| --- | --- |
| The delivery cost for route  `A-B-E` | 4 |
| The delivery cost for route  `A-D` | 10 |
| The delivery cost for route  `E-A-C-F` | 8 |
| The delivery cost for route  `A-D-F` | No Such Route |

### Case 2: Possible Routes
| Input | Example Output |
| --- | --- |
| The number of the possible delivery routes from E to D with a maximum of 4 stop 4 without using the same route twice in a delivery route | 4 |
| The number of the possible delivery routes from E to E without using the same 5 route twice in a delivery route | 5 |

### Case 3: Cheapest Routes
| Input | Example Output |
| --- | --- |
| The cost of the cheapest delivery route between E to D | 9 |
| The cost of the cheapest delivery route between E to C	 | 6 |






