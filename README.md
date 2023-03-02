# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Folder Structure

 * The `src` directory contains the main source code for your application. The `index.tsx` file is the entry point for your application.
* The `assets` directory should contain all images. Please, use svgs converted to TSX.
* The `routes` directory should be used for creating all Routes.
* The `components` directory contains all of the reusable UI components for your application. The `pages` directory contains the components that connect to the Redux store and provide data to the UI components.
* The `store` directory contains all of the Redux Toolkit slices for your application. Each slice has its own directory, with the slice file, test file, and type definitions. `index.ts` file should be used for configuring store.
* The `types` directory contains reusable inferfaces/types. Check, example.
* The `styles` directory contains all css/scss files.
* The `i18n` directory contains configuration of i18n module (check documentation).
* The `services` directory contains endpoint call functions, which you will use later in your slices (thunks).
* The `utils` directory contains any utility functions or helper classes that your application needs.



