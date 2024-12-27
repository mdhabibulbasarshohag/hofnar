import "./SignUp.css"
import RobotoInvestments from "../../images/RobotoInvestments.png";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div>
            <section className="sh--create--your--account--section sh--common--bg--body">
                <div className="container">
                    <div className="sh--create--your--account">
                        <div className="sh--create--your--account--header">
                            <div className="sh--create--your--account--title">
                                <h2 className="sh--common--header--title">Get Started</h2>
                            </div>
                            <div className="sh--create--your--account--title--img">
                                <img src={RobotoInvestments} alt="header" />
                            </div>
                        </div>
                        <form action="" className="sh--create--your--account--row">
                            <div className="sh--create--your--account--col--header">
                                <div className="sh--create--your--account--form--title">
                                    <h2 className="sh--common--sub--title">Create Your Account</h2>
                                </div>
                            </div>
                            <div className="sh--create--your--account--col--body">
                                <div className="sh--create--your--account--form--group">
                                    <label htmlFor="name">Username</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Write your username"
                                    />
                                </div>
                                <div className="sh--create--your--account--form--group">
                                    <label htmlFor="name">E-mail</label>
                                    <input
                                        type="email"
                                        id="name"
                                        name="email"
                                        placeholder="Write your email"
                                    />
                                </div>
                                <div className="sh--create--your--account--form--group">
                                    <label htmlFor="name">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Write your password"
                                    />
                                </div>
                                <div className="sh--create--your--account--form--group">
                                    <label htmlFor="name">Confirm Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Write your confirm password"
                                    />
                                </div>
                                <div className="sh--create--your--account--form--checkbox">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I accept <span className="sh--form--checkBox--span">rules</span>
                                            &nbsp;and agree*&nbsp;terms of service
                                        </label>
                                    </div>
                                </div>
                                <div className="sh--create--your--account--form--button">
                                    <button type="submit" className="sh--common--btn">
                                        Registration
                                    </button>
                                </div>
                                <div className="sh--login--form--link">
                                    <Link className="sh--login--form--link--a" to="/login">
                                        Already have an account?
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignUp;