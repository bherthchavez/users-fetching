#  [Fetching User List with Redux](https://users-fetching-redux.netlify.app/)
React.js application built with Vite, Redux, and Vitest for unit testing.

## Installation
To install the dependencies, run the following command:

### `npm install`
This will install all the required dependencies specified in the package.json file.


## Running the Application
To start the development server and run the application, use the following command:

### `npm run dev`
This will start the development server using Vite and compile the React.js application. Once the server is up and running, you can access the application in your browser at http://localhost:5173 (or a different port if specified).


## Running Unit Tests
To run the unit tests using Vitest, execute the following command:

### `npm run test`
This command will trigger the unit test runner and execute all the unit tests. The test results will be displayed in the console.

The unit tests cover the following scenarios:

Fulfilled when users are fetched successfully
Rejected when an error occurs during user fetch
Dispatching deleteUser with the provided userId
