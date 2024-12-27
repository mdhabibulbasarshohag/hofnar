import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <header className="navbar--wrapper">
      <div className="container">
        <div className="navbar--main--wrapper">
          <div className="nr--navbar--logo">
            <Link className="nr--logo" to="/">
              Logo
            </Link>
          </div>
          <div className="navbar--menus--wrapper">
            <div className="nr--login--btn">
              <Link to="/logIn">Log In</Link>
            </div>
            <div className="nr--getStrat--btn">
              <Link to="/sign-up">Get Started</Link>
            </div>
            <div className="menu--wrapper--btn">
              <div className="menu--wrapper--clickble" onClick={menuHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={60}
                  height={60}
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M8 11H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 24H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 36H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 49H52"
                    stroke="#18CAAE"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {menu && (
                <div className="menuHeader--munu--wrappers">
                  <ul>
                    <li>
                      <Link to="/">
                        <span>Home</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="./contact">
                        <span>Contact us</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="terms">
                        <span>Terms</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/paymenthistory">
                        <span>Payment History</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/presentation">
                        <span>Presentation</span>
                        <div className="right--icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={32}
                            height={32}
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M12.0001 24L20 16L12 8"
                              stroke="#F9FAFB"
                              strokeWidth="1.5"
                              strokeMiterlimit={16}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;