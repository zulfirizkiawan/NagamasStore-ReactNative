import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {berandaReducer} from './beranda';
import {galeryReducer} from './galery';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  berandaReducer,
  galeryReducer,
});

export default reducer;
