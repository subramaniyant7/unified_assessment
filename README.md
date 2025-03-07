# Cryptocurrency Tracker

A simple and responsive cryptocurrency tracking application built with React, TypeScript, and Tailwind CSS. This app fetches cryptocurrency data using the [CoinGecko API](https://www.coingecko.com/api/documentations/v3#/) and provides both list and grid views for the user to explore market information. The app supports drag-and-drop reordering of coins, displays coin details, and includes animations and error handling for a smooth user experience.

## Features
Fetch and Display Cryptocurrency Data: The app fetches data from the CoinGecko API and displays it in a user-friendly interface.

Grid/List View Toggle: Users can switch between grid and list views to display the cryptocurrency data.

Drag-and-Drop Reordering: Reorder the coin list using drag-and-drop functionality.

Coin Details Page: Clicking on a coin shows its detailed information like description, market cap, algorithm, and homepage.

Confetti Animation: A confetti animation is displayed when a user marks a coin as a favorite.

Error Handling: Proper error handling is implemented for API request failures.

Responsive Design: The app is fully responsive, ensuring it works on mobile and desktop devices.

## Features
React.js: A JavaScript library for building user interfaces.

TypeScript: A typed superset of JavaScript that improves code quality and maintainability.

Tailwind CSS: A utility-first CSS framework for creating custom designs.

Framer Motion: An animation library for React that makes it easy to create complex animations.

react-beautiful-dnd: A drag-and-drop library for React to implement reordering.

CoinGecko API: Provides cryptocurrency market data.

## Folder Structure
Here's an overview of the folder structure:

/src
  /components       - React components (CoinList, GridMode, ListMode, etc.)
  
  /api              - API requests (for CoinGecko API)
  
  /styles           - TailwindCSS or other styling related files
  
/public
  index.html        - The main HTML file
  ...
  
/node_modules       - Project dependencies

/package.json       - Project metadata and dependencies

/tsconfig.json      - TypeScript configuration

/jest.config.js     - Jest testing configuration

/tailwind.config.js - TailwindCSS configuration

## Setup and Installation
Make sure you have Node.js and npm installed on your machine. You can download and install them from the official website:

[Node.js Download](https://nodejs.org/en)

Clone the repo and run the below commands

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




