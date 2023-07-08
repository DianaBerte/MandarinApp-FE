export const SET_USER_INFO = "SET_USER_INFO";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const FETCH_GAME = "FETCH_GAME"; //should be FETCH_TEXT_GAME;
export const FETCH_AUDIO_GAME = "FETCH_AUDIO_GAME";

const accessToken = localStorage.getItem("accessToken");

//Fisher-Yates algorithm to shuffle the games:
function shuffleArray(array) {
    const shuffledArray = [...array]; // creating a new array by spreading the elements of the original array;
    for (let i = shuffledArray.length - 1; i > 0; i--) { // looping from the last element of shuffledArray, and iterating backwards until the 1st element;
        const j = Math.floor(Math.random() * (i + 1)); // in each iteration, generating random index j, which is between 0 and the current index i, inclusive.
        // Math.random() returns random floating point btw 0 and 1;
        // Math.floor() rounds down the number to the nearest integer; multiplying Math.floor() by i+1 generates a random number in the range of 0 to i.
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // swapping the elements by destructuring the arrays => effective shuffling

    }
    return shuffledArray;
}

export const fetchGames = (level) => {
    //should be fetchTextGames

    return async (dispatch) => {
        try {
            const res = await fetch(

                // should be fetching from BE ${process.env.REACT_APP_BE_URL}/textGames/${level}
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
                    //should be FETCH_TEXT_GAME

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

export const fetchAudioInterSecond = () => {
    //used to be: fetchInterSecond

    return async (dispatch) => {
        try {
            console.log("Entering: fetchAudioInterSecond()")
            const res = await fetch(

                `${process.env.REACT_APP_BE_URL}/games/intermediateAudio/second`, {
                // `${process.env.REACT_APP_BE_URL}/games/intermediate/second`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
            );
            if (res.ok) {
                const data = await res.json();

                //Shuffling the games array:
                const shuffledGames = shuffleArray(data);
                dispatch({
                    // type: FETCH_GAME,
                    type: FETCH_AUDIO_GAME,
                    payload: shuffledGames,

                }); console.log("Working: fetchAudioInterSecond()");
            } else {
                console.log("FE: Error in fetchAudioInterSecond()");
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

export const fetchBeginnerThird = () => {
    return async (dispatch) => {
        try {
            console.log("Entering: fetchBeginnerThird()")
            const res = await fetch(
                `${process.env.REACT_APP_BE_URL}/games/beginner/third`, {
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
                }); console.log("Working: fetchBeginnerThird()");
            } else {
                console.log("FE: Error in fetchBeginnerThird()")
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


export const getUsers = async (accessToken) => {
    console.log("Entering: getUsers()")
    try {
        const res = await fetch(`${process.env.REACT_APP_BE_URL}/users`, {
            method: "GET",
            headers: {
                Authorization: "Bearer " + accessToken,
                "Content-Type": "application/json",
            },
        })
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
