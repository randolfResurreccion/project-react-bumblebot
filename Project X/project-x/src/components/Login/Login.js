import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = (props) => (
   
    <div className="container">
    <div className="row">
        <div className="col s12 m8 offset-m2">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">BumbleBot</span>
                    <div className="row">
                        <form onSubmit={props.click} className="col s12">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Log In" id="log-in" type="text" className="validate"/>
                                    <label htmlFor="log-in"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Password" id="password" type="password" className="validate"/>
                                    <label htmlFor="password"></label>
                                </div>
                            </div>
                            <div className="row">
                                <button  className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right"></i>
                                </button>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    Not a Member? Register
                                    <Link to="Register">Here</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
);

export default Login;