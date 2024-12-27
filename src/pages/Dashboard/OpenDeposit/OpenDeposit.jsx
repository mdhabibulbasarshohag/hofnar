import "./OpenDeposit.css"

const OpenDeposit = () => {
    return (
        <>
            <div className="sm-open-deposit-item">
                {/* Screen 1 */}
                <div style={{ display: "block" }}>
                    <div className="sm-open-deposit-item-wrap">
                        <div className="sm-open-deposit-item-left">
                            <h6 className="sm-open-deposit-item-title">
                                profit per day
                            </h6>
                            <h3 className="sm-open-deposit-item-amount">
                                From 3% to 6%
                            </h3>
                            <ul className="sm-open-deposit-item-list">
                                <li className="sm-open-deposit-item-list-item">
                                    Profit varies per day depending on the trade.
                                </li>
                                <li className="sm-open-deposit-item-list-item">
                                    Profit accruals every day.
                                </li>
                                <li className="sm-open-deposit-item-list-item">
                                    Compound interest.
                                </li>
                                <li className="sm-open-deposit-item-list-item">
                                    The deposit is returned after 30 days.
                                </li>
                            </ul>
                        </div>
                        <div className="sm-open-deposit-item-right">
                            <h6 className="sm-open-deposit-item-title">
                                Amount to deposit
                            </h6>
                            <h3 className="sm-open-deposit-item-amount">
                                Min: 10$ - 100000$
                            </h3>
                        </div>
                    </div>
                    <div className="sm-open-deposit-bottom">
                        <form action="#" className="sm-open-deposit-form">
                            <div className="sm-open-deposit-input">
                                <label
                                    htmlFor="depositAmount"
                                    className="sm-open-deposit-input-label"
                                >
                                    Amount
                                </label>
                                <input
                                    type="text"
                                    id="depositAmount"
                                    name="depositAmount"
                                    placeholder="Enter your amount"
                                    className="sm-open-deposit-input-field"
                                    required=""
                                />
                            </div>
                            <div className="sm-open-deposit-btn">
                                <button
                                    type="submit"
                                    className="sm-open-deposit-btn-submit sm-common-btn"
                                >
                                    Make Deposit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Screen 2 */}
                <div
                    className="sm-make-deposit-item-wrap"
                    style={{ display: "none" }}
                >
                    <h2 className="sm-make-deposit-item-title">Make Deposit</h2>
                    <ul className="sm-make-deposit-item-list">
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                State
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                Active
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Created
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                Dec 22, 2024 08:41
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Pay.system
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                Internal
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Amount
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                500.00 USD
                            </div>
                        </li>
                        <li className="sm-make-deposit-item-list-item">
                            <div className="sm-make-deposit-item-list-item-title">
                                Plan
                            </div>
                            <div className="sm-make-deposit-item-list-item-value">
                                At Trader
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
                                Last Accrual
                            </div>
                            <div className="sm-make-deposit-item-list-item-value" />
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
                                Amount of change*
                            </div>
                            <div className="sm-make-deposit-item-list-item-value sm-make-deposit-item-list-item-value-change">
                                0
                            </div>
                        </li>
                    </ul>
                    <div className="sm-make-deposit-item-bottom">
                        <button className="sm-common-btn">Add</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpenDeposit;