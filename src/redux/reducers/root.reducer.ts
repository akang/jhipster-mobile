import authentication, {AuthenticationState} from './authentication.reducer';
import {combineReducers} from 'redux';
import register, {RegisterState} from './register.reducer';
import passwordReset, {PasswordResetState} from './password-reset.reducer';

export interface IRootState {
    readonly authentication:AuthenticationState;
    readonly register: RegisterState;
    readonly passwordReset: PasswordResetState;
}


const rootReducer = combineReducers<IRootState>({
    authentication,
    register,
    passwordReset
});

export default rootReducer;
