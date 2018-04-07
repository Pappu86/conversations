import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components-style/index.css';
import '../components-style/login.css';


class Login extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      email: '',
      password: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { email, password } = this;
    const response = await this.props.mutate({
      variables: { email, password },
    });

    const {
      ok, token, refreshToken, errors,
    } = response.data.login;

    if (ok) {
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', refreshToken);
      this.props.history.push('/');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

    render() {
      const { email, password, errors: { emailError, passwordError } } = this;

    const errorList = [];

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }

console.log("errorList: ", errorList);

    return (
      <div className="container">
        <div className="login-container">
          <div className="login-header">Login</div>
          <div className="login-body">            
              <div className="form-group">                
                <input type="email" className="form-control" name="email" onChange={this.onChange} value={email} placeholder="Enter email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" placeholder="Enter password" name="password" onChange={this.onChange} value={password} />
              </div> 
              <div className="text-center">
                <button className="btn btn-success width-100P" onClick={this.onSubmit}>Login</button>
              </div>            
          </div>
        </div>
      </div>
    );
  }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(loginMutation)(observer(Login));