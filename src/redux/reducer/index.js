import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {berandaReducer} from './beranda';
import {galeryReducer} from './galery';
import {mekanikReducer} from './mekanik';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  berandaReducer,
  galeryReducer,
  mekanikReducer,
});

export default reducer;
