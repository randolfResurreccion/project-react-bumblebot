
import React from "react";
import "./Register.css";

const Register = (props) => (
    <div className="container">
    <div className="row">
        <div className="col s12 m12">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Register</span>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="username"></label>
                                <input placeholder="Username" id="username" type="text" className="validate" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="password"></label>
                                <input placeholder="Password" id="password" type="password" className="validate" />
                            </div>
                            </div>
                            <div className="row">
                            <div className="input-field col s12">
                                <label htmlFor="reEnterPwd"></label>
                                <input placeholder="Re-Enter Password" id="reEnterPwd" type="password" className="validate" />
                            </div>
                            </div>
                        </form>
                        <div className="row">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);




export default Register;


