export const SET_USER_INFO = "SET_USER_INFO";

export const GET_GAMES = "GET_GAMES";
export const SET_CURRENT_GAME = "SET_CURRENT_GAME";

export const setCurrentGame = () => {
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
                    type: SET_CURRENT_GAME,
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
