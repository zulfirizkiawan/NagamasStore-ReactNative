import {showMessage as showToast} from 'react-native-flash-message';

export const showMessage = (message, type) => {
  let backgroundColor;
  if (type === 'success') {
    backgroundColor = '#1ABC9C';
  } else if (type === 'warning') {
    backgroundColor = 'orange';
  } else {
    backgroundColor = '#D9435E';
  }

  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor,
    duration: 4000,
  });
};
