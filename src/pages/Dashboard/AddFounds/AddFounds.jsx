import "./AddFounds.css";
const AddFounds = () => {
    return (
        <>
            <div className="sl-dashboard-item">
                <div className="add-founds-category-wrapper">
                    <div className="row g-2 g-lg-4">
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory1"
                                    className="d-none"
                                    defaultChecked=""
                                />
                                <label htmlFor="addFoundCategory1">Bitcoin</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory2"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory2">Bitcoin Cash</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory3"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory3">Ethereum</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory4"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory4">Litecoin</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory5"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory5">Dash</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory6"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory6">Usdt TRC20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory7"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory7">Usdt BEP20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory8"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory8">Usdt ERC20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory9"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory9">Tron</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory10"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory10">Doge</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory11"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory11">
                                    Binance Smart Chain
                                </label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory12"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory12">Busd BEP20</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory13"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory13">ePayCore</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory14"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory14">Polygon MATIC</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="add-founds-category">
                                <input
                                    type="radio"
                                    name="addFoundCategory"
                                    id="addFoundCategory15"
                                    className="d-none"
                                />
                                <label htmlFor="addFoundCategory15">Polygon USDT</label>
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

export default AddFounds;