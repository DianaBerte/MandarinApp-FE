import { FETCH_GAME } from "../actions/index.js";

const inState = {};

const currentGameReducer = (state = inState, action) => {
    switch (action.type) {
        case FETCH_GAME:
            return action.payload;
        default:
            return state;
    }
};

export default currentGameReducer;