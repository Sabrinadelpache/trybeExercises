import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import FormError from './FormError';
import FormDataDisplay from './FormDataDisplay';
import { connect } from 'react-redux';
import sendInfo from './actions/formAction';
import formReducer from './reducers/formReducer';

class App extends Component {

  changeHandler = event => {
    let { name, value } = event.target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  }

  onBlurHandler = event => {
    let { name, value } = event.target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value)
      }
    }));
  }

  validateAddress = address => address.replace(/[^\w\s]/gi, '')

  handleSubmit = event => {
    event.preventDefault();
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  resetForm = (state) => { this.setState( state ) };

  sendForm = () => { this.setState({ submitted: true }) };

  render() {
    const { state } =  this.props;
    const { submitted } = state;

    return (
      <main>
        <Form
          sendForm={this.sendForm}
          resetForm={(state) => { this.resetForm(state) }}
          changeHandler={this.changeHandler}
          currentState={ state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={state.formError} />
        </div>
        { submitted && <FormDataDisplay currentState={ state } /> }
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.formReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  sendForm: state => dispatch(sendInfo(state)),
});

export default connect (mapStateToProps, mapDispatchToProps)(App);