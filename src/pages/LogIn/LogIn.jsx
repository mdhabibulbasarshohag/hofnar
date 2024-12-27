import { Link } from "react-router-dom";
import RobotoInvestments from "../../images/RobotoInvestments.png";

const LogIn = () => {
    return (
        <section className="sh--create--your--account--section sh--common--bg--body">
            <div className="container">
                <div className="sh--create--your--account">
                    <div className="sh--create--your--account--header">
                        <div className="sh--create--your--account--title">
                            <h2 className="sh--common--header--title">Login</h2>
                        </div>
                        <div className="sh--create--your--account--title--img">
                            <img src={RobotoInvestments} alt="header" />
                        </div>
                    </div>
                    <form action="" className="sh--create--your--account--row">
                        <div className="sh--create--your--account--col--header">
                            <div className="sh--create--your--account--form--title">
                                <h2 className="sh--common--sub--title">Login Account</h2>
                            </div>
                        </div>
                        <div className="sh--create--your--account--col--body">
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
                            <div className="sh--create--your--account--form--button">
                                <button type="submit" className="sh--common--btn">
                                    Log In
                                </button>
                            </div>
                            <div className="sh--login--form--link">
                                <Link
                                    className="sh--login--form--link--a"
                                    to="/sign-up"
                                >
                                    Create an account
                                </Link>
                                <a className="sh--login--form--link--a" href="#">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

    );
};

export default LogIn;