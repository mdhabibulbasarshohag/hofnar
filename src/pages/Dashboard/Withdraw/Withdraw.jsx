import "./Withdraw.css";

const Withdraw = () => {
    return (
        <>
            <div className="sl-dashboard-item">
                <div className="add-founds-category-wrapper">
                    <div className="row g-2 g-lg-4">
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory1"
                                    className="d-none"
                                    defaultChecked=""
                                />
                                <label htmlFor="withdrawCategory1">Bitcoin</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory2"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory2">Bitcoin Cash</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory3"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory3">Ethereum</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory4"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory4">Litecoin</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory5"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory5">Dash</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory6"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory6">Usdt TRC20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory7"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory7">Usdt BEP20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory8"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory8">Usdt ERC20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory9"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory9">Tron</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory10"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory10">Doge</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory11"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory11">
                                    Binance Smart Chain
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory12"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory12">Busd BEP20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory13"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory13">ePayCore</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory14"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory14">Polygon MATIC</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="withdrawCategory"
                                    id="withdrawCategory15"
                                    className="d-none"
                                />
                                <label htmlFor="withdrawCategory15">Polygon USDT</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="add-founds-bottom-wrap">
                    <div className="input-single-item">
                        <label htmlFor="">Amount</label>
                        <input type="text" placeholder="Enter your amount" />
                    </div>
                    <button>Next</button>
                </div>
            </div>
        </>
    );
};

export default Withdraw;