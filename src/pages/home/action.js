import axios from 'axios';

export const CHANGE_NAME = Symbol();
export const GET_WEATHER = Symbol();

export function changeName(name) {
    return {
        type: CHANGE_NAME,
        value: name
    };
}

export function getWeather() {
    return dispatch => {
        return axios
            .get(
                'https://www.apiopen.top/weatherApi?city=' +
                    encodeURIComponent('杭州')
            )
            .then(res => {
                dispatch({
                    type: GET_WEATHER,
                    value: res.data
                });
            });
    };
}
