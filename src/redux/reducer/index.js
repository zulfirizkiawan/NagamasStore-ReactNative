import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {berandaReducer} from './beranda';
import {galeryReducer} from './galery';
import {mekanikReducer} from './mekanik';
import {cartReducer} from './cart';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  berandaReducer,
  galeryReducer,
  mekanikReducer,
  cartReducer,
});

export default reducer;
