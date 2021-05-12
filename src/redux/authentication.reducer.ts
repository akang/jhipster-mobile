import {IAccount} from '../models/account.model';


const initialState = {
    isAuthenticated: false,
    account: {} as IAccount,
    jwt: ''
};

export const ACTION_TYPES = {
    LOGIN:'auth/LOGIN'
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

export const login = (username:string, password:string) => {
    // TODO implement login
    console.log('logging in')
    return {
        type: ACTION_TYPES.LOGIN,
        payload: '1'
    }
}
