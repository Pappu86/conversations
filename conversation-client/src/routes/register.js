import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import '../components-style/register.css';

class Register extends React.Component {
  state = {
    username: '',
    usernameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
    });

    const { username, email, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, email, password },
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push('/login');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, usernameError, emailError, passwordError } = this.state;

    const errorList = [];

    if (usernameError) {
      errorList.push(usernameError);
    }

    if (emailError) {
      errorList.push(emailError);
    }

    if (passwordError) {
      errorList.push(passwordError);
    }

    return (
      <div className="container">
        <div className="register-container">
          <div className="register-header">Register</div>         
            <div className="register-body">              
                <div className="form-group">  
                  <input className="form-control" name="username" onChange={this.onChange} value={username} placeholder="Name" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="email" onChange={this.onChange} value={email} placeholder="Email" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="password" onChange={this.onChange} value={password} type="password" placeholder="Password" />
                </div>
                <div className="text-center">
                  <button className="btn btn-success width-100P" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
          </div>
      </div>
    );
  };
}

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerMutation)(Register);