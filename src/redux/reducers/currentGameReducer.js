import { FETCH_GAME } from "../actions/index.js";
// should be import { FETCH_TEXT_GAME } from "../actions/index.js"

const inState = {};

// To shuffle games, this should be currentTextGameReducer
const currentGameReducer = (state = inState, action) => {
    switch (action.type) {
        case FETCH_GAME:
            return action.payload;
        default:
            return state;
    }
};

export default currentGameReducer; //should be currentTextGameReducer