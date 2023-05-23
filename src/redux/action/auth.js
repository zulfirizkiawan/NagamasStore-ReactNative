// import Axios from 'axios';
import Axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const signUpAction = (form, navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/register`, form)
    .then(res => {
      // console.log('data user', res.data.user);
      const token = `${res.data.token_type} ${res.data.access_token}`;
      const profile = res.data.user;

      dispatch(setLoading(false));
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      console.log('error register', err);
      dispatch(setLoading(false));
      showMessage('Register Gagal');
    });
};

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then(res => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));
      showMessage('Login Sukses', 'success');
      storeData('token', {value: token});
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      console.log('error login', err);
      dispatch(setLoading(false));
      showMessage('Login gagal mohon periksa email atau password anda');
    });
};
