import axios from 'axios';
import {FAILURE, REQUEST, SUCCESS} from '../action-type.util';
import * as SecureStore from 'expo-secure-store';

const initialState = {
    loading: false,
    isAuthenticated: false,
    loginSuccess: false,
    loginError: false, // Errors returned from server side
    showModalLogin: false,
    account: {} as any,
    errorMessage: (null as unknown) as string, // Errors returned from server side
    redirectMessage: (null as unknown) as string,
    sessionHasBeenFetched: false,
    idToken: (null as unknown) as string,
    logoutUrl: (null as unknown) as string,
};

export const ACTION_TYPES = {
    LOGIN:'authentication/LOGIN',
    GET_SESSION: 'authentication/GET_SESSION',
    LOGOUT: 'authentication/LOGOUT',
    CLEAR_AUTH: 'authentication/CLEAR_AUTH',
    ERROR_MESSAGE: 'authentication/ERROR_MESSAGE',
};

export type AuthenticationState = Readonly<typeof initialState>;

// reducer
export default (state:AuthenticationState = initialState, action: any):AuthenticationState => {

    switch(action.type) {
        case REQUEST(ACTION_TYPES.LOGIN):
        case REQUEST(ACTION_TYPES.GET_SESSION):
            return {
                ...state,
                loading: true,
            };
        case FAILURE(ACTION_TYPES.LOGIN):
            return {
                ...initialState,
                errorMessage: action.payload,
                showModalLogin: true,
                loginError: true,
            };
        case FAILURE(ACTION_TYPES.GET_SESSION):
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                sessionHasBeenFetched: true,
                showModalLogin: true,
                errorMessage: action.payload,
            };
        case SUCCESS(ACTION_TYPES.LOGIN):
            return {
                ...state,
                loading: false,
                loginError: false,
                showModalLogin: false,
                loginSuccess: true,
            };
        case SUCCESS(ACTION_TYPES.GET_SESSION): {
            const isAuthenticated = action.payload && action.payload.data && action.payload.data.activated;
            return {
                ...state,
                isAuthenticated,
                loading: false,
                sessionHasBeenFetched: true,
                account: action.payload.data,
            };
        }
        case ACTION_TYPES.ERROR_MESSAGE:
            return {
                ...initialState,
                showModalLogin: true,
                redirectMessage: action.message,
            };
        case ACTION_TYPES.CLEAR_AUTH:
            return {
                ...state,
                loading: false,
                showModalLogin: true,
                isAuthenticated: false,
            };
        case ACTION_TYPES.LOGOUT:
            return {
                ...initialState,
                isAuthenticated: false,
            };
        default:
            return state;
    }
}


export const getSession: () => void = () => (dispatch, getState) => {
    dispatch({
        type: ACTION_TYPES.GET_SESSION,
        payload: axios.get(`api/account`),
    });
};

export const login: (username: string, password: string, rememberMe?: boolean) => void = (username, password, rememberMe = true) => async (
    dispatch,
    getState
) => {
    const result = await dispatch({
        type: ACTION_TYPES.LOGIN,
        payload: axios.post(`api/authenticate`, { username, password, rememberMe }),
    });
    const bearerToken = result.value.headers.authorization;
    if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
        const jwt = bearerToken.slice(7, bearerToken.length);
        if (rememberMe) {
            await SecureStore.setItemAsync('authentication-token', jwt);
        } else {
            // TODO
            console.log('handle this')
        }
    }
    await dispatch(getSession());
};

export const clearAuthToken = async () => {
    await SecureStore.deleteItemAsync('authentication-token');
};

export const displayAuthError = message => ({ type: ACTION_TYPES.ERROR_MESSAGE, message });

export const clearAuthentication = messageKey => (dispatch, getState) => {
    clearAuthToken();
    dispatch(displayAuthError(messageKey));
    dispatch({
        type: ACTION_TYPES.CLEAR_AUTH,
    });
};

export const logout: () => void = () => dispatch => {
    clearAuthToken();
    dispatch({
        type: ACTION_TYPES.LOGOUT,
    });
};
