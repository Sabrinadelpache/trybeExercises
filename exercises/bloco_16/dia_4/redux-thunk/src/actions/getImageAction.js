import GET_IMAGE from './actionTypes';

const getImage = (json) => {
  return { type: GET_IMAGE, payload: json.message};
};

export default  getImage;