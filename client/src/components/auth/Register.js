import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/auth/register", this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            id="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            id="password"
            type="password"
          />
        </div>
        <div>
          <label htmlFor="department">Department</label>
          <input
            onChange={this.handleChange}
            value={this.state.department}
            name="department"
            id="department"
            type="department"
          />
        </div>
        {/* <div>
          <select name="Department" onChange={this.handleChange}>
            <options value={this.state.department}>Student</options>
            <options value={this.state.department}>Project Manager</options>
          </select>
        </div> */}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    );
  }
}

export default Login;
