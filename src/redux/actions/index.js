export const SET_USER_INFO = "SET_USER_INFO";

export const FETCH_GAME = "FETCH_GAME";

export const fetchGames = (level) => {

    // 5. Qui funziona tutto immagino, anche se fetchGames() non utilizza nessun parametro (dovrebbe almeno ricevere level dal momento che lo lanci in <GameOne />).
    // Come dicevi tu qui potresti usare questa informazione di level (beginner, intermediate, advanced)
    //per fare un'unica fetch delle domande con livello di difficoltà corretto.

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
                console.log("Error fetching games!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};
