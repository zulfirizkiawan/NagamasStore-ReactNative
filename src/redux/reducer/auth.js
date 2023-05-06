const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  phone_number: '',
  role_id: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password,
      address: action.value.address,
      role_id: action.value.role_id,
      phone_number: action.value.phone_number,
    };
  }

  return state;
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  if (action.type === 'SET_UPLOAD_STATUS') {
    return {
      ...state,
      isUploadPhoto: action.value,
    };
  }
  return state;
};
