import Axios from 'axios';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'https://nagamas.kazuhaproject.com/api/v1',
};

export const getPendingProduk = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/product-transaction?user_id=${resProfile.id}&status=Pending`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          // console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_PENDING_PRODUK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data PRODUK', err);
        });
    });
  });
};

export const getProsesProduk = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/product-transaction?user_id=${resProfile.id}&status=Proses`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          // console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_PROSES_PRODUK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data PRODUK', err);
        });
    });
  });
};

export const getKirimProduk = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/product-transaction?user_id=${resProfile.id}&status=Kirim`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          // console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_KIRIM_PRODUK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data PRODUK', err);
        });
    });
  });
};

export const getSelesaiProduk = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/product-transaction?user_id=${resProfile.id}&status=Selesai`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          // console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_SELESAI_PRODUK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data PRODUK', err);
        });
    });
  });
};

export const getBatalProduk = () => dispatch => {
  getData('userProfile').then(resProfile => {
    getData('token').then(resToken => {
      Axios.get(
        `${API_HOST.url}/product-transaction?user_id=${resProfile.id}&status=Batal`,
        {
          headers: {
            Authorization: resToken.value,
            Accept: 'application/json',
          },
        },
      )
        .then(res => {
          // console.log('berhasil', res.data.data.data);
          dispatch({type: 'SET_BATAL_PRODUK', value: res.data.data.data});
        })
        .catch(err => {
          console.log('error mengambil data PRODUK', err);
        });
    });
  });
};
