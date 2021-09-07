import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./test.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmitLili = this.onSubmitLili.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmitLili(event) {
    event.preventDefault();

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    //send the registered to the backend
    axios
      .post("http://localhost:4230/app/signup", registered)
      .then((response) => console.log(response.data));

    //window.location(./home);

    this.setState({
      fullName: "",
      username: "",
      password: "",
      email: "",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-group">
            <form onSubmit={this.onSubmitLili}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control col-md-6 mb-3 mt-3"
              />

              <input
                type="text"
                placeholder="username"
                onChange={this.changeUsername}
                value={this.state.username}
                className="form-control col-md-6 mb-3"
              />

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <input
                type="text"
                placeholder="email"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control col-md-6 mb-3"
              />

              <input
                type="password"
                placeholder="password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control col-md-6 mb-3"
              />

              <input
                type="submit"
                className="btn btn-danger btn-block col-md-12 mb-3"
                value="Submit"
              />
            </form>

            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

            <div class="container register">
              <div class="row">
                <div class="col-md-3 register-left">
                  <img
                    src="https://image.ibb.co/n7oTvU/logo_white.png"
                    alt=""
                  />
                  <h3>Welcome</h3>
                  <p>You are 30 seconds away from earning your own money!</p>
                  <input type="submit" name="" value="Login" />
                  <br />
                </div>
                <div class="col-md-9 register-right">
                  <ul
                    class="nav nav-tabs nav-justified"
                    id="myTab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Employee
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Hirer
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="myTabContent">
                    <div
                      class="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <h3 class="register-heading">Apply as a Employee</h3>
                      <div class="row register-form">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="First Name *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Confirm Password *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <div class="maxl">
                              <label class="radio inline">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="male"
                                  checked
                                />
                                <span> Male </span>
                              </label>
                              <label class="radio inline">
                                <input
                                  type="radio"
                                  name="gender"
                                  value="female"
                                />
                                <span>Female </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Your Email *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              minlength="10"
                              maxlength="10"
                              name="txtEmpPhone"
                              class="form-control"
                              placeholder="Your Phone *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <select class="form-control">
                              <option class="hidden" selected disabled>
                                Please select your Sequrity Question
                              </option>
                              <option>What is your Birthdate?</option>
                              <option>What is Your old Phone Number</option>
                              <option>What is your Pet Name?</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Enter Your Answer *"
                              value=""
                            />
                          </div>
                          <input
                            type="submit"
                            class="btnRegister"
                            value="Register"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade show"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <h3 class="register-heading">Apply as a Hirer</h3>
                      <div class="row register-form">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="First Name *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              maxlength="10"
                              minlength="10"
                              class="form-control"
                              placeholder="Phone *"
                              value=""
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Confirm Password *"
                              value=""
                            />
                          </div>
                          <div class="form-group">
                            <select class="form-control">
                              <option class="hidden" selected disabled>
                                Please select your Sequrity Question
                              </option>
                              <option>What is your Birthdate?</option>
                              <option>What is Your old Phone Number</option>
                              <option>What is your Pet Name?</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="`Answer *"
                              value=""
                            />
                          </div>
                          <input
                            type="submit"
                            class="btnRegister"
                            value="Register"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
