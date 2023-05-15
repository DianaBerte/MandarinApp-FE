export const SET_USER_INFO = "SET_USER_INFO";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
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
                }); console.log("Working: fetchGames()");
            } else {
                console.log("FE: Error in fetchGames()");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchInterSecond = () => {
    return async (dispatch) => {
        try {
            console.log("Entering: fetchInterSecond()")
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
                    type: FETCH_GAME,
                    payload: data,
                }); console.log("Working: fetchInterSecond()");
            } else {
                console.log("FE: Error in fetchInterSecond()");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchInterThird = () => {
    return async (dispatch) => {
        try {
            console.log("Entering: fetchInterThird()")
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games/intermediate/third`, {
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
                }); console.log("Working: fetchInterThird()");
            } else {
                console.log("FE: Error in fetchInterThird()");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchBegSecond = () => {
    return async (dispatch) => {
        try {
            console.log("Entering: fetchBegSecond()")
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games/beginner/second`, {
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
                }); console.log("Working: fetchBegSecond()");
            } else {
                console.log("FE: Error in fetchBegSecond()")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const setUserInfo = (user) => {
    return {
        type: SET_USER_INFO,
        payload: { userInfo: user }
    }
}

export const setCurrentUser = (currentUser) => {
    return {
        type: SET_CURRENT_USER,
        payload: currentUser,
    }
}

export const getUsers = async () => {
    console.log("Entering: getUsers()")
    try {
        const res = await fetch(`${process.env.REACT_APP_BE_URL}/users`)
        if (!res.ok) {
            console.log("FE: error fetching users in getUsers().")
        };
        const data = await res.json();
        console.log("Working ok: getUsers()");
        return data;
    } catch (error) {
        console.log(error)
    }
};

// export const setUserInfo = () => {
//     return async (dispatch) => {
//         try {
//             const res = await fetch(`${process.env.REACT_APP_BE_URL}/users/${id}/profile`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             if (res.ok) {
//                 const data = await res.json();
//                 dispatch({
//                     type: SET_USER_INFO,
//                     payload: data,
//                 }); console.log("Working: setUserInfo()");
//             } else {
//                 console.log("FE: Error in setUserInfo()")
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

// export const setProfileImage = (id, image, setIsChanging) => {
//     return async (dispatch) => {
//         try {
//             const res = await fetch(`${process.env.REACT_APP_BE_URL}/users/${id}/profile/image`, {
//                 method: "POST",
//                 body: image,
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             if (res.ok) {
//                 dispatch(setUserInfo());
//                 setIsChanging();
//                 console.log("Working: setProfileImage()");
//             } else {
//                 console.log("FE: Error in setProfileImage()")
//             }
//         } catch (error) {
//             console.error(error)
//         }
//     }
// }
