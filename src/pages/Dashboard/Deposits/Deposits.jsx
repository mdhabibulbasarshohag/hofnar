import "./Deposits.css"

const Deposits = () => {
    return (
        <>
            <div className="sm-deposits-item">
                {/* Screen 1 */}
                <div
                    className="sm-deposits-not-found-item-wrap"
                    style={{ display: "block" }}
                >
                    <h6 className="sm-deposits-item-not-found-title">
                        Will be displayed here Your deposits
                    </h6>
                </div>
                {/* Screen 2 */}
                <div
                    className="sm-make-deposit-item-wrap"
                    style={{ display: "none" }}
                >
                    <h2 className="sm-make-deposit-item-title">AI TRADER</h2>
                    <ul className="sm-make-deposit-item-list">
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Amount of deposit
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                500.00 USD
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Total Accrued funds
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                0.00 USD
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Accruals
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                0 of 30
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Next Accrual
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                Dec 23, 2024 08:41
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Status
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                Active
                            </div>
                        </li>
                    </ul>
                    <div className="sm-make-deposit-item-bottom">
                        <button className="sm-common-btn dark">Cancle</button>
                        <button className="sm-common-btn">More Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deposits;