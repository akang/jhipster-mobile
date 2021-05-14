import authentication,{AuthenticationState} from './authentication.reducer';
import {combineReducers} from 'redux';
import register,{RegisterState} from './register.reducer';

export interface IRootState {
    readonly authentication:AuthenticationState;
    readonly register: RegisterState;
}


const rootReducer = combineReducers<IRootState>({
    authentication,
    register
});

export default rootReducer;
