import { TOGGLE_MODAL } from '../actions/types';

const initialState = {
    openModal: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                openModal: !state.openModal
            };
        default:
            return state;
    }
}
