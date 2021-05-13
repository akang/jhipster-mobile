import {IAccount} from '../models/account.model';
import axios from 'axios';


const initialState = {
    isAuthenticated: false,
    account: {} as IAccount,
    jwt: ''
};

export const ACTION_TYPES = {
    LOGIN:'authentication/LOGIN',
    GET_SESSION: 'authentication/GET_SESSION',
};

export type AuthenticationState = Readonly<typeof initialState>;

// reducer
export default (state:AuthenticationState = initialState, action: any):AuthenticationState => {

    switch(action.type) {
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                jwt:action.payload
            };
        default:
            return state;
    }
}


export const getSession: () => void = () => (dispatch, getState) => {
    dispatch({
        type: ACTION_TYPES.GET_SESSION,
        payload: axios.get('api/account'),
    });
};

export const login: (username: string, password: string, rememberMe?: boolean) => void = (username, password, rememberMe = true) => async (
    dispatch,
    getState
) => {
    const result = await dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios.post('api/authenticate', { username, password, rememberMe }),
    });
    const bearerToken = result.value.headers.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        // if (rememberMe) {
        //     Storage.local.set(AUTH_TOKEN_KEY, jwt);
        // } else {
        //     Storage.session.set(AUTH_TOKEN_KEY, jwt);
        // }
    }
    await dispatch(getSession());
};
