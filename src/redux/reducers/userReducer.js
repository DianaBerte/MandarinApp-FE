import { SET_USER_INFO, GET_CURRENT_USER } from "../actions/index.js"

const initialState = {
    userInfo: [],
    currentUser: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload,
            };
        case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state;
    }
};

export default userReducer