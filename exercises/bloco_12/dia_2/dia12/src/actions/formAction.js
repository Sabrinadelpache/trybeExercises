const FORM_STATE = {};
const sendInfo = (FORM_STATE) => {
  return {
    type: "SEND_INFO",
    data: FORM_STATE,
  }
};

export default sendInfo;
