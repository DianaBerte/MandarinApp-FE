import { FETCH_AUDIO_GAME } from "../actions/index.js";

const inState = {};

const currentAudioGameReducer = (state = inState, action) => {
    switch (action.type) {
        case FETCH_AUDIO_GAME:
            return action.payload;
        default:
            return state;
    }
};

export default currentAudioGameReducer;