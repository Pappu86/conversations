import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class FormExample extends React.Component {
    render() {
    return (
      <div className="container">
        <div className="login-container">
          <div className="login-header">Login</div>
          <div className="login-body">
            <form>
              <div className="form-group">                
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div> 
              <div className="text-center">
                <button type="submit" className="btn btn-success width-100P">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <FormExample />,
  document.getElementById('root')
);