import { NavLink, Outlet } from "react-router-dom";
import "./MyTeam.css"

const MyTeam = () => {
    return (
        <>
            <div className="sm-myteam-item">
                {/* My team Top */}
                <div className="sm-myteam-item-top">
                    <div className="sm-myteam-item-top-item">
                        <h6 className="sm-myteam-item-top-item-title">Inviter</h6>
                        <h3 className="sm-myteam-item-top-item-value">hofnar05</h3>
                    </div>
                    <div className="sm-myteam-item-top-item">
                        <h6 className="sm-myteam-item-top-item-title">Name</h6>
                        <h3 className="sm-myteam-item-top-item-value">hofnar05</h3>
                    </div>
                    <div className="sm-myteam-item-top-item">
                        <h6 className="sm-myteam-item-top-item-title">Email</h6>
                        <h3 className="sm-myteam-item-top-item-value">
                            hofnar05.cc@gmail.com
                        </h3>
                    </div>
                </div>
                {/* My team Bottom */}

                <div className="sm-myteam-item-bottom">
                    <div className="sm-myteam-item-bottom-item">
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "sm-team-nav-tab-btn active" : "sm-team-nav-tab-btn"}
                            to="/dashboard/my-team" end>
                            
                            Level 1
                        </NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "sm-team-nav-tab-btn active" : "sm-team-nav-tab-btn"}
                            to="/dashboard/my-team/level-2">
                            Level 2
                        </NavLink>
                        <NavLink className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "sm-team-nav-tab-btn active" : "sm-team-nav-tab-btn"}
                            to="/dashboard/my-team/level-3">
                            Level 3
                        </NavLink>
                    </div>
                    {/* Tab Content */}
                    <div className="sm-myteam-item-bottom-tab-content">
                        <Outlet></Outlet>
                    </div>








                    {/* <ul
                        className="nav nav-pills mb-3 sm-team-nav-tab"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item" role="presentation">
                            <button
                                className="sm-team-nav-tab-btn active"
                                id="pills-lavel-one-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-lavel-one"
                                type="button"
                                role="tab"
                                aria-controls="pills-lavel-one"
                                aria-selected="true"
                            >
                                Lavel 1
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="sm-team-nav-tab-btn"
                                id="pills-lavel-two-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-lavel-two"
                                type="button"
                                role="tab"
                                aria-controls="pills-lavel-two"
                                aria-selected="false"
                            >
                                Lavel 2
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className="sm-team-nav-tab-btn"
                                id="pills-lavel-three-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-lavel-three"
                                type="button"
                                role="tab"
                                aria-controls="pills-lavel-three"
                                aria-selected="false"
                            >

                            </button>
                        </li>
                    </ul> */}
                    {/* <div className="tab-content" id="pills-tabContent">
                        <div
                            className="tab-pane fade sm-team-nav-tab-content show active"
                            id="pills-lavel-one"
                            role="tabpanel"
                            aria-labelledby="pills-lavel-one-tab"
                        >
                            <div className="sm-team-nav-tab-content-item-wrapper">
                                <div className="sm-team-nav-tab-content-item">
                                    <h3 className="sm-team-nav-tab-content-title">FUND</h3>
                                    <div className="sm-team-nav-tab-content-item-info">
                                        <h6 className="sm-team-nav-tab-content-item-title">
                                            Total
                                        </h6>
                                        <h3 className="sm-team-nav-tab-content-item-value">
                                            0.00 USD
                                        </h3>
                                    </div>
                                </div>
                                <div className="sm-team-nav-tab-content-item">
                                    <h3 className="sm-team-nav-tab-content-title">FUND</h3>
                                    <div className="sm-team-nav-tab-content-item-info">
                                        <h6 className="sm-team-nav-tab-content-item-title">
                                            Total
                                        </h6>
                                        <h3 className="sm-team-nav-tab-content-item-value">
                                            0.00 USD
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade sm-team-nav-tab-content"
                            id="pills-lavel-two"
                            role="tabpanel"
                            aria-labelledby="pills-lavel-two-tab"
                        >
                            <div className="sm-team-nav-tab-content-item-wrapper">
                                <div className="sm-team-nav-tab-content-item">
                                    <h3 className="sm-team-nav-tab-content-title">FUND</h3>
                                    <div className="sm-team-nav-tab-content-item-info">
                                        <h6 className="sm-team-nav-tab-content-item-title">
                                            Total
                                        </h6>
                                        <h3 className="sm-team-nav-tab-content-item-value">
                                            0.00 USD
                                        </h3>
                                    </div>
                                </div>
                                <div className="sm-team-nav-tab-content-item">
                                    <h3 className="sm-team-nav-tab-content-title">FUND</h3>
                                    <div className="sm-team-nav-tab-content-item-info">
                                        <h6 className="sm-team-nav-tab-content-item-title">
                                            Total
                                        </h6>
                                        <h3 className="sm-team-nav-tab-content-item-value">
                                            0.00 USD
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="tab-pane fade sm-team-nav-tab-content"
                            id="pills-lavel-three"
                            role="tabpanel"
                            aria-labelledby="pills-lavel-three-tab"
                        >
                            <div className="sm-team-nav-tab-content-item-wrapper">
                                <div className="sm-team-nav-tab-content-item">
                                    <h3 className="sm-team-nav-tab-content-title">FUND</h3>
                                    <div className="sm-team-nav-tab-content-item-info">
                                        <h6 className="sm-team-nav-tab-content-item-title">
                                            Total
                                        </h6>
                                        <h3 className="sm-team-nav-tab-content-item-value">
                                            0.00 USD
                                        </h3>
                                    </div>
                                </div>
                                <div className="sm-team-nav-tab-content-item">
                                    <h3 className="sm-team-nav-tab-content-title">FUND</h3>
                                    <div className="sm-team-nav-tab-content-item-info">
                                        <h6 className="sm-team-nav-tab-content-item-title">
                                            Total
                                        </h6>
                                        <h3 className="sm-team-nav-tab-content-item-value">
                                            0.00 USD
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default MyTeam;