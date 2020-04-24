# Coding Challenge for Lattice: Movie Search

## About this app

To have a speedy start [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack) was used. This is a boilerplate tp build a full stack web application using React, Node.js, Express and Webpack.

The app shows a list of popular movies using [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). The user can search for movies by title and is shown more details, when clicking on a movie.

## Running the app locally.

1. Make sure you have [Node.js](https://nodejs.org/en/download/) installed.
1. Install dependencies
    ```bash
    $ yarn install
    ```
1. Request an API key from [The Movie Database API](https://developers.themoviedb.org/3/getting-started)
1. Create a `.env` file in the top level of the app and add the key to it like this
    ```bash
    MOVIE_API_KEY=your-key-here
    ```
1. Run the server
    ```bash
    $ yarn dev
    ```
    This will automatically spin up the client (port 3000) and the server (port 8080). 

## Reflection
**Things I did not had time for**:

* Testing: I an usually very test focused, but I wanted to make sure the functionality is in first since this was not a requirement.
* Redux: I planed to show off some redux skills, but again time was too short for that.
* Pagination: I am aware that there were more results, but since I did not find a search/filter option from the API side, it felt pointless. 

Overall I am quite happy with the outcome and I enjoyed this challenge. 