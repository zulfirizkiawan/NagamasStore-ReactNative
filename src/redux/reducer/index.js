import {combineReducers} from 'redux';
import {registerReducer, photoReducer} from './auth';
import {globalReducer} from './global';
import {berandaReducer} from './beranda';
import {galeryReducer} from './galery';
import {mekanikReducer} from './mekanik';
import {cartReducer} from './cart';
import {pesananMekanikReducer} from './pesananMekanik';
import {pesananProdukReducer} from './pesananProduk';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  photoReducer,
  berandaReducer,
  galeryReducer,
  mekanikReducer,
  cartReducer,
  pesananMekanikReducer,
  pesananProdukReducer,
});

export default reducer;
