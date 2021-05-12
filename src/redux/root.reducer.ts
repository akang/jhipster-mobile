import authentication,{AuthState} from './authentication.reducer';
import {combineReducers} from 'redux';

export interface IRootState {
    readonly authentication:AuthState;
}


const rootReducer = combineReducers<IRootState>({
    authentication
});

export default rootReducer;
