import { SET_CURRENT_GAME } from "../actions/index.js";

const inState = {};

const currentGameReducer = (state = inState, action) => {
    switch (action.type) {
        case SET_CURRENT_GAME:
            return action.payload;
        default:
            return state;
    }
};

export default currentGameReducer;