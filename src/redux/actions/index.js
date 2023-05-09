export const SET_USER_INFO = "SET_USER_INFO";

export const FETCH_GAME = "FETCH_GAME";

export const fetchGames = (level) => {

    return async (dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games/${level}`, {
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
                console.log("FE: Error fetching games!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchAudio = () => {
    return async (dispatch) => {
        try {
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games/intermediate/second`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            if (res.ok) {
                const data = await res.json();
                dispatch({
                    type: FETCH_AUDIO,
                    payload: data,
                });
            } else {
                console.log("FE: Error fetching audio.")
            }
        } catch (error) {
            console.log(error)
        }
    }
}
