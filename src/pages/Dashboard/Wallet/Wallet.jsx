import "./Wallet.css";


const Wallet = () => {
    return (
        <>
            <div className="sl-dashboard-item">
                <div className="row g-2 g-lg-4">
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Bitcoin</h3>
                            <div className="input-single-item">
                                <label htmlFor="">BCH-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>BitcoinCash</h3>
                            <div className="input-single-item">
                                <label htmlFor="">BCH-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Ethereum ETH</h3>
                            <div className="input-single-item">
                                <label htmlFor="">Ethereum-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Litecoin </h3>
                            <div className="input-single-item">
                                <label htmlFor="">LTC-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Dash </h3>
                            <div className="input-single-item">
                                <label htmlFor="">Dash-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>TRC20 USDT</h3>
                            <div className="input-single-item">
                                <label htmlFor="">TRON-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>BEP20 USDT</h3>
                            <div className="input-single-item">
                                <label htmlFor="">BSC-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>ERC20 USDT</h3>
                            <div className="input-single-item">
                                <label htmlFor="">Ethereum-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>TRON TRX</h3>
                            <div className="input-single-item">
                                <label htmlFor="">TRON-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Dogecoin</h3>
                            <div className="input-single-item">
                                <label htmlFor="">DOGE-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>BSC BNB</h3>
                            <div className="input-single-item">
                                <label htmlFor="">BSC-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>BEP20 BUSD</h3>
                            <div className="input-single-item">
                                <label htmlFor="">BSC-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>ePayCore USD</h3>
                            <div className="input-single-item">
                                <label htmlFor="">Account</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Polygon MATIC</h3>
                            <div className="input-single-item">
                                <label htmlFor="">Polygon-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sl-wallets-single-item">
                            <h3>Polygon USDT</h3>
                            <div className="input-single-item">
                                <label htmlFor="">Polygon-Address</label>
                                <input type="text" placeholder="Code here..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wallets-save-btn-wrap">
                    <button>Save</button>
                </div>
            </div>
        </>
    );
};

export default Wallet;