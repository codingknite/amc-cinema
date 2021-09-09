# AMC Cinema

![amcbanner](/src/assets/amcbanner.png)

[AMC Cinema](https://amc-cinema.vercel.app) is movie library and ticket booking application built in React and TypeScript.

 I utilized [The Movie DataBase API](https://www.themoviedb.org) to gather the movies and series data and injected this data based on the requested genre.

## How I built this Project
- I didn't use a state management library like Redux on purpose. For this app `useState` and react context were
sufficient. I've realized that more and more projects don't use Redux anymore since GraphQL or
react-query are often used for data management.
- styled-components is a great library for styling. It includes an auto-prefixer, uses scoped
classes, and allows a seamless integration with JS.
- My plan is to become a full-stack developer eventually. But for the beginning I want to focus on the
frontend. I used my basic backend knowledge to create a server to create some routes which were not available in the API. You can find the API [here](https://github.com/codingknite/amc-cinema-api)

## How to setup the Project
- In order to start the project, you'll need to generate an API Key from TMDB. Read the documentation [here](https://www.themoviedb.org/documentation/api)
- Place the generated API Key in a _.env_ file in the root of the project. [See API Reference](#environmental-variables) 
- The project uses Styled-Components as a CSS-in-JS solution and React-Query for fetching remote data.

## Environmental Variables
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `REACT_APP_API_KEY` | `string` | **Required**. TMDB API key |

## Available Scripts

### `npm start or yarn start`
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

### `npm run build or yarn build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

## Built With 
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/) 
- [React-Query](https://react-query.tanstack.com/) 
- [React-Router](https://reactrouter.com/)
- [Styled-Components](https://www.styled-components.com/) 

## Authors
- Joel P. Mugalu 

## Contributors 
- [Yogesh Muthuraj](https://github.com/yogeshmuthuraj) 
