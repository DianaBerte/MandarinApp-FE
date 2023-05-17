import { UPDATE_CURRENT_USER } from "../actions/index.js";

const updateCurrentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return {
                ...state,
                currentUser: { ...state.currentUser, ...action.payload },
            };
        default:
            return state;
    }
};

export default updateCurrentUserReducer