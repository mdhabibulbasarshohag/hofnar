import "./DashboardMain.css"

const DashboardMain = () => {
    return (
        <>
            <div className="sl-dashboard-item">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="sl-dashboard-inner-single-item">
                            <img src="/svg/dashboard-icon-1.svg" alt="" />
                            <p>Balance</p>
                            <button>10.00 USD</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sl-dashboard-inner-single-item">
                            <img src="/svg/dashboard-icon-2.svg" alt="" />
                            <p>Deposited</p>
                            <button>10.00 USD</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sl-dashboard-inner-single-item">
                            <img src="/svg/dashboard-icon-3.svg" alt="" />
                            <p>Affiliate Bonus</p>
                            <button>10.00 USD</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sl-dashboard-inner-single-item">
                            <img src="/svg/dashboard-icon-4.svg" alt="" />
                            <p>Accrued</p>
                            <button>10.00 USD</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sl-dashboard-inner-single-item">
                            <img src="/svg/dashboard-icon-5.svg" alt="" />
                            <p>Added</p>
                            <button>10.00 USD</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sl-dashboard-inner-single-item">
                            <img src="/svg/dashboard-icon-6.svg" alt="" />
                            <p>Withdrawal</p>
                            <button>10.00 USD</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardMain;