import FAILED_REQUEST from './actionTypes';

const failedRequest = (error) => {
  return { type: FAILED_REQUEST, payload: error };
};

export default failedRequest;
