# AMC Cinema

![amcbanner](/client/src/assets/amcbanner.png)

[AMC Cinema](https://amc-cinema.verce.app) is movie library and ticket booking application built in React.

## Tech Stack
- React
- TypeScript
- React Query
- Styled-Compoents


## Project Setup

After cloning the project to your local system, you'll find two main folders

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
