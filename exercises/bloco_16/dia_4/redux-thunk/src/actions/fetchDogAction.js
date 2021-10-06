import { FAILED_REQUEST, GET_IMAGE, REQUEST_IMAGE } from './actionTypes';

const failedRequest = (error) => {
  return { type: FAILED_REQUEST, payload: error };
};

const getImage = (json) => {
  return { type: GET_IMAGE, payload: json.message};
};

const requestDog = () => {
  return { type: REQUEST_IMAGE };
};

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((r) => r.json()
        .then(
          (json) => dispatch(getImage(json)),
          (error) => dispatch(failedRequest(error)),
        ))
  }
};

