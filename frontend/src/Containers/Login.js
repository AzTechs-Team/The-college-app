import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, withRouter } from "react-router-dom";
import "../Styles/margin.css";
import Title from "../Components/Title";
import { FormGroup } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

//declaring login class using React Component
class Login extends React.Component {
  //declaring state of class to help extract data from user input
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: false,
      status: false,
    };
  }

  //declaring function to change state "name" based on user input
  handleEmailChange = (e) =>
    this.setState({
      email: e.target.value,
    });

  //declaring function to change state "password" based on user input
  handlePwdChange = (e) =>
    this.setState({
      password: e.target.value,
    });

  //decalring function to handle data recieved from user input.
  //Data is converted to a JSON object
  handleData = () => {
    fetch("https://cluster-aztechs.herokuapp.com/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((token) => {
        if (token.msg) {
          this.setState({ err: true });
        } else {
          this.props.loadToken(token);
          this.props.history.push("/user");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Rendering components which will be returened on page
  render() {
    return (
      <div style={{ backgroundColor: "#2d2d2d", color: "white" }}>
        <Title name="Login" />
        <div id="login">
          <Grid container style={{ display: "flex", justifyContent: "center" }}>
            <Grid item md={5} xs={10}>
              <form noValidate autoComplete="off">
                <FormGroup>
                  <TextField
                    id="outlined-username-input"
                    label="Email"
                    type="text"
                    variant="filled"
                    className="email-input"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    color="secondary"
                    InputProps={{
                      style: {
                        backgroundColor: "#bfbfbf",
                        borderRadius: 7,
                        marginBottom: 15,
                      },
                    }}
                    required
                  />

                  <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePwdChange}
                    autoComplete="current-password"
                    variant="filled"
                    color="secondary"
                    InputProps={{
                      style: {
                        backgroundColor: "#bfbfbf",
                        borderRadius: 7,
                        marginBottom: 15,
                      },
                    }}
                    required
                  />

                  <Button
                    variant="contained"
                    onClick={this.handleData}
                    style={{
                      width: 180,
                      alignSelf: "center",
                      backgroundColor: "#e84a5f",
                      color: "#131313",
                      marginBottom: 20,
                    }}
                    component={Link}
                  >
                    Login
                  </Button>

                  {this.state.err ? (
                    <Typography
                      align="center"
                      style={{ color: "#e84a5f", marginBottom: 30 }}
                    >
                      Email/Password Incorrect. Please try again.
                    </Typography>
                  ) : null}

                  <Typography align="center">
                    Don't have an account yet??
                  </Typography>
                  <Button
                    color="default"
                    component={Link}
                    to="/signup"
                    style={{
                      width: 150,
                      alignSelf: "center",
                      backgroundColor: "#bfbfbf",
                      color: "#000",
                    }}
                  >
                    Signup Now
                  </Button>
                </FormGroup>
              </form>
            </Grid>
          </Grid>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Login);
