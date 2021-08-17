# AMC Cinema

![amcbanner](/src/assets/amcbanner.png)
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

[AMC Cinema](https://amc-cinema.verce.app) is movie library and ticket booking application built in React.
=======
## Coming Soon 😉
>>>>>>> 8174146 (create README.md)
=======
![amcbanner](/client/src/assets/amcbanner.png)
=======
>>>>>>> 6cbfdff (update README)

[AMC Cinema](https://amc-cinema.verce.app) is movie library and ticket booking application built in React.
<<<<<<< HEAD

## How I worked on this project

My goal was to simulate a professional work environment. 

- I built this app based on designs I found on Behance
- I used feature branches and Pull Requests: [Example PR](https://github.com/codingknite/amc-cinema/pull/3)
 
## How to navigate this project

- Somewhat complex stateful logic: [Link to example code on GitHub]
- Responsive CSS using styled-components: [Link to example code on GitHub]
- The application fetches data from the XZY API: Examples for the request [link to code on GitHub] and data transformation [link to code on GitHub]
- Integration tests using React Testing Library: [Link to example test on GitHub]

Here is the folder structure of the application.

📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┃ 📂Folder
 ┃ ┃  ┣ 📜index.tsx
 ┃ ┃  ┗ 📜styles.ts
 ┣ 📂context
 ┣ 📂data
 ┣ 📂hooks
 ┣ 📂reducers
 ┣ 📂routes
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils

****
## Why I built the project this way
- I didn't use a state management library like Redux on purpose. For this app simple `useState` is sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or react-query are often used for data management.
- styled-components is a great library for styling. It includes an auto-prefixer, uses scoped classes, and allows a seamless integration with JS.
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the frontend. That's why I decided to use an existing API rather to create a custom server. I have basic backend knowledge as well.
- Testing is an essential part of production applications. Testing Library is the go-to library in the React community. I covered the essential features of the app with tests.
## If I had more time I would change this

- Set up continuous integration to run the tests and ESLint on every Pull Request
- Refactor some of the code. Especially this part [link to code on GitHub]
- Add end-to-end tests with Cypress.

## Available Scripts[List scripts to start or test the app

Before running the application on your local machine, you'll need to generate an API Key from [TMDB](). Create a `.env` file in the root directory of the project. Assign the API Key as follows.

```shell
REACT_APP_API_KEY= 1a2B3c4D56e78g09
```

Refer to the `.env.example` file in the root directory of the project.

### `/api`

I created a mini API for two of the requests on the landing page.

The API is hosted at [amc-cinema-api.vercel.app](https://amc-cinema-api.vercel.app).

You will need to generate an API Key from [TMDB](https://www.themoviedb.org/documentation/api).

This API key is assigned to the `API_KEY` variable in the root `.env` file

#### Scripts

`npm start` - run the node production server on localhost port 8000

`npm run dev` - run the development server with nodemon on localhost port 8000

`npm run lint` - Run the linter. use the flag `--fix` to apply the linting styles to the code

#### Routes

`/api/featured` - This route will return featured movies.

`/api/now-playing` - This will return movies now playing.

`/api/coming-soon` - This will return movies that are coming soon

##### `Example Response`

```json
{
  "message": "success",
  "data": [
    {
      "adult": false,
      "backdrop_path": "/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
      "genre_ids": [
        28,
        14,
        12
      ],
      "id": 460465,
      "original_language": "en",
      "original_title": "Mortal Kombat",
      "overview": "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by
       Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest
       champions as he prepares to stand against the enemies of Outworld in a high stakes battle
       for the universe.",
      "popularity": 950.16,
      "poster_path": "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
      "release_date": "2021-04-07",
      "title": "Mortal Kombat",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 3361
    },
  ]
}
```

You can read more about the API [here](https://amc-cinema-api.vercel.app)

### `/client`

This folder hosts all the frontend code under the `src` directory

You will also need to generate an API key from TMDB which is assigned to `REACT_APP_API_KEY` in the `.env` file

Feel free to add any contributions to the app.
>>>>>>> 140db7f (create README)
=======

[AMC Cinema](https://amc-cinema.verce.app) is movie library and ticket booking application built in React.
>>>>>>> 58dd943 (add project banner)
=======
>>>>>>> d32fd9e (update README)
=======

[AMC Cinema](https://amc-cinema.verce.app) is movie library and ticket booking application built in React.
>>>>>>> d7ea6f6e37cd3f5ff2264ea803e53a26791d4084
