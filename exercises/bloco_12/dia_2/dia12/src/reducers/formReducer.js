import formAction from '../actions/formAction';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
};

const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND_INFO':
      const data = action.data;
      return { ...state,
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        address: data.address,
        city: data.city,
        countryState: data.countryState,
        addressType: data.addressType,
        resume: data.resume,
        role: data.role,
        roleDescription: data.roleDescription,
        formError: data.formError,
        submitted: data.submitted, };
    default:
      return state;
  }
}

export default formReducer;
