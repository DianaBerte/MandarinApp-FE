export const SET_USER_INFO = "SET_USER_INFO";

export const FETCH_GAME = "FETCH_GAME";

export const fetchGames = () => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: FETCH_GAME,
                    payload: data,
                });
            } else {
                console.log("Error fetching games!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

// Assuming you have a backend API that returns data for each game level (beginner/first, beginner/second, beginner/third), you can use React Router to set up dynamic routing in your application.

// Here's an example of how you could set up your router and fetch data for each route:

// ```
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

// const GameLevel = () => {
//   const { level } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch data for the current game level here using level variable
//     // Example: fetch(`http://localhost:3001/games/${level}`)
//     // .then(response => response.json())
//     // .then(data => setData(data))
//   }, [level]);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       // Display data for the current game level here
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/games/:level">
//           <GameLevel />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;
// ```

// In this example, `<Router>` sets up the routing for the application and `<Switch>` renders the appropriate component based on the current route. The `<Route>` component has a dynamic parameter `:level`, which is used in the `GameLevel` component to fetch data for the current game level.

// The `useParams` hook provided by `react-router-dom` is used to extract the `:level` parameter from the current route. The `useEffect` hook is used to fetch data for the current game level when `level` changes. If there is no data yet, a loading message is displayed. Once the data is loaded, it is displayed in the component.