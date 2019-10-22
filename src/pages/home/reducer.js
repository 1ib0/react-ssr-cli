let initialState = { name: 'hanmeimei' };
import { CHANGE_NAME, GET_WEATHER } from './action';

function homeStore(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, name: action.value };
        case GET_WEATHER:
            return { ...state, weather: action.value };
        default:
            return state;
    }
}

export default homeStore;
