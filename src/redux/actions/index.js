import { useParams } from "react-router-dom";

export const SET_USER_INFO = "SET_USER_INFO";

export const FETCH_GAME = "FETCH_GAME";

export const fetchGames = (level, number) => {

    console.log("level: ", level)
    console.log("number: ", number)

    return async (dispatch) => {

        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games/${level}/${number}`, {
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
