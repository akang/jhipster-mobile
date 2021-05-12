import authentication,{AuthenticationState} from './authentication.reducer';
import {combineReducers} from 'redux';

export interface IRootState {
    readonly authentication:AuthenticationState;
}


const rootReducer = combineReducers<IRootState>({
    authentication
});

export default rootReducer;
